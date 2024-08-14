// db.js
const mysql = require("mysql2");

// Database connection details
const db = mysql.createConnection({
  host: "database-1.cb6i8yeiyqdc.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "rajesh123",
  port: "3306",
  database: "bookstore_db",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

module.exports = db;

