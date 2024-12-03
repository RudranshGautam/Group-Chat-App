// config/db.js
const mysql = require('mysql2');

// Create and export a MySQL connection
const db = mysql.createConnection({
    host: 'localhost',  // your MySQL host
    user: 'root',       // your MySQL username
    password: 'rudransh@1',       // your MySQL password
    database: 'signupDB' // database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as id ' + db.threadId);
});

module.exports = db;
