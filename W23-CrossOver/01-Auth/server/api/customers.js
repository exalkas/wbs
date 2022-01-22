const express = require('express')
const router = express.Router();

const bodyParser = require('body-parser');

const Mongoose = require('mongoose')

// MODELS
const Customers = require('../models/customers');

// MIDDLEWARES
router.use(bodyParser.json()) // to parse json
router.use(bodyParser.urlencoded({extended:true}))

const multer = require('multer')
const uploadSimple = multer({dest: 'uploads234/'})

const storage = multer.diskStorage({
    destination: function(req, file, cb) { // cb is a callback function
        cb(null, 'uploadsStorage/')
    },
    filename: function (req, file, cb) {

        console.log('FILE IS: ', file, file.fieldname)

        if (file.mimetype.includes('image')) {

            const extension = file.mimetype.includes('jpeg') ? '.jpg' : '.png'
            
            cb(null, Date.now() + '-' + file.originalname + extension )

        } else {
            cb('This is not an image file', false)
        }
       
    }
})

const upload = multer({ storage: storage })

// ROUTES
router.post('/add', async (req, res) => {

    
    console.log('Customers Route: Add here! Body is', req.body)

    const newCustomer = new Customers(req.body); //create model

    console.log('add route: Customer is', newCustomer)

    const customer = await newCustomer.save();

    console.log('customer added is', customer)
    
    res.send(customer)
})

router.get('/find', async (req, res) => {

    console.log('Find route: query is', req.query.term)

    const searchRegex = new RegExp(req.query.term);

    const data = await Customers.find({name: searchRegex}).limit(2)
    // const data = await Customers.find({name: {$regex: /term/}}).limit(2)

    console.log('find route: data are:', data)
    res.send(data)

    // res.send('Hello from find route')
})

router.get('/find/:id', async (req, res) => {

    console.log('Find PARAMS route: query is', req.params)

    // const searchRegex = new RegExp(req.query.term);

    // const data = await Customers.find({name: searchRegex}).limit(2)
    // // const data = await Customers.find({name: {$regex: /term/}}).limit(2)

    // console.log('find route: data are:', data)
    res.send("hello from req params")

    // res.send('Hello from find route')
})

router.post('/findComplex', async (req, res) => {

    console.log('Find Complex route: query is', req.body)

    const keys = Object.entries(req.body)

    console.log('keys are', keys)

    const search = {}

    // const searchRegex = new RegExp(req.query.term);

    // const data = await Customers.find({name: searchRegex}).limit(2)
    // // const data = await Customers.find({name: {$regex: /term/}}).limit(2)

    // console.log('find route: data are:', data)
    res.send("hello from Copmlex find")

    // res.send('Hello from find route')
})

router.put('/update', async (req, res) => {
    console.log('Update route here!')

    console.log('update route: body is', req.body)

    // need to destructure to remove the id so we can update the document in db
    const {_id, ...newCustomer} = {...req.body}

    const updatedUser = await Customers.findByIdAndUpdate(_id, newCustomer, {new: true}).exec()

    console.log('update user is', updatedUser)

    res.send(updatedUser)
})

router.delete('/delete', async (req, res) => {
    console.log('delete route here')
    console.log('req.body is', req.query)

    const id = Mongoose.Types.ObjectId(req.query.id)
    
    const deletedCustomer = await Customers.findByIdAndDelete(id)

    console.log('deleted is', deletedCustomer)

    if (deletedCustomer) res.send('deleted successfully');
    else res.send('User not found')
})

router.post('/addImage', upload.single('image'), async (req, res) => {

    console.log('Hello from addImage')
    res.send('file received')
})

module.exports = router;