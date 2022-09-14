const mongoose = require('mongoose')
require('dotenv').config();

const mongoURI = 'mongodb://localhost:27017/budget-tallie'

// const db = mongoose.connection
// process.env.DATABASE_URL


mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: true

})
.then(instance => {
console.log(`connected on ${instance.connections[0].name}`)
})
.catch(err => console.log("Got error see details", err))

// db.copyDatabase("test","budget-tallie",process.env.DATABASE_URL)
// use db_to_rename
// db.dropDatabase();