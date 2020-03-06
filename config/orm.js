// Import MySQL connection.
const connection = require("../config/connection.js");


function printQuestionMarks(num) {
  let arr = [];

  for (let i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  let arr = [];
  // loop through the keys and push the key/value as a string int arr
  for (let key in ob) {
    let value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations 
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // example {devoured: true} => ["devoured=true"]
      arr.push(key + "=" + value);
    }
  }
  // Translate array of strings to a single comma-separated string
  return arr.toString();
}

// Start of the Orm functions
let orm = {

  // ORM method that selects all from the table 
  selectAll: function (table, cb) {
    let queryString = "SELECT * FROM burgers"
    connection.query(queryString, function (err, res) {
      if (err) throw err;

      cb(res);
    })

  },

  // ORM method that inserts a new row into the table
  insertOne: function(table, cols, vals, cb) {
    let queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

  // ORM method that updates the Boolean devoured in the table
  updateOne: function (table, colVal, condition, cb) {
    let queryString = "UPDATE " + table + " SET " + "devoured = 1" + " WHERE " + "ID = " + condition + ";"
    connection.query(queryString, function (err, response) {
      console.log(queryString);
      if (err) throw err;

      cb(response);
    })
  },
  deleteOne: function(table, condition, cb){
    const queryString = "DELETE FROM " + table + " WHERE " + condition;
    connection.query(queryString, function (err, response) {
      console.log(queryString);
      if (err) throw err;

      cb(response);
    })
  }
}

// Export the orm object for the model (burger.js).
module.exports = orm;