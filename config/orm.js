var connection = require("./connection");
var orm = {
  selectAll: function (tableName, cbModel) {
    connection.query("select * from ??", tableName, function (err, burgerDb) {
      cbModel(burgerDb);
    });
  },
  //establish insertOne()
  insertOne: function (tableName, columnNames, values, cbModel) {
    connection.query(
      "insert into  ?? (??, ??) values (?,?) ",
      [tableName, columnNames[0], columnNames[1], values[0], values[1]],
      function (err, burgerDb) {
        cbModel(burgerDb);
      }
    );
  },
  updateOne: function (tableName, columnNames, values, cbModel) {
    connection.query(
      "update ?? set ?? = ? where ?? = ?",
      [tableName, columnNames[0], values[0], columnNames[1], values[1]],
      function (err, burgerDb) {
        cbModel(burgerDb);
      }
    );
  },
};

//updateOne()

// var update = {
//     updateOne: function(tableName, cbModel){
//     connection.query("update into  ??", tableName, function(err, burgerDb){
//         cbModel(burgerDb)
//     });
//  },
// }

module.exports = orm;
