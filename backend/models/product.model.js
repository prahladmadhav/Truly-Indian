const mongoose = require('mongoose')

const Schema = mongoose.Schema
const productSchema = new Schema({
    //As per Aunty
},{
    timestamps : true
})

const Product = mongoose.model('Product', productSchema)
module.exports = Product