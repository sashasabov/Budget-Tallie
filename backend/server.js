const express = require('express');
const { db } = require('./model/user');
const app = express();
const PORT = 4000;
const morgan = require('morgan');
const expenseRoutes = require('./routes/expenseRoutes');
const cors = require('cors')

require('./db/connection');

app.use(cors())
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/expenses', expenseRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to BudgetTallie!')
});

app.listen(PORT, () => {
    console.log("Listening on port", PORT)
});