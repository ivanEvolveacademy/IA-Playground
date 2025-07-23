const fs = require('fs');
const path = require('path');

// Define the path to the users.json file located in the models directory
const usersFilePath = path.join(__dirname, '../models/users.json');

// Controller function to handle the retrieval of users
exports.getUsers = (req, res) => {
  try {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


