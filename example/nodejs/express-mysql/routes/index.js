/**
 * General routes
 */
"use strict";

const express = require("express");
const router = express.Router();

/* The default route, home page. */
router.get("/", function(req, res) {
    res.render("index", {
        title: "Index route | Express",
        message: "This is the index route"
    });
});

module.exports = router;
