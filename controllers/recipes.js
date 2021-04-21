const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    create,
}

function index (req, res) {
    Recipe.find({}).sort({updatedAt: 1}).exec(function(err, recipes){
        res.render('recipes/index', {recipes})
    });
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