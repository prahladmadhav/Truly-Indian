const mongoose = require('mongoose')

const Schema = mongoose.Schema
const wishlistSchema = new Schema({
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

const Wishlist = mongoose.model('Wishlist',wishlistSchema)
module.exports = Wishlist