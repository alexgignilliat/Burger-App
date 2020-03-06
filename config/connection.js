// Set up MySQL connection.
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'burgers_db'
});
// Make connection.
connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("connected as id " + connection.threadId);
})
// Export connection for our ORM to use.
module.exports = connection;