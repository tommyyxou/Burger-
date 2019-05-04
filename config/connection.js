
// Dependencies
let mysql = require("mysql");
require('dotenv').config()

// Set the port of our application

// MySQL DB Connection Information (remember to change this with our specific credentials)
if (process.env.CLEARDB_DATABASE_URL) {
    console.log ("------")
    console.log (process.env)
    connection = mysql.createConnection({
        host: process.env.host,
        port: 3306,
        user: "b2c8985c6e27a5",
        password: process.env.password,
        database: "heroku_d807133fc14176e"
        });
   // mysql://b2c8985c6e27a5:ec1799e7@us-cdbr-iron-east-02.cleardb.net/heroku_d807133fc14176e?reconnect=true
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: "webuser",
        password: "secretPassword",
        database: "burgers_db"
        });
}


// Initiate MySQL Connection.
connection.connect(function(err) {
if (err) {
    console.error("error connecting: " + err.stack);
    return;
}
console.log("connected as id " + connection.threadId);
});

module.exports = connection;