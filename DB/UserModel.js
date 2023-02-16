const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    
    address : 
    {to_address: {type:String},
    From_address: {type:String},
    Value: {type:String},
    IsTcComplete: {type:String}
    },
    
})


module.exports = mongoose.model('KoinXNormalTx', userSchema)