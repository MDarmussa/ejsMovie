const express = require('express')
const router = express.Router();

const db = require('../models/db')

router.get('/', (req, res) => {
    res.render('partials/showDetailsP', {
        db: db,
    })
})

module.exports = router