//server/server.js
var express = require("express");
var router = require("./routes/routes.js");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", router);

module.exports = app;
