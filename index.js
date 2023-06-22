
const express = require('express');
const productController = require('./controllers/productController');

const app = express();
const PORT = 3000;

app.use(express.json());

// Create a new product
app.post('/products', productController.createProduct);

// Get all products
app.get('/products', productController.getProducts);

// Get a single product by ID
app.get('/products/:id', productController.getProductById);

// Update a product
app.put('/products/:id', productController.updateProduct);

// Delete a product
app.delete('/products/:id', productController.deleteProduct);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
