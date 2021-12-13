const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/users', (req, res, next) => {
    res.send('<h1>users</h1>');
});

module.exports = router;