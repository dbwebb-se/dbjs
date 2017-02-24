/**
 * To verify that MySQL is installed and is working.
 * The program creates an connection to the database and executes
 * a query without actually needing a database.
 */
"use strict";

var mysql      = require("mysql");
var connection = mysql.createConnection({
    host     : "localhost",
    user     : "user",
    password : "pass",
    database : "nodedb"
});

connection.connect();

connection.query("SELECT 1 + 1 AS solution", (err, res/*, fields*/) => {
    if (err) {
        throw err;
    }
    console.log("The solution is: ", res[0].solution);
});

connection.end();
