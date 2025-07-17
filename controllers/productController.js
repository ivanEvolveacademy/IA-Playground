const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../models/products.json');

exports.getProducts = (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addProduct = (req, res) => {
  try {
    const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
    const newProduct = req.body;
    products.push(newProduct);
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
