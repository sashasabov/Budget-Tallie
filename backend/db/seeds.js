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
    },
    {
        title: "Ice Cream",
        cost: [],
        image: "https://cdn.iconscout.com/icon/free/png-256/ice-cream-1769297-1505070.png",
        note: ""
    },
    {
        title: "Buzzie-Woozie",
        cost: [],
        image: "https://us.123rf.com/450wm/ongkachakon/ongkachakon2011/ongkachakon201100028/158832421-no-alcohol-icon-sign-with-wine-glass-liquor-bottle-and-beer-glass-in-red-circle-stop-sign-vector-des.jpg?ver=6",
        note: ""
    }
]


// bcrypt.hash('123',2,(err,hash) => {
    User.deleteMany({})   
    .then((user) => {
        Expense.deleteMany({})        
        .then(() => {
           return Expense.insertMany(expenses)
        })
        .then((expenses) =>{            
            return User.create({name: "Sasha", email:"sasha@email.com", password: "123", expenses })   
            //hash        
        })        
        .then((insertedItems) =>{
            console.log(insertedItems)
        })
        .catch(err => console.error(err))
        .finally(() =>{
            process.exit()
        })
    })
    // })

  


