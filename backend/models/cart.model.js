const mongoose = require('mongoose')

const Schema = mongoose.Schema
const cartSchema = new Schema({
    items : [{
        type : Schema.Types.ObjectId,
        ref : 'Product'
    }],
    customer : {
        type : Schema.Types.ObjectId,
        ref : 'Customer'
    }
},{
    timestamps : true
})

const Cart = mongoose.model('Cart',cartSchema)
module.exports = Cart