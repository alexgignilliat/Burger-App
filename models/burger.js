let orm = require("../config/orm.js");

let burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (val, cb) {
        orm.insertOne("burgers", "burger_name", val, function (res) {
            cb(res);
        });
    },
    updateOne: function (colVal, condition, cb) {
        orm.updateOne("burgers", colVal, condition, function (res) {
            cb(res);
        });
    },
    deleteOne: function (condition, cb) {
        orm.deleteOne("burgers", condition, function (res) {
            cb(res)
        })
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;