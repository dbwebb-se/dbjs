/**
 * An own module for the database.
 */
"use strict";

const mysql = require("mysql");
const connection = mysql.createConnection({
    host     : "localhost",
    user     : "user",
    password : "pass",
    database : "nodedb"
});

const database = {};

connection.connect();



/**
 * Doing a MySQL query within a Promise.
 *
 * @param  string sql   SQL to be queried.
 * @param  Array  param Parameters to match placeholders
 *
 * @return object with result from query.
 */
database.queryPromise = (sql, param) => {
    return new Promise((resolve, reject) => {
        connection.query(sql, param, (err, res) => {
            if (err) {
                reject(err);
            }
            resolve(res);
        });
    });
};



module.exports = database;
