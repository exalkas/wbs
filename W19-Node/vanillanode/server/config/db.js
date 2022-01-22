/**
 * We will use Mongoose to connect to our DB
 */

// 1. import mongoose
const mongoose = require('mongoose');
require('dotenv').config()

// 2. connect to DB
const connectDB = async () => {

    try {

        await mongoose.connect(process.env.MONGO_DB_URI)
    
        console.log('MONGO DB connected....')
    } catch (err) {

        console.error(err.message)

        // If failure then exit server
        process.exit(1)
    }
}


module.exports = connectDB;