// Set up MySQL connection.
const mysql = require("mysql");
let connection;
if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
  } else {
  connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Praisethesun77166!',
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