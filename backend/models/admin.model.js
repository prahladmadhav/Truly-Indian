const mongoose = require('mongoose')

const Schema = mongoose.Schema
const adminSchema = new Schema({
    firstname:{
        required: true,
        trim: true,
        min: 6,
        max: 100
    },
    lasttname:{
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

const Admin = mongoose.model('Admin', adminSchema)

module.exports = Admin