const router = require('express').Router()
const Address = require('../models/address.model')

router.route('/').get((req,res) =>{
    Address.find((err,address) =>{
        if(err){
            console.log(err)
        }
        else {
            res.status(200).json(address)
        }
    })
})

router.route('/:id').get((req,res) =>{
    let id = req.params.id
    Address.findById(id, (err, address) =>{
        if(!address){
        }
        else{
            res.json(address)
        }
    })
})

router.route('/add').post((req,res) =>{
    let address = new Address(req.body)
    address.save()
        .then(address =>{
            res.status(200).json({'address':'Address has been Added!'})
        })
        .catch(err => {
            res.status(400).send('Failure! Could not add Address')
        })
})

router.route('/update/:id').post((res,req) =>{
    Address.findById(req.params.id, (err, address) =>{
        if(!address){
            res.status(404).send('data not found')
        }
        else{
            address.
            address.save()
                .then(address =>{
                    res.status(200).json({'address':'Address has been Added!'})
                })
                .catch(err => {
                    res.status(400).send('Failure! Could not add Address')
                })
        }
    })
})

