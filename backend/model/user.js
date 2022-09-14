const mongoose = require("mongoose");
const bcrypt = require('bcrypt');


const SALT_ROUNDS = 6

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  expenses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Expense" }],
});

userSchema.pre('save', function(next) {
  const user = this;
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  })
});

const User = mongoose.model("User", userSchema);

module.exports = User;
