require('dotenv').config();

const mySQL = require('mysql2/promise');

const connection = mySQL.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB,
  port: process.env.MYSQL_PORT,
});

module.exports = connection;