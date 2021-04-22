const Ingredient = require('../models/ingredient')

module.exports = {
    create,
}

function create(req, res) {
    Ingredient.create(req.body, function(err, ingredient) {
        if (err) return res.redirect('/recipes/new');
        res.redirect('/recipes/new');
    })
}