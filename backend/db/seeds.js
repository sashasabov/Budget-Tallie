require('./connection')
const Expense = require('../model/expenses')
const User = require('../model/user')
const bcrypt = require('bcrypt')

const  expenses = [
    {
        title: "Food",
        cost: [],
        image: "https://cdn-icons-png.flaticon.com/512/5141/5141534.png",
        note: ""
    },
    {
        title: "Gas",
        cost: [],
        image: "https://www.freeiconspng.com/thumbs/gas-icon/gas-station-icon--0.png",
        note: ""
    },
    {
        title: "Electric Bill",
        cost: [],
        image: "https://static.thenounproject.com/png/884081-200.png",
        note: ""
    },
    {
        title: "Clothes",
        cost: [],
        image: "https://static.thenounproject.com/png/524455-200.png",
        note: ""
    },
    {
        title: "Phone Bill",
        cost: [],
        image: "https://www.shareicon.net/data/512x512/2016/04/16/750811_chat_512x512.png",
        note: ""
    },
    {
        title: "Gift",
        cost: [],
        image: "https://cdn-icons-png.flaticon.com/512/5717/5717488.png",
        note: ""
    }
]


bcrypt.hash('ABC123',2,(err,hash) => {
    User.deleteMany({})
    .then(() =>{
        User.create({ name: "Sasha", isAdmin: true, password: hash})
    })
    .then(() =>{
        Expense.deleteMany({})
        .then(() => {
            return Expense.insertMany(expenses)
        })
        .then((insertedItems) =>{
            console.log(insertedItems)
        })
        .catch(err => console.error(err))
        .finally(() =>{
            process.exit()
        })
    })
    })


