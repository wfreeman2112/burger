var orm = require("../config/orm");

var burger = {
  selectAll: function (cbController) {
    orm.selectAll("burgers", function (burgerDb) {
      cbController(burgerDb);
    });
  },
  insertOne: function (columnNames, values, cbController) {
    orm.insertOne("burgers", columnNames, values, function (burgerDb) {
      cbController(burgerDb);
    });
  },
  updateOne: function (columnNames, values, cbController) {
    orm.updateOne("burgers", columnNames, values, function(burgerDb){
      cbController(burgerDb)
    })
  }
};

module.exports = burger;
