const express = require('express')
const app = express()
const port = process.env.PORT || 9000

const db = require('../config/db')
db();

const secure = (req, res, next) => {

    console.log('secure middle is here')
    next()
}

// app.use(secure)

app.use('/users', require('../apis/users'))

app.get('/', (req,res) => {

    res.send('hello from /')
})
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
