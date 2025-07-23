const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Initialize the Express application and set the port
const app = express();
const PORT = process.env.PORT || 3000;
console.log('Puerto:', PORT);

// Middleware setup
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Define the root route
app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando correctamente' });
});

// Import and use user and product routes
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes'); 
app.use('/api/users', userRoutes); 
app.use('/api/products', productRoutes); 

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});