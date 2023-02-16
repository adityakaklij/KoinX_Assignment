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


module.exports = mongoose.model('KoinXNormalTx', userSchema)