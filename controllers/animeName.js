const mongoose = require('mongoose');
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

const getCharactersByAnime = async (req, res) => {
  try {
    const { name } = req.params;

    const characters = await CharacterInfo.find({});
    res.json(characters);
  } catch (error) {
    console.error('Error fetching characters by anime:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getAnime,
  getCharactersByAnime,
  // createAnime,
  // updateAnime,
  // deleteAnime
}