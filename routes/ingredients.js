const express = require('express');
const router = express.Router();
const ingredientsCtrl = require('../controllers/ingredients');

router.post('/recipes/new', ingredientsCtrl.create);

module.exports = router;