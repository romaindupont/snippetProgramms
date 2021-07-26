const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category');

router.get('/category', categoryController.findAll);
/* router.post('/add', articlesController.add);
router.get('/articles', articlesController.findAll);
router.delete('/delete/:id', articlesController.delete);
router.put('/articles/update/:id', articlesController.update); */

module.exports = router;