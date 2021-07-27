const express = require('express');
const router = express.Router();
const codeController = require('../controllers/codes');

router.get('/codes', codeController.findAll);
router.post('/addCode', codeController.add);
router.delete('/codes/delete/:id', codeController.delete);
router.put('/codes/update/:id', codeController.update);

module.exports = router;