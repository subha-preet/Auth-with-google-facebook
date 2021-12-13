const path = require('path');
const express = require('express');

const usersController = require('../controllers/users');

const router = express.Router();

router.get('/login', usersController.getUser);
router.get('/signup', usersController.addNewUser);

module.exports = router;