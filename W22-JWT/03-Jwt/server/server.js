// 1. import express and router
const express = require('express')
require('dotenv').config()

// 2. create server
const app = express()

const connectDB = require('./config/db')
connectDB()

/**
 * DEFINE ROUTES
 */
app.use('/customers', require('./api/customers'));
app.use('/users', require('./api/users'));

// SERVE STATIC FILES
app.use(express.static('uploadsStorage'))

// 4. listen to some port

const port = process.env.PORT || 8008;
app.listen(port, () => console.log('Server is UP and Running at port: ' + port))