var connection = require("./connection")
var orm = {
    selectAll: function(tableName, cbModel){
        connection.query("select * from ??", tableName, function(err, burgerDb){
            cbModel(burgerDb)
        })
    }
}
//establish insertOne()
var insert = {
    insertOne: function(tableName, cbModel){
    connection.query("insert into  ??", tableName, function(err, burgerDb){
        cbModel(burgerDb)
    });
 },
}


//updateOne()

var update = {
    updateOne: function(tableName, cbModel){
    connection.query("update into  ??", tableName, function(err, burgerDb){
        cbModel(burgerDb)
    });
 },
}

module.exports = orm