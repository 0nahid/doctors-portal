const express = require('express')
const app = express()
const port = process.env.PORT || 5500
const product = require('./api/products')

app.use('/api/products', product)

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))