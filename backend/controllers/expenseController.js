const Expense = require('../model/expenses');

const index = (req, res) => {
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