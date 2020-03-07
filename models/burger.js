let orm = require("../config/orm.js");

let burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insert: function (val, cb) {
        orm.insert("burgers", "burger_name", val, function (res) {
            cb(res);
        });
    },
    update: function (colVal, condition, cb) {
        orm.update("burgers", colVal, condition, function (res) {
            cb(res);
        });
    },
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function (res) {
            cb(res)
        })
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;