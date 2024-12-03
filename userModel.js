// models/userModel.js
const db = require('../config/db');

// Function to check if a user already exists by email
const findUserByEmail = (email, callback) => {
    db.query('SELECT * FROM users WHERE email = ?', [email], callback);
};

// Function to insert a new user into the database
const createUser = (userData, callback) => {
    db.query('INSERT INTO users SET ?', userData, callback);
};

module.exports = {
    findUserByEmail,
    createUser
};
