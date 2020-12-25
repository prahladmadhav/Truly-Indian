const mongoose = require('mongoose')

const Schema = mongoose.Schema
const addressSchema = new Schema({
    location:{
        type : String,
        required : true,
        min : 5,
        max : 100 
    },
    pincode:{
        type : Integer,
        required : true,
        min : 6,
        max : 6
    },
    city:{
        type : Integer,
        required : true,
        min : 3,
        max : 30
    },
    country:{
        type : Integer,
        required : true,
        min : 3,
        max : 30
    },
    customer : {
        type : Schema.Types.ObjectId,
        ref : 'Customer'
    }
},{
    timestamps : true
})

const Address = mongoose.model('Address',addressSchema)
module.exports = Address