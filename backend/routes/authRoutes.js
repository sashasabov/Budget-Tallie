const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

// router.get('/expenses/2022', authController.defaultUser)
// router.get('/expenses/:userId', authController.getExpenses)
router.post('/login', authController.login)
router.post('/signup', authController.signup)



module.exports = router