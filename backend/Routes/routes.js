const express = require('express')
const router = express.Router()
const { getRoute } = require('../Controllers/controllers')

router.get('/home', getRoute)

router.get('/about', (req, res) => {
    res.send('About')
})

module.exports = router