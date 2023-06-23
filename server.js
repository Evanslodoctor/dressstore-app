const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// MongoDB configuration
require('./config/db');

// Product model
const Product = require('./models/product');

// Controller functions
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
app.get('/products/:id', productController.getProductById);
app.put('/products/:id', productController.updateProduct);
app.delete('/products/:id', productController.deleteProduct);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
