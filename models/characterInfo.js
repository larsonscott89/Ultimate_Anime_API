const mongoose = require('mongoose')

const characterInfoSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    engVoiceActor: {type: String, required: false},
    japVoiceActor: {type: String, required: false},
    summary: {type: String, required: true},
    photo: {type: String, required: true},
    characterGif: {type: String, required: true},
    animeName_id: { type: mongoose.Schema.Types. ObjectId, ref: 'AnimeName', required: true }
  },
  {timestamps: true}
)

const CharacterInfo = mongoose.model('characterInfo', characterInfoSchema)

module.exports = CharacterInfo