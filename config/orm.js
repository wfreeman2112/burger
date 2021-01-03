var connection = require("./connection")
var orm = {
    selectAll: function(tableName, cbModel){
        connection.query("select * from ??", tableName, function(err, burgerDb){
            cbModel(burgerDb)
        })
    }
}

module.exports = orm