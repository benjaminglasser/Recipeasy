const express = require('express');
const router = express.Router();
const recipeCtrl = require('../controllers/recipes');


router.get('/', recipeCtrl.index);
router.get('/new/:userId', recipeCtrl.new);
router.get('/search', recipeCtrl.search);
router.get('/:id', recipeCtrl.show);
router.get('/:id/edit', recipeCtrl.edit);
router.post('/:userId', recipeCtrl.create);
router.delete('/:id', recipeCtrl.delete);
router.put('/:id', recipeCtrl.update);

module.exports = router;