/**
 * Database example routes
 */
"use strict";

const express = require("express");
const router = express.Router();

const database = require("../database");



/**
 * Doing a SELECT with 2 + 2-
 */
router.get("/test1", function(req, res) {
    var data = {};

    data.message = "Doing 2 + 2 using SELECT.";
    data.sql = "SELECT 2 + 2 AS solution;";

    database.queryPromise(data.sql)
    .then((result) => {
        data.resultset = result;
        res.render("database", data);
    })
    .catch((err) => {
        throw err;
    });
});



/**
 * Selecting all mopeds.
 */
router.get("/test2", function(req, res) {
    var data = {};

    data.message = "Selecting all mopeds.";
    data.sql = `
SELECT * FROM Moped
ORDER BY id DESC
;`;

    database.queryPromise(data.sql)
    .then((result) => {
        data.resultset = result;
        res.render("database", data);
    })
    .catch((err) => {
        throw err;
    });
});



/**
 * Searching all mopeds.
 */
router.get("/search/:searchstr", function(req, res) {
    var data = {};

    data.message = "Searching throw all mopeds.";
    data.sql = `
SELECT * FROM Moped
WHERE
    text LIKE ?
;`;
    data.param = [req.params.searchstr];

    database.queryPromise(data.sql, data.param)
    .then((result) => {
        data.resultset = result;
        res.render("database", data);
    })
    .catch((err) => {
        throw err;
    });
});



/**
 * Searchform for searching among mopeds.
 */
router.get("/search", function(req, res) {
    var data = {};

    if (req.query.search) {
        data.search = req.query.search;
    }

    if (req.query.doSearch) {
        data.doSearch = true;
        data.sql = `
SELECT * FROM Moped
WHERE
    text LIKE ?
;`;
        data.param = [data.search];

        database.queryPromise(data.sql, data.param)
        .then((result) => {
            data.resultset = result;
            res.render("search", data);
        })
        .catch((err) => {
            throw err;
        });
    } else {
        res.render("search", data);
    }
});



module.exports = router;
