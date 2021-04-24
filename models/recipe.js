const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
    title: {
        type: String,
    },
    difficulty: {
        type: Number,
        min: 1,
        max: 10,
    },
    cookTime: {
        type: Number,
    },
    description: {
        type: String,
    },
    instructions: {
        type: [String],
    },
    ingredients: {
        type: [String],
    },
    user: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
},{
    timestamps: true,
});


module.exports = mongoose.model('Recipe', recipeSchema);