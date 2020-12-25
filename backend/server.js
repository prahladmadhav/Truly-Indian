const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())


mongoose.connect("mongodb://127.0.0.1:27017/trulyindian",{useNewUrlParser: true, useCreateIndex: true})
const connection = mongoose.connection
connection.once('open', () => {
    console.log(`MongoDB Connected`)
})

//Middleware
const addressRouter = require('./routes/address')
const adminRouter = require('./routes/admin')
const cartRouter = require('./routes/cart')
const customerRouter = require('./routes/customer')
const productRouter = require('./routes/product')
const salesRouter = require('./routes/sales')
const wishlistRouter = require('./routes/wishlist')

app.use('/address',addressRouter)
app.use('/admin',adminRouter)
app.use('/cart',cartRouter)
app.use('/customer',customerRouter)
app.use('/product',productRouter)
app.use('/sales',salesRouter)
app.use('/wishlist',wishlistRouter)


app.listen(port, () => {
    console.log(`Server is started on the port: ${port}`)
})