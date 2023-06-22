const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// MongoDB configuration
require('./config/db');

// Product model
const Product = require('./models/product');

// Controller
const productController = require('./controllers/productController');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the DressStore!');
});

app.get('/products', productController.getAllProducts);
app.post('/products', productController.createProduct);

// Add other routes for update, delete, etc.

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
