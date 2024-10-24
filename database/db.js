const mysql = require("mysql2");
require('dotenv').config()

//database connection
const pool = mysql.createPool({
host:process.env.HOST,
user:process.env.USER,
database:process.env.DATABASE,
password:process.env.PASSWORD
});

//checking the connectyion
pool.getConnection((err, connection) => {
  if (err) {
    console.log("connection err");
  }
  console.log("connected successfully");
  connection.release();
});

module.exports=pool