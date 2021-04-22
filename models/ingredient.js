const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ingredientSchema = new Schema({
    ingredient: {
        type: String,
        required: true,
        unique: true,
    },
    amount: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
});

module.exports = mongoose.model('Ingredient', ingredientSchema)