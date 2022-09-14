const Expense = require('../model/expenses');

const create = (req, res) => {     
  Expense.findById(req.params.id, (err, expense) => {
    if (err) {
      res.status(400).json(err);
      return
    }
    expense.cost.push(req.body);    
    expense.save((err) => {if(err){console.log(err)}})
    res.json(expense)
  });
};

const deleteOne = (req, res) => {
    Expense.findById(req.params.id, (err, expense) => {
        if(err){
        res.send(400).json(err) 
    }
    expense.cost.id(req.params.entryId).remove()
    expense.save((err) => {if(err){console.log(err)}})
    res.json(expense)
    })
}

module.exports = {
  create,
  deleteOne
};
