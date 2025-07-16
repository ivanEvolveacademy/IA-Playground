

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
console.log('Puerto:', PORT);

// Middleware
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Conectado a MongoDB Atlas'))
  .catch(err => console.error('❌ Error:', err));

// Rutas básicas
app.get('/', (req, res) => {
  res.json({ mensaje: 'API funcionando correctamente' });
});

// Rutas de usuarios y productos
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});