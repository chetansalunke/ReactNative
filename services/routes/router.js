// routes.js

const express = require('express');
const userController = require('../controllers/controllers');
const router = express.Router();

// Route to get all users
router.get('/register', userController.getAllUsers);
router.post('/register', userController.createUser);

module.exports = router;
