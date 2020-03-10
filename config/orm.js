// Import MySQL connection
const connection = require("../config/connection.js");

//Helper function for printing question mark placeholders in my query
function printQuestionMarks(num) {
  let arr = [];
  for (let i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
};
//Orm functions
let orm = {
  //Selects all data from table 
  selectAll: function (table, cb) {
    let queryString = "SELECT * FROM burgers"
    connection.query(queryString, function (err, res) {
      if (err) throw err;
      cb(res);
    });
  },
  //Inserts new row into the table
  insert: function (table, cols, vals, cb) {
    let queryString = "INSERT INTO " + table;
    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";
    // console.log(queryString);
    connection.query(queryString, vals, (err, result) => {
      if (err) {
        throw err;
      };
      cb(result);
    });
  },
  //Updates the boolean 'devoured' in the table
  update: function (table, colVal, condition, cb) {
    let queryString = "UPDATE " + table + " SET " + "devoured = 1" + " WHERE " + "ID = " + condition + ";"
    connection.query(queryString, function (err, response) {
      console.log(queryString);
      if (err) throw err;
      cb(response);
    });
  },
  //Deletes data from the table where the ID matches
  delete: function (table, condition, cb) {
    const queryString = "DELETE FROM " + table + " WHERE " + condition;
    connection.query(queryString, function (err, response) {
      console.log(queryString);
      if (err) throw err;
      cb(response);
    });
  }
};
// Export the orm object for the model (burger.js)
module.exports = orm;