const Recipe = require('../../models/recipe');

module.exports = {
    index,
    show
}

function index(req, res) {
    const title = req.query.title;
    const query = title ? {title: { $regex: title}} : {};

    Recipe.find(query, function(err, recipes) {
        res.status(200).json(recipes);
    })
}

function show(req, res) {
    Recipe.findById(req.parmas.id, function(err, recipes) {
        res.status(200).json(recipes);
    })
}