const mongoose = require("mongoose");

const entrySchema = new mongoose.Schema(
  {
    amount: Number,

  },
  {
    timestamps: true,
  }
);

const expenseSchema = new mongoose.Schema({
  title: String,
  cost: [entrySchema],
  image: String,
  note: String,
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
