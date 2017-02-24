/**
 * To verify that MySQL is installed and is working.
 * The program creates an connection to the database and executes
 * a serie of queries to try out the MySQL module.
 */
"use strict";

var mysql      = require("mysql");
var connection = mysql.createConnection({
    host     : "localhost",
    user     : "user",
    password : "pass",
    database : "nodedb"
});
var sql;

connection.connect();


connection.query("DROP TABLE IF EXISTS Moped;", (err) => {
    if (err) {
        throw err;
    }
    console.log("Dropped table.");
});



sql = `
CREATE TABLE Moped (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(40)
);`;
connection.query(sql, (err/*, res, fields*/) => {
    if (err) {
        throw err;
    }
    console.log("Created a table for mopeds.");
});



sql = `
INSERT INTO Moped (text)
VALUES
    ("Apollo"), ("Husqvarna"), ("Puch"), ("Zündapp")
;`;
connection.query(sql, (err/*, res, fields*/) => {
    if (err) {
        throw err;
    }
    console.log("Inserted values into table Moped.");
});



sql = `
SELECT * FROM Moped
ORDER BY id DESC
;`;
connection.query(sql, (err, res/*, fields*/) => {
    if (err) {
        throw err;
    }
    console.log(res);

    res.forEach((row, count) => {
        console.log(`${count}: ${row.id} - ${row.text}`);
    });
});



sql = `
SELECT * FROM Moped
WHERE
    TEXT IN (?, ?)
ORDER BY id DESC
;`;
connection.query(sql, ["Husqvarna", "Puch"], (err, res/*, fields*/) => {
    if (err) {
        throw err;
    }
    console.log(res);

    res.forEach((row, count) => {
        console.log(`${count}: ${row.id} - ${row.text}`);
    });
});



connection.end();
