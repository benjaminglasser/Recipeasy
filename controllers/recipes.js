const Recipe = require('../models/recipe');

module.exports = {
    index,
    new: newRecipe,
    create,
    show,
}

function index (req, res) {
    Recipe.find({}).sort({updatedAt: "desc"}).exec(function(err, recipes){
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

function show(req, res){
    Recipe.findById(req.params.id).exec(function(err, recipe){
        res.render('recipes/show', {recipe});
    })
}