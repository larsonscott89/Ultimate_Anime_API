const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const logger = require('morgan')
const genreController = require('./controllers/genre')
const animeNameController = require('./controllers/animeName')
const characterInfoController = require('./controllers/characterInfo')

const db = require('./db')

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())
app.use(logger('dev'))


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.get('/genre', genreController.getGenre)
app.get('/character', characterInfoController.getCharacter)
app.get('/anime', animeNameController.getAnime)
app.get('/genre/name/:name', genreController.getGenreDetails)