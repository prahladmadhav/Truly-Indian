const mongoose = require('mongoose')

const Schema = mongoose.Schema
const customerSchema = new Schema({
    firstname:{
        required: true,
        trim: true,
        min: 6,
        max: 100
    },
    lastname:{
        required: true,
        trim: true,
        min: 6,
        max: 100
    },
    email:{
        type: String,
        required: true,
        unique: true,
        min: 6,
        max: 255
    },
    password:{
        type: String,
        required: true,
        min: 6,
        max: 1024
    }
},{
    timestamps : true
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer