let orm = require("../config/orm")

let burger = {

    selectAll: function (callback) {
        orm.selectAll("burgers",function(res){
            //console.log ('burger.js', res);
            callback(res);
        });
    },
    insertOne: function (burger_name, callback) {
        orm.insertOne("burgers", burger_name, function(res){
            callback(res);
        });
    },
    updateOne: function (id, callback) {
        orm.updateOne("burgers", id, function(res){
            callback(res);
        });
    }
}

module.exports = burger;