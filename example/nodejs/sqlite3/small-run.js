/**
 * Run a single database query.
 */
"use strict";

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("db.sqlite");

db.serialize(() => {
    db.run("UPDATE lorem SET info='Mumintrollet was here' WHERE rowid = 7;");

    db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
        console.log(row.id + ": " + row.info);
    });
});

db.close();
