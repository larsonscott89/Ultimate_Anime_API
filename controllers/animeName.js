const mongoose = require('mongoose')
const Genre = require('../models/genre')
const AnimeName = require('../models/animeName')
const CharacterInfo = require('../models/characterInfo')


const createAnime = async (req, res) => {
  try {
    const anime = await new AnimeName(req.body)
    await anime.save()
    return res.status(201).json({
        anime
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
  }

const getAnime = async (req, res) => {
  try {
    const anime = await AnimeName.find()
    res.json(anime)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCharactersByAnime = async (req, res) => {
  try {
    const { name } = req.params

    const anime = await AnimeName.findOne({ name })

    if (!anime) {
      return res.status(404).json({ message: 'Anime not found' })
    }

    const characters = await CharacterInfo.find({ animeName_id: anime._id })
    res.json(characters)
  } catch (error) {
    console.error('Error fetching characters by anime:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const searchAnime = async (req, res) => {
  try {
    const query = req.params.query

    const searchResults = await AnimeName.findOne({ name: { $regex: new RegExp(query, 'i') } })

    res.json({ anime: searchResults })
  } catch (error) {
    console.error('Error searching anime:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const updateAnime = async (req, res) => {
  try {
    let { id } = req.params
    let anime = await AnimeName.findByIdAndUpdate(id, req.body, { new: true})
    if (anime) {
      return res.status(200).json(anime)
    }
  } catch (e) {
    return res.status(500).json({ error: error.message})
  }
}

const deleteAnime = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await AnimeName.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Anime deleted')
    }
    throw new Error('Anime not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createAnime,
  getAnime,
  getCharactersByAnime,
  searchAnime,
  updateAnime,
  deleteAnime
}