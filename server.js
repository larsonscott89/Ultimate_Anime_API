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

app.get('/api/genre', genreController.getGenre);

app.get('/api/genre/:name', genreController.getGenreDetails);

app.get('/api/anime', animeNameController.getAnime);

app.get('/api/characters/:id', characterInfoController.getCharacterInfo)

app.get('/api/characters', characterInfoController.getCharacter)

app.get('/api/anime/:name/characters', animeNameController.getCharactersByAnime)

app.get('/api/search/:query', animeNameController.searchAnime)

app.get('/api/genre/:name', genreController.getAnimeByGenre)

app.delete('/api/genre/:id', genreController.deleteGenre)

app.delete('/api/characters/:id', characterInfoController.deleteCharacter)

app.get('/characters/:id', characterInfoController.getCharacterInfo)

app.delete('/anime/:id', animeNameController.deleteAnime)
