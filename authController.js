// controllers/authController.js
const bcrypt = require('bcryptjs');
const userModel = require('../models/userModel');

const signup = async (req, res) => {
    const { name, email, phone, password } = req.body;

    // Validate that all fields are provided
    if (!name || !email || !phone || !password) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    // Check if the user already exists in the database
    userModel.findUserByEmail(email, async (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }

        if (results.length > 0) {
            return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Hash the password using bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Prepare new user data
        const newUser = { name, email, phone, password: hashedPassword };

        // Insert the new user into the database
        userModel.createUser(newUser, (err, results) => {
            if (err) {
                console.error('Database error:', err);
                return res.status(500).json({ success: false, message: 'Error saving user' });
            }

            return res.status(200).json({ success: true, message: 'User registered successfully' });
        });
    });
};

module.exports = {
    signup
};
