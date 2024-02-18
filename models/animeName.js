const mongoose = require('mongoose')

const animeNameSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    characterPhoto: {type: String, required: true},
    genre_id: {type: mongoose.Schema.Types.ObjectId, ref: 'Genre', required: true}
  },
  {timestamps: true}
)

const AnimeName = mongoose.model('animeName', animeNameSchema)

module.exports = AnimeName