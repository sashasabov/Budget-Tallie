const mongoose = require('mongoose')
require('dotenv').config();


// const mongoURI = 'mongodb://localhost:27017/budget-tallie'

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(instance => {
console.log(`connected on ${instance.connections[0].name}`)
})
.catch(err => console.log("Got error see details", err))
