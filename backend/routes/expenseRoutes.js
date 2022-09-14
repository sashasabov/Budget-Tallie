const express = require('express')
const router = express.Router()
const expenseController = require('../controllers/expenseController')

router.get('/', expenseController.index)
router.get('/:id', expenseController.detail)
router.post('/', expenseController.addOne)
router.put('/:id', expenseController.updateOne)
router.delete('/:id', expenseController.deleteOne)

module.exports = router