const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    username : {
        type: String
    },
    name: {
        type: String
    },
    address: {
        type: String
    }
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer