const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Define the route to get all users
router.get('/', userController.getUsers); // Handle GET requests to fetch users

// Define the route to add a new user
router.post('/', userController.addUser); // Handle POST requests to add a user

module.exports = router;
