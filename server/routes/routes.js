//server/routes/routes.js
var express = require("express");
var router = express.Router();
var pgp = require("pg-promise")(/* options */);
var db = pgp(
  "postgres://mlyllqsbannsmo:242faf070b44b39ad59398e86eaf77ef181ad311286f3ae3cc1c39526ddaba48@ec2-54-163-47-62.compute-1.amazonaws.com:5432/d59bbr1se23804"
);
router.get("/:id", function (req, res) {
  const where = pgp.as.format("WHERE id = $1", [req.params.id]);
  db.any('SELECT * FROM fullstack."video" $1:raw', where)
    .then((data) => {
      // data.map((row, index, data) => {
      //   console.log(row);
      //   console.log(index);
      //   console.log(data);
      //   console.log(data.value);
      // });
      // console.log("DATA:", data.value);

      res.send(data);
    })
    .catch(function (error) {
      console.log("ERROR:", error);
    });
});

// router.get("/", function (req, res) {
//   res.render("index");
// });
// router.route("/insert").post(function (req, res) {
//   var expense = new Expense();
//   expense.description = req.body.desc;
//   expense.amount = req.body.amount;
//   expense.month = req.body.month;
//   expense.year = req.body.year;
//   expense.save(function (err) {
//     if (err) res.send(err);
//     res.send("Expense successfully added!");
//   });
// });
// router.route("/update").post(function (req, res) {
//   console.log(req.body._id);
//   const doc = {
//     description: req.body.description,
//     amount: req.body.amount,
//     month: req.body.month,
//     year: req.body.year,
//   };
//   Expense.update({ _id: req.body._id }, { $set: doc }, function (err, result) {
//     if (err) res.send(err);
//     res.send("Expense successfully updated!");
//   });
// });

// router.get("/delete", function (req, res) {
//   var id = req.query.id;
//   Expense.find({ _id: id })
//     .remove()
//     .exec(function (err, expense) {
//       if (err) res.send(err);
//       res.send("Expense successfully deleted!");
//     });
// });
// router.get("/getAll", function (req, res) {
//   var monthRec = req.query.month;
//   var yearRec = req.query.year;
//   if (monthRec && monthRec !== "All") {
//     Expense.find(
//       { $and: [{ month: monthRec }, { year: yearRec }] },
//       function (err, expenses) {
//         if (err) res.send(err);
//         res.json(expenses);
//       }
//     );
//   } else {
//     Expense.find({ year: yearRec }, function (err, expenses) {
//       if (err) res.send(err);
//       res.json(expenses);
//     });
//   }
// });
module.exports = router;
