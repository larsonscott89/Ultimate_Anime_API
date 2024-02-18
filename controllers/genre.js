const Genre = require('../models/genre')
const AnimeName = require('../models/animeName')
const CharacterInfo = require('../models/characterInfo')

const getGenre = async (req, res) => {
  try {
    const genre = await Genre.find();
    res.json(genre)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getGenreDetails = async (req, res) => {
  try {
    const {name} = req.params
    const regex = new RegExp(name, 'i') // flags for case-insensitive
    const genre = await Genre.findOne({ type: {$regex: regex} })

    if (!genre) {
      return res.status(404).json({ message: 'Genre not found' })
    }
 
    const anime = await AnimeName.find({ genre_id: genre._id })
    const character = await CharacterInfo.find({ 'animeName_id': { $in: anime.map(a => a._id) } })

    const genreDetails = {
      genre,
      anime,
      character,
    }

    res.json(genreDetails)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  getGenre,
  getGenreDetails,
  // createGenre,
  // updateGenre,
  // deleteGenre
}