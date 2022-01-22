/**
 * Node created on 2009
 * Based on V8 Engine
 * 
 * 
 * */ 

/**
 * CommonJS system of managing modules -> use require to import modules
 * files export using an object named module.exports
 * 
 * const someObject = module.exports
 * const someVariable = require('object that is being exported')
 */
const os = require('os')
console.log(os.freemem())
console.log(os.arch())

require('dotenv').config()

/**
 * Web server
 * 
 * web server is a software that accepts urls and responds back with a web page
 * or with some information
 * 
 * accepts requests and send back responses
 */

// 1. import http -> is an internal module
const http = require('http')

// import a model
 const Customers = require('./models/customers')

// THE ORDER OF PARAMETERS MATTERS
// req is the IncomingMessage Object
// res is the ServerResponse
const requestListener = async function (req, res) {

    const items = await Customers
    .find({username: 'matthewray'})
    .limit(10)

    console.log('items are:', items)
    // console.log('REQUEST IS: ', req)
    res.writeHead(200)
    // res.end('Hello World!')
    res.end(JSON.stringify(items))

    console.log('THe REPONSE Object is:', res.statusCode)
}

// createServer accepts a requestListener
// requestListener handles the request from the client and will send a response back
const server = http.createServer(requestListener)

// process.env is an OBJECT containing the user environemnt
// check here: https://nodejs.org/docs/latest/api/process.html#process_process_env
server.listen(process.env.PORT, () => console.log('Server is UP and running...'))

const connectDB = require('./config/db')
connectDB()