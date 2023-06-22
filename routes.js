const express = require('express');
const router = express.Router();
const productController = require('./controllers/productController');

// Routes
router.get('/products', productController.getAllProducts);
router.post('/products', productController.createProduct);

// Add other routes for update, delete, etc.

module.exports = router;
