const mongoose = require('mongoose')
// const Expense = require('./expenses')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    expenses: {type: mongoose.Schema.Types.ObjectId, 
        ref: 'Expense'}
})

const User = mongoose.model('User', userSchema)

module.exports = User;
