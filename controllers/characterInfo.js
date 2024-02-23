const Genre = require('../models/genre')
const AnimeName = require('../models/animeName')
const CharacterInfo = require('../models/characterInfo')

const createCharacter = async (req, res) => {
  try {
    const character = await new CharacterInfo(req.body)
    await character.save()
    return res.status(201).json({
        character
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
  }

const getCharacterInfo = async (req, res) => {
  try {
    const { id } = req.params
    console.log('Received character ID:', id)

    const character = await CharacterInfo.findOne({ _id: id })

    if (!character) {
      return res.status(404).json({ error: 'Character not found', receivedId: id })
    }

    res.json(character)
  } catch (error) {
    console.error('Error fetching character info:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
}

const getCharacter = async (req, res) => {
  try {
    const character = await CharacterInfo.find()
    res.json(character)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateCharacter = async (req, res) => {
  try {
    let { id } = req.params
    let character = await CharacterInfo.findByIdAndUpdate(id, req.body, { new: true})
    if (character) {
      return res.status(200).json(character)
    }
  } catch (e) {
    return res.status(500).json({ error: error.message})
  }
}

const deleteCharacter = async (req, res) => {
  try {
      const { id } = req.params
      const deleted = await CharacterInfo.findByIdAndDelete(id)
      if (deleted) {
          return res.status(200).send("Ingredient deleted")
      }
      throw new Error("Character not found")
  } catch (error) {
      return res.status(500).send(error.message)
  }
}

module.exports = {
  getCharacterInfo,
  getCharacter,
  createCharacter,
  updateCharacter,
  deleteCharacter
}