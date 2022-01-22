const express = require('express')
const router = express.Router();

const bodyParser = require('body-parser');

const Mongoose = require('mongoose')

// MODELS
const User = require('../models/users');

// MIDDLEWARES
router.use(bodyParser.json()) // to parse json
router.use(bodyParser.urlencoded({extended:true}))


// ROUTES
router.post('/register', async (req, res) => {

    console.log('Users Route: register here! Body is', req.body)

    try {

        const user = new User(req.body); //create model. That's AN INSTANCE OF THE USER OBJECT
    
        console.log('register route: User is', user)
    
        const newUser = await user.save();
    
        console.log('user added is', newUser)
        
        if (newUser) res.send({success: true});
        else res.send({success: false, errorId: 1}) // user not created successfully

    } catch (err) {
        console.log(err.message)
        res.status(400).send(err.message)
    }
    
})

router.post('/login', async (req, res) => {

    console.log('Users Route: login here! Body is', req.body)

    try {

        const userToCheck = await User.findOne({username: req.body.username}); //create model. That's AN INSTANCE OF THE USER OBJECT
    
        console.log('Login: User to check is', userToCheck)
        
        if (userToCheck) {
            console.log('user found')
            
            const passMatch = await userToCheck.comparePassword(req.body.pass, userToCheck.pass)
            console.log('pass match is', passMatch)
            
            if (passMatch) {

                res.send({success: true});
            } else {
                res.send({success: false, errorId: 2}); // wrong pass

            }
        } else res.send({success: false, errorId: 1}) // user not found

    } catch (err) {
        console.log(err.message)
        res.status(400).send(err.message)
    }
    
})


module.exports = router;