const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    create,
}

function index (req, res) {
    res.render('recipes/index')
}

function newRecipe (req, res) {
    res.render('recipes/new');
}

function create(req, res) {
    Recipe.create(req.body, function(err, recipe){
        if (err) return res.redirect('/recipes/new');
        res.redirect('/recipes');
    })
}