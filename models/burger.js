var orm = require("../config/orm")


var burger = {
    selectAll:function(cbController){
        orm.selectAll( "burgers", function(burgerDb){
            cbController(burgerDb)
        });
    }
}

module.exports = burger