//server/routes/routes.js
var express = require("express");
var router = express.Router();
var pgp = require("pg-promise")(/* options */);
var db = pgp(
  "postgres://mlyllqsbannsmo:242faf070b44b39ad59398e86eaf77ef181ad311286f3ae3cc1c39526ddaba48@ec2-54-163-47-62.compute-1.amazonaws.com:5432/d59bbr1se23804"
);
router.get("/id/:id", function (req, res) {
  const where = pgp.as.format("WHERE id = $1", [req.params.id]);
  db.any('SELECT * FROM fullstack."video" $1:raw', where)
    .then((data) => {
      res.send(data);
    })
    .catch(function (error) {
      console.log("ERROR:", error);
    });
});
router.get("*", function (req, res) {
  response.writeHead(404, { "Content-Type": "text/plain" });
  response.write("404 Not found");
  response.end();
});
module.exports = router;
