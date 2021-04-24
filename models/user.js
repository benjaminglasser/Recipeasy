const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatarURL: String,
    googleId: String,
    recipes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Recipe'}]
  }, {
    timestamps: true
  });


  module.exports = mongoose.model('User', userSchema);