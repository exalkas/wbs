// 1. import express
const express = require('express')
require('dotenv').config()

// 2. create server
const app = express()

// 3. create request listeners

// Routing
// syntax: nameOfServer.HTTPVERB('path / endpoint', requestListener)

// import models
const Customers = require('./models/customers')

/**
 * HTTP VERBS:
 * GET => used for retrieving data
 * POST => used for adding data
 * PUT => used for updating/changing data
 * DELETE => ...
 */
const customersGet = async (req, res) => {
    console.log('Customers GET endpoint says Hello World')

    const data = await Customers.find({}).limit(1)

    console.log('Data are:', data)
    res.send(data)
}

const connectDB = require('./config/db')
connectDB()

// req, res are the objects request and response
// next is a callback function that will be called after completion of our code inside this function
const printSomething = (req, res, irene) => {

    console.log('PrintSomething Function here')

    irene()
}

const timeNow = (req, res, next) => {

    console.log('Time is:', Date.now())

    next()
}

// app.use(timeNow)
// app.use(printSomething)

// app.use('path', file to load request listeners)
// use the specified file for the specified path
app.use('/customers', require('./api/customers'))

// 4. listen to some port
// app.get('/*', (req, res) => {

//     // import builtin module 'path' from node
//     const path = require('path');
//     // sendFile() accepts a file
//     res.sendFile(path.resolve(__dirname, '../client', 'build','index.html'))
// })

const port = process.env.PORT || 8008;
app.listen(port, () => console.log('Server is UP and Running at port: ' + port))