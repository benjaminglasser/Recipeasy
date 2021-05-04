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
    search,
}

function index(req, res) {
    User.find({}, function (err, users) {
        Recipe.find({}).sort({updatedAt: "desc"}).exec(function (err, recipes) {
            res.render('recipes/index', {
                recipes,
                user: req.user,
                users
            })
        })
    });
}

function newRecipe(req, res) {
    Recipe.findById(req.params.user).exec(function (err, user) {
        res.render('recipes/new', {
            user: req.user
        });
    })
}

function create(req, res) {

    const data = {
        title: req.body.title,
        difficulty: req.body.difficulty,
        cookTime: req.body.cookTime,
        description: req.body.description,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        user: req.params.userId
    }
    Recipe.create(data, function (err, recipe) {
        if (err) {
            console.log(err);
            return res.redirect('/recipes/new');
        } else {
            User.findById(req.params.userId, function (err, user) {
                req.user.recipes.push(recipe._id);
                req.user.save(function (err) {
                    res.redirect('/recipes');
                })
            })
        }


    })

}

function show(req, res) {
    Recipe.findById(req.params.id).exec(function (err, recipe) {
        res.render('recipes/show', {
            recipe,
            user: req.user
        });
    })
}

function deleteRecipe(req, res) {
    Recipe.findByIdAndRemove(req.params.id).exec(function (err, recipe) {
        User.findById(recipe.user[0], function (err, user) {
            let index = user.recipes.indexOf(recipe._id.toString())
            console.log(index, "is index")
            console.log(user.recipes, "user recipes")
            console.log(recipe._id, "recipe ID")
                
            
            req.user.recipes.splice(index, 1);
            console.log("i spliced from " + user.recipes)
            

            let recipeArr = user.recipes;
            console.log(recipeArr);  
            req.user.save(function (err) {
                res.redirect('/recipes');
            })
        })
        
    })

    // delete recipe in user section too
    
    

}

function edit(req, res) {
    Recipe.findById(req.params.id).exec(function (err, recipe) {
        res.render('recipes/edit', {
            recipe,
            user: req.user
        })
    })
}

function update(req, res) {
    Recipe.findByIdAndUpdate(req.params.id, req.body, function (err, recipe) {
        res.redirect(`/recipes/${req.params.id}`);
    })
}

function search(req, res) {
    res.render('recipes/search', {
        user: req.user
    })
}