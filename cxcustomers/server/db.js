const mysql = require('mysql');

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Mig3l139",
  database: "db_cxcustomers",
});

module.exports = db;
