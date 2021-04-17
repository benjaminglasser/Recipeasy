const express = require('express');
const router = express.Router();
const recipeCtrl = require('../controllers/recipes');

router.get('/', recipeCtrl.index);

module.exports = router;