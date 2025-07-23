const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Define the route to get all products
router.get('/', productController.getProducts); // Handle GET requests to fetch products

// Define the route to add a new product
router.post('/', productController.addProduct); // Handle POST requests to add a product

module.exports = router;
