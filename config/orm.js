var connection = require("./connection")

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, results) {
            if (err) throw err;
            cb(results);
        });
    },

    insertOne: function(column1Value, column2Value) {
        var queryString = "insert into burgers(burger_name,devoured) values( ? , ? )";
        connection.query(queryString, [column1Value, column2Value], function(err, results) {
            if (err) throw err;
            return results;
        })
    },

    updateOne: function(columnValue) {
        var queryString = "update burgers set devoured = 1 where burger_name = ?";
        connection.query(queryString, [columnValue], function(err, results) {
            if (err) throw err;
            console.log(results);
            return results;
        })
    }
}

module.exports = orm;