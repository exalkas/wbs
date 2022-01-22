const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');

// MIDDLEWARES
const bodyParser = require('body-parser');

router.use(bodyParser.json()) // to parse json
router.use(bodyParser.urlencoded({extended:true}))


// MODELS
const Users = require('../models/user')

router.get('/add', async (req, res) => {
    console.log('Hello from add route')
    
    const id = mongoose.Types.ObjectId();

    const user = {
        name: 'john',
        email: 'email@mail.com',
        token: id
    }

    // console.log('id is', id)
    const newUser = new Users(user)

    const userAdded = await newUser.save()

    console.log('user created:', userAdded)

    res.send('User added')
})

router.get('/verifytoken', async (req, res) => {

    console.log('Hello from verify token:', req.query.token)

    try {
        const data = await Users.find({token: req.query.token})

        if (data) res.send(data);
        // else res.send('Token not found')    
    } catch (err){
        console.log(err.message)
        res.send('Token not found or some error occured')
    }
    
})

module.exports = router