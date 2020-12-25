const mongoose = require('mongoose')

const Schema = mongoose.Schema
const saleSchema = new Schema({
    order:[{
        items : [{
            type : Schema.Types.ObjectId,
            ref : 'Product'
        }]
    }],
    customer : {
        type : Schema.Types.ObjectId,
        ref : 'Customer'
    }
},{
    timestamps : true
})

const Sale = mongoose.model('Sale',saleSchema)
module.exports = Sale