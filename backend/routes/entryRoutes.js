const express = require('express');
const router = express.Router();
const entryController = require('../controllers/entryControllers');

router.post('/expenses/:id/entries', entryController.create)
router.delete('/expenses/:id/entries/:entryId', entryController.deleteOne)

module.exports = router;