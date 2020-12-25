const router = require('express').Router()
const Product = require('../models/product.model')

router.route('/').get((req,res) => {
    Product.find()
        .then(products => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req,res) =>{
    //const  = req.
    
    const newProduct = new Product({
        // Enter the Product attributes
    })
})