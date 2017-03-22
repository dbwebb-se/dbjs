/**
 * App for trying out database access from MySQL
 */
"use strict";

// Essentials
const express = require("express");
const path = require("path");

// Load the routes
const index = require("./routes/index");
const database = require("./routes/database");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Mount static resources
app.use(express.static(path.join(__dirname, "public")));

// Load all routes on their mountpoint
app.use("/", index);
app.use("/db", database);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// Export the app object for anyone wanting to use it
module.exports = app;
