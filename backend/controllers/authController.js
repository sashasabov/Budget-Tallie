const User = require('../model/user')
const bcrypt = require('bcrypt')
const {createToken} = require('../utils/tokenService')
const {payloadFromUser} = require('../utils/utilities')
const Expense = require('../model/expenses')

const login = (req, res) => {
    const email = req.body.email
    const password = req.body.password
  

    User.findOne({email: new RegExp(email, 'i')}, (err, user) => {
        if(err){
            res.status(400).json(err)
            return
        }
        if(!user){
            res.status(400).json({email: "User not found!"})
            return
        }
        if(bcrypt.compareSync(password, user.password)){
            res.json({'access': createToken(payloadFromUser(user))})
        } else {
            res.status(400).json({password: "Incorrect password"})
        }
})
}


function signup(req, res) {
    const email = req.body.email
    const pass1 = req.body.pass1
    const pass2 = req.body.pass2
    const name = req.body.name

    if(pass1 !== pass2) {
        res.status(400).json({password: "Password doesn't match!"})
        return
    }

    User.findOne({email: new RegExp(email, 'i')}, (err, user) => {
        if(err){
            res.status(400).json(err)
            return
        }
        if (user) {
            res.status(400).json({email: 'User already exists'})
            return
        }
        User.create({email: email, password:pass1, name:name}, (err, newUser) => {            
            Expense.find({}, (err, expenses) =>{
            if(err) return res.status(400).json(err)
                // console.log(expenses)
                 for(let i=0; i < expenses.length-1; i++){
                newUser.expenses.push(expenses[i]._id)           
            }
            newUser.save()
            // console.log(newUser.expenses)
        })
            res.json({access: createToken(payloadFromUser(newUser))})
        })
    })
}

function getExpenses(req, res){
    User.findById(req.params.id, (err, user)=>{
    if(err) return res.status(400).json(err)
    console.log("User Expenses", user.expenses)
    res.json(user.expenses)
}).clone()
}


module.exports = {
    login,
    signup,
    getExpenses
}