const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');

router.get('/category', categoryController.findAll);
router.post('/addSkill', categoryController.add);
router.delete('/category/delete/:id', categoryController.delete);
router.put('/category/update/:id', categoryController.update);

module.exports = router;