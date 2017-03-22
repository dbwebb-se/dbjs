#!/usr/bin/env node
"use strict";

// Get the app
const app = require("./app");

// Start up server
console.log("Express is ready.");
app.listen(1337);
