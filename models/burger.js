var orm = require("../config/orm");
var burger = {

    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    insert: function(col1, col2, cb) {
        orm.insertOne(col1, col2, function(res) {
            cb(res);
        });
    },

    update: function(col1, cb) {
        orm.updateOne(col1, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;