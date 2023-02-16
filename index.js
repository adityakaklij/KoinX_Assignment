const express = require('express')
require("dotenv").config();
const mongoose = require('mongoose')
const User = require('./DB/UserModel') 
const connectDB = require('./DB/Connect'); 
const { ethers } = require('ethers');
const Web3 = require('web3');

const app = express()
const port = 3000;

const ETH_API= process.env.ETHERSCAN_API

// let data = [{}]

const dbURL = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@koinxassignment.cibtqqz.mongodb.net/?retryWrites=true&w=majority`


// const connectToDB = async() => {
    
//     console.log("Indide the function")
//     await  mongoose.connect(dbURL)
//     console.log("Connected")
    

    
//     console.log("UserTXDB Schama defined")
    
//     const SomeModel = mongoose.model("UserTxDB", UserTxDb);
//     console.log("SomeMode;")
    
//     // const userData = new SomeModel({"address": "1234", "to_address": "4321","From_address": "9876", "Value" : "444333444"})
//     const userData = new SomeModel({"address": "2nd", "to_address": "2nd to address","From_address": "2nd from", "Value" : "00999898"})
//     console.log("user Data given")
//     userData.save((err) => {
//         if(err){
//             console.log(err)
//         }
//         else{
//             console.log("Saved !!!!!")
//         }
//     })

// }


const start = async() => {
    // await connectDB(process.env.MONGODB_URL)

    
    // getETHPrice(); // Continous fun to retrive the price
    
    app.listen(port, () => {
        console.log("Listing on the port")
    })


}

// Task 1
// Fetching Normal Tx
const getDataFromETHScan = async(_address) => {

    const tx = await fetch(`https://api.etherscan.io/api?module=account&action=txlist&address=${_address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${ETH_API}`).then(res => res.json()).then(data => {
        console.log("data:- ", data)
        for (let i = 0; i < (data.result).length; i ++ ){

            console.log("Block Hash",data.result[i].hash) // Hash of the tx.
            console.log("Block Hash",data.result[i].timeStamp) // Time stamp 
            console.log( "From:- ", data.result[i].from) // from address
            console.log("to:- ",data.result[i].to) // to address
            console.log("Value:- ",data.result[i].value) // Amount of ETH transfer
            console.log("Is Error:- ",data.result[i].isError) // 0 or 1
            console.log("functionName:- ",data.result[i].functionName)
        }
      
    })

    return "Done with calling the address"
}


app.get('/', (req, res) => {
    res.send("Inside the get!")
    // connectToDB()
})


// The below function is returining the normal txs from the input address.
app.get('/address/:add', async (req, res) => {
    console.log(req.params.add)
    let m  = await getDataFromETHScan(req.params.add)
    // res.send(`We got ${req.params.add}`)
    res.send(m)
})

// Task 2
// Fetching ETH price, 10 min interval
const getETHPrice = async() => {
    setInterval ( async () => {
        const tx = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=inr`).then(res => res.json()).then(details => {
            console.log("data:- ", details.ethereum.inr)      
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
    res.send(  `Balance of user:-  ${balance[0]} \n Current value:- ₹ ${balance[1]}`)
})



start()