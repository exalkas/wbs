// 1. import express and router
const express = require('express')
require('dotenv').config()

// 2. create server
const app = express()

const connectDB = require('./config/db')
connectDB()
// 3. create request listeners

// syntax: nameOfServer.HTTPVERB('path / endpoint', requestListener)

// import models
const Customers = require('./models/customers')

const customersGet = async (req, res) => {
    console.log('Customers GET endpoint says Hello World')

    const data = await Customers.find({}).limit(2)

    console.log('Data are:', data)
    res.send(data)
}


/**
 * MIDDLEWARE
 * 
 * express is basically a bunch of middleware calls
 * middleware can:
 * execute code
 * change req/res objects
 * end cycle
 * call next middleware
 * IT'S END OR NEXT
 */

// MIDDLEWARE TYPES
// 1. app level middlewares
// with app.use

// Create a middleware
// ORDER OF MIDDLEWARE DECLARATION MATTERS!!!
const printSomething = (req, res, next) => {
    console.log('---------------------')
    console.log('req.params is', req.params)
    console.log('Print something here')
    console.log('req.query is', req.query)
    console.log('name is', req.query.name)
    console.log('---------------------')


    next() // IF comment this then the res hangs
}


const timeNow = (req, res, next) => {
    console.log('Time now is', Date.now())
    next()
}

// I don't need to pass to the next middleware, no next is not needed
const findCustomer = async (req, res) => {
    
    console.log('---------------------')
    console.log('req.params is', req.params)
    console.log('Print something here')
    console.log('req.query is', req.query)
    console.log('name is', req.query.name)
    console.log('---------------------')
    
    const data = await Customers.find({name: {$regex: /a/}}).limit(2)

    // console.log('find customer here:', data)
    res.send(data)

}

// app.use(printSomething) // demo middleware
// app.use(timeNow)
// app.use(findCustomer)

/**
 * DEFINE ROUTES
 */
app.use('/customers', require('./api/customers'));

// SERVE STATIC FILES
app.use(express.static('uploadsStorage'))

// 4. listen to some port

const port = process.env.PORT || 8008;
app.listen(port, () => console.log('Server is UP and Running at port: ' + port))