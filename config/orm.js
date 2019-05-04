let connection = require("./connection")

let orm = {

    //selectAll()
    selectAll: function (db, callback) {
        connection.query('SELECT * FROM ' + db + ";", function (err, result) 
        {
            if (err) throw err;
            //console.log("orm", result)
            callback (result);
        });
    },
    //insertOne()
    insertOne: function (db, burger_name, callback) {
        connection.query('INSERT INTO ' + db + ' SET ?;', 
        {
            burger_name: burger_name,
            devoured: false
        },function (err, result) 
        {
            if (err) throw err;
            callback(result);
        });
    },
    //updateOne()
    updateOne: function (db, id, callback) {
        connection.query('UPDATE ' + db + ' SET ? WHERE ?;',
            [{
                devoured: true
            },{
                id: id
            }],
        function (err, result) 
        {
            if (err) throw err;
            callback(result);
        });
    }
};

module.exports = orm;