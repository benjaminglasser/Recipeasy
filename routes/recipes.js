const express = require('express');
const router = express.Router();
const recipeCtrl = require('../controllers/recipes');

router.get('/', recipeCtrl.index);
router.get('/new', recipeCtrl.new);
router.get('/:id', recipeCtrl.show);
router.post('/', recipeCtrl.create);

module.exports = router;