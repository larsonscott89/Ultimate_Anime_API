const db = require('../db')
const Genre = require('../models/genre')

db.on('error', (error) => {
  console.error('MogoDB connection error:', error);
})

const main = async () => {
  const genre = [
    {
      type: 'Comedy'
    },
    {
      type: 'Drama'
    },
    {
      type: 'Fantasy'
    },
    {
      type: 'Sci-Fi'
    },
    {
      type: 'Shonen'
    },
    {
      type: 'Thriller'
    },
    {
      type: 'Shojo'
    },
  ]
  await Genre.insertMany(genre)
  console.log('Created genres')
}

const run = async () => {
  await main()
    db.close()
}

run()