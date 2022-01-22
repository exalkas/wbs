const express = require('express')
const router = express.Router();

// MIDDLEWARES
const bodyParser = require('body-parser');

router.use(bodyParser.json()) // to parse json
router.use(bodyParser.urlencoded({extended:true}))


// MODELS
const Customers = require('../models/customers')

// ROUTES

// /customers/find
router.get('/find', async (req, res) => {

    console.log('find route: req.query', req.query.name)

    const searchRegex = new RegExp(req.query.name)

    console.log('Find route: regex=', searchRegex)

    const sort = {}

    req.query.sort = true
    if (req.query.sort) sort.username = -1

    const data = await Customers
    .find({email: searchRegex})
    .sort(sort)
    .exec()
    // const data = await Customers.find({name: 'Elizabeth Ray'})

    res.send(data)
} )
router.post('/find', async (req, res) => {

    console.log('find route: req.query', req.query.name)

    const searchRegex = new RegExp(req.query.name)

    console.log('Find route: regex=', searchRegex)

    const sort = {}

    req.query.sort = true
    if (req.query.sort) sort.username = -1

    const data = await Customers
    .find({email: searchRegex})
    .sort(sort)
    .exec()
    // const data = await Customers.find({name: 'Elizabeth Ray'})

    res.send(data)
} )
// /customers/find with params
router.get('/find/:search', async (req, res) => {

    console.log('find route: req.params', req.params)

    const searchRegex = new RegExp(req.params.search)

    // console.log('Find route: regex=', searchRegex)

    const sort = {}

    req.query.sort = true
    if (req.query.sort) sort.username = -1

    const data = await Customers
    .find({email: searchRegex})
    .sort(sort)
    .exec()
    // const data = await Customers.find({name: 'Elizabeth Ray'})

    res.send(data)
} )

// /customers/add
router.post('/add', async (req, res) => {

    try {
        console.log('add route: body is', req.body)

        const newCustomer = new Customers(req.body)
        console.log('add route: newCustomer', newCustomer)
    
        
        const data = await newCustomer.save()
    
        console.log('Data is: ', data)

        
    } catch (error) {
        console.log(error.message)
    }
 
    res.send('hello from add route');
   
})

// /customers/update
router.put('/update', async (req, res) => {

    console.log('update route: body', req.body)

    const {id, ...customer} = {...req.body}

    const updateUser = await Customers.findByIdAndUpdate(req.body.id, req.body, {new: true})

    console.log('response is', updateUser)

    res.send('Hello from update route')
} )

// /customers/delete
router.delete('/delete', async (req, res) => {

    console.log('update route: query', req.query)

    const deletedUser = await Customers.findByIdAndDelete(req.query.id)
    console.log('Deleted user is', deletedUser)

    if (deletedUser) res.send('Hello from delete route');
    else res.send('User Not found')
    

} )

module.exports = router;