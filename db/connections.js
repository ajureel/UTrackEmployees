const mysql = require('mysql2');
const mystuff = require('../utils/mystuff');

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'root',
      // Your MySQL password
      password: mystuff,
      database: 'company'
    },
    console.log('Connected to the company database.')
);

module.exports = db;