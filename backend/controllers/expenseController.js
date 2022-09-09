const Expense = require('../model/expenses');

let index = (req, res) => {
  Expense.find({}, (err, expense) => {
    if (err) {
      res.status(400).json(err);
      return;
    }
    res.json(expense);
  });
};

let detail = (req, res) => {
  Expense.findById(req.params.id, (err, expense) => {
    if(err){
      res.status(400).json(err)
      return
    }
    res.json(expense);
  });
};

let deleteOne = (req, res) => {
  Expense.findByIdAndDelete(req.params.id, (err, deletedExpense) => {
    if(err){
      res.status(400).json(err)
      return
    }
    res.json(deletedExpense)
  });
};

let addOne = (req, res) => {
Expense.create(req.body, (err, newExpense) => {
  if(err){
    res.status(400).json(err)
    return
  }
  newExpense = req.body;
  res.json(newExpense)
}
)}

let updateOne = (req, res) => {
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