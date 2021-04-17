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
    dateAdded: {
        type: Date,
    },
    instructions: {
        type: String,
    },
    ingredients: [{type: Schema.Types.ObjectId, ref: 'Ingredient'}],
},{
    timestamps: true,
});

module.exports = mongoose.model('Recipe', recipeSchema);