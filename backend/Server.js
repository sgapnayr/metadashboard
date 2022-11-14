require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const debug = require('debug')('app:startup')
const colors = require('colors')
const helmet = require('helmet')
const routes = require('./Routes/routess')

app.use(helmet())

app.use('/', routes)

app.listen(PORT, debug(`Server is on PORT: ${PORT}`.cyan))