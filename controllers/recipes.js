const Recipe = require('../models/recipe');
const User = require('../models/user');

module.exports = {
    index,
    new: newRecipe,
    create,
    show,
    delete: deleteRecipe,
    edit,
    update,
}

function index (req, res) {

    Recipe.find({}).sort({updatedAt: "desc"}).exec(function(err, recipes){
        res.render('recipes/index', {
            recipes,
            user: req.user
        })
    });
}

function newRecipe (req, res) {
    Recipe.findById(req.params.user).exec(function(err, user){
        res.render('recipes/new', {user: req.user});
    })
}

function create(req, res) {
    console.log(req.params.userId, "is our params2", req.body, "this is req.body");
    const data = {
        title: req.body.title,
        difficulty: req.body.difficulty,
        cookTime: req.body.cookTime,
        description: req.body.description,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        user: req.params.userId
    }
    Recipe.create(data, function(err, recipe){
        if (err) {
            console.log(err);
            return res.redirect('/recipes/new');
        }
        
        res.redirect('/recipes');

    })
}

function show(req, res){
    Recipe.findById(req.params.id).exec(function(err, recipe){
        res.render('recipes/show', {recipe, user: req.user});
    })
}

function deleteRecipe(req, res) {
    Recipe.findByIdAndRemove(req.params.id).exec(function(err, recipe){
        res.redirect('/recipes');
    })
}

function edit(req, res) {
    Recipe.findById(req.params.id).exec(function(err, recipe){
        res.render('recipes/edit', {recipe, user: req.user})
    })
}

function update(req, res) {
    Recipe.findByIdAndUpdate(req.params.id, req.body, function(err, recipe){
            res.redirect(`/recipes/${req.params.id}`);

    })
    
}