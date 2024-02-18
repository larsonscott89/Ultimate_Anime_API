const Genre = require('../models/genre')
const AnimeName = require('../models/animeName')
const CharacterInfo = require('../models/characterInfo')

const getCharacter = async (req, res) => {
  try {
    const character = await CharacterInfo.find();
    res.json(character)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getCharacter,
  // createCharacter,
  // updateCharacter,
  // deleteCharacter
}