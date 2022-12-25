// const { json } = require('express');
const Expense = require('../model/expenses');
const User = require('../model/user');


const index = (req, res) => {
//   User.findById(req.params.userId, (err, user) => {
//     if(err) return res.status(400).json(err) 
//     console.log("Current user: ", user)
//     // user.expenses.map( e => e)
// console.log(user.expenses)
  Expense.find({}, (err, expense) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
  res.json(expense);
});
};


const detail = (req, res) => {
  Expense.findById(req.params.id, (err, expense) => {
    if(err){
      res.status(400).json(err)
      return
    }
    res.json(expense);
  });
};

const deleteOne = (req, res) => {
  // User.findById(req.params.userId, (err, user) => {
  // if(err) return res.status(400).json(err)
  // console.log(user)
  // })
  Expense.findByIdAndDelete(req.params.id, (err, deletedExpense) => {
    if(err){
      res.status(400).json(err)
      return
    }
    res.json(deletedExpense)
  });
};


const addOne = async (req, res) => {
  let newExpense = await Expense.create(req.body)
  // User.findById(req.params.id).populate(newExpense).exec((err) => console.log(err))
  User.findOne({id: req.params.id}, (err, user) => {
  if(err){
  res.status(400).json(err)
return}
user.expenses.push(newExpense)
  })
  res.json(newExpense)
  }
  

const updateOne = (req, res) => {
Expense.findByIdAndUpdate(req.params.id, req.body, (err, expenses) =>{
if(err){
  res.status(400).json(err)
    return
}
Expense.find({}, (err, expenses) => {
  res.json(expenses)
})
})
}


module.exports = {
    index,
    detail,
    deleteOne,
    addOne,
    updateOne
}