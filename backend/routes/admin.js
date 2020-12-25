const router = require('express').Router()
const Admin = require('../models/admin.model')

router.route('/').get((req,res) =>{
    Admin.find()
    
})