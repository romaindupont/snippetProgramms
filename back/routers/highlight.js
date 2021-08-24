const express = require('express');
const router = express.Router();
const highlightController = require('../controllers/highlight');

router.get('/highlight', highlightController.findAll);
router.post('/addHighlight', highlightController.add);
router.delete('/highlight/delete/:id', highlightController.delete);

module.exports = router;