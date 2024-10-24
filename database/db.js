const mysql = require("mysql2");
require('dotenv').config();

// Database connection pool
const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  database: process.env.DATABASE,
  password: process.env.PASSWORD
});

// Checking the connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Connection error:", err.message); // Log detailed error
    return; // Exit if there is an error
  }
  
  // If connected successfully
  if (connection) {
    console.log("Connected successfully to the database");
    connection.release(); // Release the connection back to the pool
  } else {
    console.error("No connection available to release.");
  }
});

module.exports = pool;
