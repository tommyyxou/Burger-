
// Dependencies
let mysql = require("mysql");
require('dotenv').config()

// Set the port of our application

// MySQL DB Connection Information (remember to change this with our specific credentials)
if (process.env.CLEARDB_DATABASE_URL) {
    connection = mysql.createConnection({
        host: process.env.host,
        port: process.env.port,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
        });
   // mysql://b2c8985c6e27a5:ec1799e7@us-cdbr-iron-east-02.cleardb.net/heroku_d807133fc14176e?reconnect=true
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: "",
        password: "",
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