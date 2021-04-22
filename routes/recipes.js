const express = require('express');
const router = express.Router();
const recipeCtrl = require('../controllers/recipes');

router.get('/', recipeCtrl.index);
router.get('/new', recipeCtrl.new);
router.get('/:id', recipeCtrl.show);
// router.get('/:id/edit', recipeCtrl.edit);
router.post('/', recipeCtrl.create);
router.delete('/:id', recipeCtrl.delete);
router.put('/:id', recipeCtrl.update);


module.exports = router;