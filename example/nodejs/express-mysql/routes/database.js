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
router.get("/test1", (req, res) => {
    var data = {};

    data.title = "2 + 2 | Express";
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
router.get("/test2", (req, res) => {
    var data = {};

    data.title = "Selecting | Express";
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
router.get("/search/:searchstr", (req, res) => {
    var data = {};

    data.title = "Search database | Express";
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
router.get("/search", (req, res) => {
    var data = {};

    data.title = "Search | Express";
    data.search = req.query.search;

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



/**
 * View all mopeds.
 */
router.get("/view", (req, res) => {
    var data = {};

    data.title = "View all | Express";

    data.sql = `
SELECT * FROM Moped
ORDER BY id DESC
;`;

    database.queryPromise(data.sql)
    .then((result) => {
        data.resultset = result;
        res.render("view-all", data);
    })
    .catch((err) => {
        throw err;
    });
});



/**
 * View a specific moped.
 */
router.get("/view/:id", (req, res) => {
    var data = {};

    data.title = "View | Express";

    data.sql = `
SELECT * FROM Moped
WHERE
    id = ?
;`;
    data.param = [req.params.id];

    database.queryPromise(data.sql, data.param)
    .then((result) => {
        if (result.length) {
            data.object = {
                id:     result[0].id,
                text:   result[0].text,
            };
        }
        res.render("view", data);
    })
    .catch((err) => {
        throw err;
    });
});



/**
 * Edit a specific moped.
 */
router.get("/edit/:id", (req, res) => {
    var data = {};

    data.title = "Edit | Express";

    data.sql = `
SELECT * FROM Moped
WHERE
    id = ?
;`;
    data.param = [req.params.id];

    database.queryPromise(data.sql, data.param)
    .then((result) => {
        if (result.length) {
            data.object = {
                id:     result[0].id,
                text:   result[0].text,
            };
        }
        res.render("edit", data);
    })
    .catch((err) => {
        throw err;
    });
});



/**
 * Edit a specific moped, from submitted form.
 */
router.post("/edit", (req, res) => {
    var data = {};

    data.sql = `
UPDATE Moped
SET
    text = ?
WHERE
    id = ?
;`;
    console.log(req.body);
    data.param = [req.body.text, req.body.id];

    database.queryPromise(data.sql, data.param)
    .then(() => {
        res.redirect(`/db/edit/${req.body.id}`);
    })
    .catch((err) => {
        throw err;
    });
});



module.exports = router;
