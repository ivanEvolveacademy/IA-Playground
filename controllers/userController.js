const fs = require('fs');
const path = require('path');
const usersFilePath = path.join(__dirname, '../models/users.json');

exports.getUsers = (req, res) => {
  try {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.addUser = (req, res) => {
  try {
    const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8'));
    const newUser = req.body;
    users.push(newUser);
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2));
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
