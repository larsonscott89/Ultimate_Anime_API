const Genre = require('../models/genre')
const AnimeName = require('../models/animeName')
const CharacterInfo = require('../models/characterInfo')

const getCharacterInfo = async (req, res) => {
  try {
    const { name } = req.params;
    const character = await CharacterInfo.find({})

    if (!character) {
      return res.status(404).json({ message: 'Character not found' });
    }

    res.json(character);
  } catch (error) {
    console.error('Error fetching character info:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getCharacter = async (req, res) => {
  try {
    const character = await CharacterInfo.findOne();
    res.json(character)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getCharacterInfo,
  getCharacter
  // createCharacter,
  // updateCharacter,
  // deleteCharacter
}