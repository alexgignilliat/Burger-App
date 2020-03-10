//Setting up connection to mysql
const mysql = require("mysql");
let connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Praisethesun77166!',
    database: 'burgers_db'
  });
}
// Makeing the connection
connection.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log("connected as id " + connection.threadId);
})
// Export connection to require inside orm.js
module.exports = connection;