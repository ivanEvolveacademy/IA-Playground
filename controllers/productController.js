const fs = require('fs');
const path = require('path');

// Definir la ruta al archivo JSON que contiene los productos
const productsFilePath = path.join(__dirname, '../models/products.json');

// Controlador para obtener la lista de productos
exports.getProducts = (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


