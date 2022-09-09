const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
    title: String,
    cost: Number,
    image: String,
    note: String
})

const Expense = mongoose.model('Expense', expenseSchema)

module.exports = Expense;

