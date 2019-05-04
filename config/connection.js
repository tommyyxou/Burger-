
// Dependencies
let mysql = require("mysql");
require('dotenv').config()

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
let PORT = process.env.PORT || 8080;


// MySQL DB Connection Information (remember to change this with our specific credentials)
if (process.env.CLEARDB_DATABASE_URL) {
    connection = mysql.createConnection(process.env.CLEARDB_DATABASE_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: process.env.WEBSITE_USER,
        password: process.env.WEBSITE_PASSWORD,
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