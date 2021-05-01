const express = require('express');
const router = express.Router();
const recipesApiCtrl = require('../../controllers/api/recipes');

router.get('/', recipesApiCtrl.index);
router.get('/:id', recipesApiCtrl.show);

module.exports = router;