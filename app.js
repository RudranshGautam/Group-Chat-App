// app.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 5000;

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// Use the routes from the authRoutes module
app.use('/api', authRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
