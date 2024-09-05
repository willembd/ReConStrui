const express = require('express')
const cors = require('cors')

const router = require('./src/routes')

const app = express()

app.use(express.json())
app.use(cors())

app.use(router)

app.listen(3031, () => {
    console.log('Ola mundo')
})