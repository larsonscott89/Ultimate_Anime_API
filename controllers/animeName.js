const Genre = require('../models/genre')
const AnimeName = require('../models/animeName')
const CharacterInfo = require('../models/characterInfo')

const getAnime = async (req, res) => {
  try {
    const anime = await AnimeName.find();
    res.json(anime)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getAnime,
  // createAnime,
  // updateAnime,
  // deleteAnime
}