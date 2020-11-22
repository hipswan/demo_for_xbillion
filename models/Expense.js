var pgp = require("pg-promise")(/* options */);
var db = pgp(
  "postgres://mlyllqsbannsmo:242faf070b44b39ad59398e86eaf77ef181ad311286f3ae3cc1c39526ddaba48@ec2-54-163-47-62.compute-1.amazonaws.com:5432/d59bbr1se23804"
);

var mongoose = require("mongoose");
db.one("SELECT $1 AS value", 123)
  .then(function (data) {
    console.log("DATA:", data.value);
  })
  .catch(function (error) {
    console.log("ERROR:", error);
  });
mongoose.connect(
  "mongodb+srv://admin-atul:ps7QWtTA7FZJBAy3@cluster0-i63yk.mongodb.net/bugdb?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("we're connected!");
});
var Schema = mongoose.Schema;
var expenseSchema = new Schema({
  description: String,
  amount: Number,
  month: String,
  year: Number,
});
// const Expense = mongoose.model("Expense", expenseSchema);
// new Expense({
//   description: "dsdsd",
//   amount: 1213,
// }).save();

module.exports = mongoose.model("Expense", expenseSchema);
