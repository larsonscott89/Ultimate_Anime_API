const Genre = require('../models/genre')
const AnimeName = require('../models/animeName')
const CharacterInfo = require('../models/characterInfo')

// const getCharactersInfo = async (req, res) => {
//   try {
//     const { name } = req.params;

//     const character = await CharacterInfo.findOne({ name });

//     if (!character) {
//       return res.status(404).json({ message: 'Anime not found' });
//     }

//     const characters = await CharacterInfo.find({ animeName_id: anime._id });
//     res.json(characters);
//   } catch (error) {
//     console.error('Error fetching characters by anime:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// }

const getCharacterInfo = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Received character ID:', id);

    const character = await CharacterInfo.findOne({ _id: id });

    if (!character) {
      return res.status(404).json({ error: 'Character not found', receivedId: id });
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

const deleteCharacter = async (req, res) => {
  try {
      const { id } = req.params;
      const deleted = await CharacterInfo.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Ingredient deleted");
      }
      throw new Error("Character not found");
  } catch (error) {
      return res.status(500).send(error.message);
  }
}

module.exports = {
  getCharacterInfo,
  getCharacter,
  // getCharactersInfo,
  // createCharacter,
  // updateCharacter,
  deleteCharacter
}