const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  dni: { type: String, required: true }, // Added field for DNI
  tlf: { type: String, required: t // Added field for phone number
});


module.exports = mongoose.model('User', userSchema);
