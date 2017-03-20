#!/usr/bin/env node
"use strict";

const path = require("path");

// Create the app objekt
const express = require("express");
const app = express();

// Use app as template engine
app.set('view engine', 'pug');

// Add a route
app.get("/", (req, res) => {
    res.send("Hello World");
});


// Serve static files
var staticFiles = path.join(__dirname, "public");
app.use(express.static(staticFiles));


// Testing routes with method
app.get("/user", (req, res) => {
    res.send("Got a GET request at " + req.originalUrl);
});

app.post("/user", (req, res) => {
    res.send("Got a POST request at " + req.originalUrl);
});

app.put("/user", (req, res) => {
    res.send("Got a PUT request at " + req.originalUrl);
});

app.delete("/user", (req, res) => {
    res.send("Got a DELETE request at " + req.originalUrl);
});

app.get("/test/page", (req, res) => {
    res.render("page", {
        title: "Hey",
        message: "Hello there!"
    });
});

app.get("/test/:title/:message", (req, res) => {
    console.log(req.path);
    console.log(req.params);
    res.render("page", {
        title: req.params.title,
        message: req.params.message
    });
});

app.get("/test/home/:title/:message", (req, res) => {
    res.render("home", {
        title: req.params.title,
        message: req.params.message
    });
});

// Add routes for 404 and error handling
// Catch 404 and forward to error handler
app.use((req, res, next) => {
    var err = new Error("Not Found");
    err.status = 404;
    next(err);
});

// error handler
function errorHandler (err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.render("error", {
        error: err
    });
}
app.use(errorHandler);

/*
app.use((err, req, res/*, next* /) => {
    console.log("MOPED");
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};
    console.log("Env:" + req.app.get("env"));

    // render the error page
    res.status(err.status || 500);
    res.render("error");
});
*/

// Start up server
console.log("Express is ready.");
app.listen(1337);
