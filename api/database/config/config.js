require('dotenv').config();

console.log(process.env.MYSQL_USER, 'xx');
module.exports = {
  development: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'HotMiles',
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
  },
  test: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'HotMiles',
    host: process.env.MYSQL_HOSTNAME,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: 'HotMiles',
    host: process.env.HOSTNAME,
    dialect: 'mysql',
  },
};