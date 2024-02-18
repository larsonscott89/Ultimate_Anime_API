const db = require('../db')
const AnimeName = require('../models/animeName')
const Genre = require('../models/genre')

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
})

const main = async () => {
  const adventure = await Genre.findOne({ type: 'Adventure' })
  const supernatural = await Genre.findOne({ type: 'Supernatural' })
  const action = await Genre.findOne({ type: 'Action' })

  const animeName = [
    {
      name: 'Black Clover',
      characterPhoto: 'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71ie87aqvLL._AC_SY879_.jpg',
      genre_id: adventure._id
    },
    {
      name: 'Jujutsu Kaisen',
      characterPhoto: 'https://p325k7wa.twic.pics/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg?twic=v1/resize=590/step=10/quality=80',
      genre_id: supernatural._id
    },
    {
      name: 'One Piece',
      characterPhoto: 'https://static.wikia.nocookie.net/onepiece/images/6/6b/Slide_1_preview.png/revision/latest/scale-to-width-down/860?cb=20230718045122',
      genre_id: action._id
    }
  ]
  await AnimeName.insertMany(animeName)
  console.log('Created animes')
}

const run = async () => {
  await main()
  db.close()
}

run()