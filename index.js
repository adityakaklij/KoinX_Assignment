const express = require('express')
require("dotenv").config();
const {UserSchema, ethPrice} = require('./DB/userSchema') 
const connectDB = require('./DB/Connect'); 
const Web3 = require('web3');

const app = express()
const port = 3000;

const ETH_API= process.env.ETHERSCAN_API

const start = async() => {
    await connectDB(process.env.MONGODB_URL)
    getETHPrice(); // Continous fun to retrive the price
    
    app.listen(port, () => {
        console.log("Listing on the port")
    })
}

// Task 1
// Fetching Normal Tx
// And Storing the data to MongoDB
const getDataFromETHScan = async(_address) => {
    
    let requiredData = []
    const tx = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${_address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${ETH_API}`).then(res => res.json()).then(data => {
        // console.log("data:- ", data)
        for (let i = 0; i < (data.result).length; i ++ ){

            // console.log("Block Hash",data.result[i].hash) // Hash of the tx.
            // console.log("Block timeStamp",data.result[i].timeStamp) // Time stamp 
            // console.log( "From:- ", data.result[i].from) // from address
            // console.log("to:- ",data.result[i].to) // to address
            // console.log("Value:- ",data.result[i].value) // Amount of ETH transfer
            // console.log("Is Error:- ",data.result[i].isError) // 0 or 1
            // console.log("functionName:- ",data.result[i].functionName)

            let valueInETH = Web3.utils.fromWei(data.result[i].value, 'ether')
            requiredData.push([  data.result[i].from, data.result[i].to, valueInETH, data.result[i].timeStamp ])
            console.log("user Data given")
        }
    })

    // Storing the data as address => arrar [user's all txs (From, to, value, timestamp)]
    const user = new UserSchema({"address": _address, normalTx : requiredData })
    user.save((err) => {
    if(err){
        console.log(err)
    }
    else{
        console.log("Saved !!!!!")
    }
    })
    console.log("requiredData",requiredData)

    return "Done with calling the address"
}


app.get('/', (req, res) => {
    res.send("Inside the get!")
})


// The below function is returining the normal txs from the input address.
app.get('/address/:add', async (req, res) => {
    console.log(req.params.add)
    let m  = await getDataFromETHScan(req.params.add)
    res.send(m)
})


// Task 2
// Fetching ETH price, 10 min interval
// Storing the value with the timeStamp
const getETHPrice = async() => {
    setInterval ( async () => {
        let curreentPrice;
        let  date = new Date()
        const tx = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr`).then(res => res.json()).then(details => {
            console.log("data:- ", details.ethereum.inr)      
            curreentPrice =  details.ethereum.inr      
        })

        const user = new ethPrice({"ETHPrice": curreentPrice, Time_Stamp : date })
        user.save((err) => {
        if(err){
            console.log(err)
        }
        else{
            console.log("Date save !!!!!")
        }
        })
    }, 600000);
}

const getETHCurrentPrice = async() => {
    let currentPrice;
    const tx = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr`).then(res => res.json()).then(details => {
            console.log("data:- ", details.ethereum.inr)      
            currentPrice = details.ethereum.inr
    })

    return currentPrice;
}


// Task 3
// Fetch details of address
// This task can be completed with 2 ways
// Using Ether scan APIs
// Or with etherjs, directly calling the address with RPC end point.

// Also, Fetchd the data from the DataBase, But the User balance is not accurate, as I didn't deducted the gas fees paid by the user.

// From EtherScan APIs
const getUserBalance = async (_userAddress) => {
    let userBal
    const tx = await fetch(`https://api.etherscan.io/api?module=account&action=balance&address=${_userAddress}&tag=latest&apikey=${ETH_API}`).then(res => res.json()).then(bal => {
        console.log("balance:- ", bal)      
        console.log("balance. result:- ", bal.result)
        userBal = bal.result
    })
    const etherValue = Web3.utils.fromWei(userBal, 'ether');
    console.log("etherValue", etherValue)
    let inrPrice = await getETHCurrentPrice()
    let price = etherValue * inrPrice;
    console.log("Price:- ", price)
    return [etherValue, price];
}

app.get('/balance/:add', async (req, res) => {
    console.log(req.params.add)
    let balance = await getUserBalance(req.params.add)
    console.log("Balance:- ", balance)
    res.send(  `Balance of user:-  ${balance[0]} \n Current value:- ₹ ${balance[1]} \n the above balance is /n fetched using EtherScan APIs /n `)
})

// Fetching the user balance from the database
app.get('/getDB/:add', async (req, res) => {
    console.log(req.params.add)
    let userAddress = req.params.add
    let UserBalanceStart = 0;
    UserSchema.find({address:req.params.add}, function(err, user) {
        if(err){
            console.log(err)
        }
        else{
            let userDetails = (user[0].normalTx)
            // console.log(userDetails)

            let UserBalance = 0
            for(let i = 0; i < userDetails.length; i ++){
                // let from_Address = userDetails[i][0] // From Address
                // let to_Address = userDetails[i][1] // To Address 
                let token_value = userDetails[i][2]
                if (((userDetails[i][1]).localeCompare(userAddress)) === 1) {
                    console.log("Inside -")
                    UserBalance -= parseFloat(token_value)
                }
                else {
                    console.log("Inside +")
                    UserBalance += parseFloat(token_value)
                }
            }
            UserBalanceStart += UserBalance

            console.log("UserBalance = ", UserBalance)
            console.log("UserBalanceStart = ", UserBalanceStart)
            
            console.log(("Done"))
            res.send(  `Balance of user ${req.params.add} is ${UserBalanceStart} ETH, it's not accurate as we are not deducting the gas fee that user spent!`)
        }
    })
    console.log("UserBalance = ", UserBalanceStart)

})

start()