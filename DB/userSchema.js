const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    
    address : {type:String},
    normalTx:[]
    // to_address: {type:String},
    // From_address: {type:String},
    // Value: {type:String},
    // TimeStamp: {type:String},
    // IsTcComplete: {type:Number}
    
    
})

const ETHPrice = mongoose.Schema({
    ETHPrice: {type:String},
    Time_Stamp: {type:String}
})


// module.exports = mongoose.model('KoinXNormalTx', userSchema )
const UserSchema=  mongoose.model('KoinXNormalTx', userSchema )
const ethPrice  = mongoose.model('KoinXETHPrice', ETHPrice)

module.exports = {UserSchema, ethPrice}