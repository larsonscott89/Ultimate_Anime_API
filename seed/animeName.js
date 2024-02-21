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
  const comedy = await Genre.findOne({ type: 'Comedy' })
  const drama = await Genre.findOne({ type: 'Drama' })
  const fantasy = await Genre.findOne({ type: 'Fantasy' })
  const scifi = await Genre.findOne({ type: 'Sci-Fi' })
  const shonen = await Genre.findOne({ type: 'Shonen' })
  const thriller = await Genre.findOne({ type: 'Thriller' })
  const shojo = await Genre.findOne({ type: 'Shojo' })

  const animeName = [
    {
      name: 'Solo Leveling',
      characterPhoto: 'http://static.wikia.nocookie.net/solo-leveling/images/b/bf/Solo_Leveling_Returns.png',
      genre_id: action._id
    },
    {
      name: 'Black Clover',
      characterPhoto: 'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71ie87aqvLL._AC_SY879_.jpg',
      genre_id: action._id
    },
    {
      name: 'Jujutsu Kaisen',
      characterPhoto: 'https://p325k7wa.twic.pics/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg',
      genre_id: supernatural._id
    },
    {
      name: 'One Piece',
      characterPhoto: 'https://static.wikia.nocookie.net/onepiece/images/6/6b/Slide_1_preview.png',
      genre_id: adventure._id
    },
    {
      name: 'Shangri-La Frontier',
      characterPhoto: 'http://cdn.kodansha.us/statics/Products/3771_22942605-0ea3-4551-9fd4-ef661c10ae63.jpg',
      genre_id: action._id
    },
    {
      name: 'The Rising of the Shield Hero',
      characterPhoto: 'http://cdn.kobo.com/book-images/6b56546b-befc-4665-a5bd-a313a76449ad/353/569/90/False/the-rising-of-the-shield-hero-volume-20.jpg',
      genre_id: action._id
    },
    {
      name: 'Berserk of Gluttony',
      characterPhoto: 'http://book-pic.webnovel.com/bookcover/19753836505140705?imageMogr2/thumbnail/150&imageId=1617582568560',
      genre_id: action._id
    },
    {
      name: 'Dr. STONE',
      characterPhoto: 'http://static.wikia.nocookie.net/dr-stone/images/3/35/Dr._Stone_Stone_Wars_Key_Visual_4.png',
      genre_id: action._id
    },
    {
      name: 'Goblin Slayer',
      characterPhoto: 'http://images.hive.blog/p/NTy4GV6ooFRmaCXZ8UYgPhoud1kjiNX8QokLEZtbBKLuLWQ9yt7K3o4EsMHxweGuomeofBNSZzEaJqu8tKeujpLTyX4TY56979vzbizZKqCfsMKPDBACtnCZjLeZ1QrmzAdFYDr8qUBKvrjoaZTDgh8LimW5hVzHCpxd7hNv?format=match&mode=fit',
      genre_id: action._id
    },
    {
      name: 'My Hero Academia',
      characterPhoto: 'http://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2018/10/12213851/My-Hero-Academia-1536x864.png',
      genre_id: action._id
    },
    {
      name: 'Attack on Titan',
      characterPhoto: 'http://wallpapers.com/images/high/attack-on-titan-eren-title-vs67k95bhj7b0cmy.webp',
      genre_id: action._id
    },
    {
      name: `Frieren: Beyond Journey's End`,
      characterPhoto: 'http://static.wikia.nocookie.net/frieren/images/9/90/Frieren_-_Beyond_Journey%27s_End_key_visual.png',
      genre_id: adventure._id
    },
    {
      name: 'The Unwanted Undead Adventurer',
      characterPhoto: 'http://img3.od-cdn.com/ImageType-100/8208-1/%7BC020BBD5-247B-4E1B-8AE4-759E8437E294%7DImg100.jpg',
      genre_id: adventure._id
    },
    {
      name: 'The Faraway Paladin',
      characterPhoto: 'http://static.wikia.nocookie.net/the-faraway-paladin/images/a/a5/Anime_Visual_4.jpg',
      genre_id: adventure._id
    },
    {
      name: 'Dragon Ball',
      characterPhoto: 'http://static.wikia.nocookie.net/dragonball/images/a/ac/Dragon_Ball_DAIMA_promo.png',
      genre_id: adventure._id
    },
    {
      name: 'Hunter x Hunter',
      characterPhoto: 'http://static.wikia.nocookie.net/toonami/images/6/65/HunterxHunter.jpg',
      genre_id: adventure._id
    },
    {
      name: `Fullmetal Alchemist: Brotherhood`,
      characterPhoto: 'http://static.wikia.nocookie.net/fma/images/e/e9/Fmab-poster.png',
      genre_id: adventure._id
    },
    {
      name: 'Yu Yu Hakusho',
      characterPhoto: 'http://static.wikia.nocookie.net/whumpapedia/images/8/84/YuYuHakusho.png',
      genre_id: adventure._id
    },
    {
      name: 'Fairy Tail',
      characterPhoto: 'http://static.wikia.nocookie.net/vsbattles/images/e/e7/Fairy_Tail_New_Banner.jpg',
      genre_id: adventure._id
    },
    {
      name: 'Mashle: Magic and Muscles',
      characterPhoto: 'http://static.wikia.nocookie.net/mashle/images/0/0f/Volume_01.png',
      genre_id: comedy._id
    },
    {
      name: 'Spy x Family',
      characterPhoto: 'http://static.wikia.nocookie.net/spy-x-family9171/images/7/76/SPY_x_FAMILY_Key_Visual_1.png',
      genre_id: comedy._id
    },
    {
      name: `Mr. Villan's Day Off`,
      characterPhoto: 'http://upload.wikimedia.org/wikipedia/en/thumb/3/39/Mr._Villain%27s_Day_Off_vol._1_cover.jpg',
      genre_id: comedy._id
    },
    {
      name: 'Bucchigiri?!',
      characterPhoto: 'http://static.wikia.nocookie.net/dubbing9585/images/4/42/Bucchigiri.png',
      genre_id: comedy._id
    },
    {
      name: 'Assassination Classroom',
      characterPhoto: 'http://static.miraheze.org/allthetropeswiki/thumb/d/d3/Assassination_Clasroom_-_2015_anime_poster_-_AllTheTropes.jpg/231px-Assassination_Clasroom_-_2015_anime_poster_-_AllTheTropes.jpg',
      genre_id: comedy._id
    },
    {
      name: 'The Great Cleric',
      characterPhoto: 'http://static.wikia.nocookie.net/the-great-cleric/images/b/bb/The_Great_Cleric_LN6_Cover.png',
      genre_id: comedy._id
    },
    {
      name: 'The Apothecary Diaries',
      characterPhoto: 'http://static.wikia.nocookie.net/kusuriya-no-hitorigoto/images/8/87/Manga_Volume_7.png',
      genre_id: drama._id
    },
    {
      name: 'Classroom of the Elite',
      characterPhoto: 'http://static.wikia.nocookie.net/animangademocracy/images/a/a6/Bx98659-ROrT5fJYjbT9.png',
      genre_id: drama._id
    },
    {
      name: 'The Kingdoms of Ruin',
      characterPhoto: 'http://upload.wikimedia.org/wikipedia/en/thumb/8/83/The_Kingdoms_of_Ruin_volume_1_cover.jpg/220px-The_Kingdoms_of_Ruin_volume_1_cover.jpg',
      genre_id: drama._id
    },
    {
      name: `A Returner's Magic Should Be Special`,
      characterPhoto: 'http://static.wikia.nocookie.net/a-returners-magic-should-be-special/images/a/a8/A_Returner%27s_Magic_Should_Be_Special_-_KV_2x3.jpg',
      genre_id: drama._id
    },
    {
      name: 'The Witch and the Beast',
      characterPhoto: 'http://static.wikia.nocookie.net/witchandthebeast/images/4/42/The_Witch_and_the_Beast_Key_Visual_2.png',
      genre_id: drama._id
    },
    {
      name: 'Metallic Rouge',
      characterPhoto: 'http://static.wikia.nocookie.net/metallic-rouge/images/0/08/Metallic_Rouge_Visual_Key_%282%29.png',
      genre_id: drama._id
    },
    {
      name: 'Kingdom',
      characterPhoto: 'http://static.wikia.nocookie.net/kingdom-anime/images/4/46/Volume_1_cover.PNG',
      genre_id: drama._id
    },
    {
      name: 'Under Ninja',
      characterPhoto: 'http://static.wikia.nocookie.net/under-ninja/images/1/1b/Volume_11.png',
      genre_id: drama._id
    },
    {
      name: 'The Wrong Way to Use Healing Magic',
      characterPhoto: 'http://static.wikia.nocookie.net/the-wrong-way-to-use-healing-magic/images/2/23/The_Wrong_Way_to_Use_Healing_Magic_LN_Volume_1_Cover.jpg',
      genre_id: fantasy._id
    },
    {
      name: 'The Daily Life of the Immortal King',
      characterPhoto: 'http://static.wikia.nocookie.net/the-daily-life-of-the-immortal-king/images/2/2c/Wang_Ling_2022.jpeg/',
      genre_id: fantasy._id
    },
    {
      name: 'Sword Art Online',
      characterPhoto: 'http://static.wikia.nocookie.net/swordartonline/images/2/2d/Sword_Art_Online_Anime_Aincrad_Arc_Key_Visual.png',
      genre_id: fantasy._id
    },
    {
      name: 'Tokyo Ghoul',
      characterPhoto: 'http://static.wikia.nocookie.net/tokyoghoul/images/e/eb/Tokyo_Ghoul_-anime-.jpg',
      genre_id: fantasy._id
    },
    {
      name: `Protocol: Rain`,
      characterPhoto: 'http://static.wikia.nocookie.net/protocol-rain/images/1/16/Protocol_Rain_-_JP_KV_2x3.jpg',
      genre_id: scifi._id
    },
    {
      name: `Brave Bang Bravern!`,
      characterPhoto: 'http://static.wikia.nocookie.net/bravesaga7855/images/8/8f/Bang_Bravern_%28Visual_2%29.jpg',
      genre_id: scifi._id
    },
    {
      name: `KamiErabi GOD.app`,
      characterPhoto: 'http://static.wikia.nocookie.net/kamierabi/images/3/39/KamiErabi_GOD.app_1st_Key_Visual.png',
      genre_id: scifi._id
    },
    {
      name: `Cowboy Bebop`,
      characterPhoto: 'http://static.wikia.nocookie.net/cowboybebop/images/3/37/CowboyBebopDVDBoxSet.jpg',
      genre_id: scifi._id
    },
    {
      name: `Psycho-Pass`,
      characterPhoto: 'http://upload.wikimedia.org/wikipedia/en/thumb/8/88/Psycho-Pass_key_visual.png/220px-Psycho-Pass_key_visual.png',
      genre_id: scifi._id
    },
    {
      name: `A Certain Magical Index`,
      characterPhoto: 'http://upload.wikimedia.org/wikipedia/en/thumb/0/07/Index_III.jpg/220px-Index_III.jpg',
      genre_id: scifi._id
    },
    {
      name: `Hellsing`,
      characterPhoto: 'http://static.wikia.nocookie.net/hellsing/images/6/64/Vol1Illustration.png',
      genre_id: scifi._id
    },
    {
      name: `Captain Tsubasa: Junior Youth Arc`,
      characterPhoto: 'http://static.wikia.nocookie.net/dubbing9585/images/0/01/Captain_Tsubasa_Junior_Youth_Arc.jpg',
      genre_id: shonen._id
    },
    {
      name: `Haikyu`,
      characterPhoto: 'http://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Haikyu_season_2_DVD_cover.jpg/220px-Haikyu_season_2_DVD_cover.jpg',
      genre_id: shonen._id
    },
    {
      name: `Chainsaw Man`,
      characterPhoto: 'http://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Chainsaw_Man_anime.png/220px-Chainsaw_Man_anime.png',
      genre_id: shonen._id
    },
    {
      name: `Fire Force`,
      characterPhoto: 'http://static.wikia.nocookie.net/fire-brigade-of-flames/images/8/84/Fire_force_funi_logo.png',
      genre_id: shonen._id
    },
    {
      name: `Naruto: Shippuden`,
      characterPhoto: 'http://upload.wikimedia.org/wikipedia/en/thumb/4/49/Shippudenkeyvisual.png/220px-Shippudenkeyvisual.png',
      genre_id: shonen._id
    },
    {
      name: `Fist of the Blue Sky: Regenesis`,
      characterPhoto: 'http://upload.wikimedia.org/wikipedia/en/8/88/FistoftheBlueSky1.jpg',
      genre_id: shonen._id
    },
    {
      name: `Psychic Princess`,
      characterPhoto: 'http://static.wikia.nocookie.net/psychicprincesstonglingfei/images/8/88/129034.jpg',
      genre_id: shojo._id
    },
    {
      name: `Laughing Under the Clouds`,
      characterPhoto: 'http://static.wikia.nocookie.net/dontenniwarau/images/2/26/Donten_ni_Warau_Gaiden_Movie_1_Visual.png',
      genre_id: shojo._id
    },
    {
      name: `Sailor Moon Crystal`,
      characterPhoto: 'http://static.wikia.nocookie.net/voiceacting/images/a/a4/Sailor_Moon_Crystal_image.png',
      genre_id: shojo._id
    },
    {
      name: `Fushigi Yugi`,
      characterPhoto: 'http://static.wikia.nocookie.net/fushigiyuugi/images/0/07/Fushigi-Yuugi-Yugi-Manga-Vol1-Volume-Cover-Tankoban.jpg',
      genre_id: shojo._id
    },
    {
      name: `Theatre of Drakness: Yamishibai`,
      characterPhoto: 'http://static.wikia.nocookie.net/enanimanga/images/6/66/Yami_Shibai.jpg',
      genre_id: thriller._id
    },
    {
      name: `JOJO's Bizarre Adventure`,
      characterPhoto: 'http://static.jojowiki.com/images/thumb/0/0e/latest/20230510204229/Volume_1.png/400px-Volume_1.png',
      genre_id: thriller._id
    },
    {
      name: `The Promised Neverland`,
      characterPhoto: 'http://static.wikia.nocookie.net/yakusokunoneverland/images/8/87/Chapter_1_JP.png',
      genre_id: thriller._id
    },
    {
      name: `Saga of Tanya the Evil`,
      characterPhoto: 'http://static.wikia.nocookie.net/enanimanga/images/4/43/Youjo_Senki_Light_Novel.jpg',
      genre_id: thriller._id
    },
    {
      name: `Battle Game in 5 Seconds`,
      characterPhoto: 'http://static.wikia.nocookie.net/battle-in-5-seconds-after-meeting/images/4/41/Battle_in_5_Seconds_After_Meeting1.jpg',
      genre_id: thriller._id
    },
    {
      name: `To the Abandoned Sacred Beasts`,
      characterPhoto: 'http://static.tvtropes.org/pmwiki/pub/images/a21778_33416613111559620473.jpg',
      genre_id: thriller._id
    },
    {
      name: `King's Game`,
      characterPhoto: 'http://upload.wikimedia.org/wikipedia/en/thumb/5/58/%C5%8Csama_Game_The_Animation.png/220px-%C5%8Csama_Game_The_Animation.png',
      genre_id: thriller._id
    },
    {
      name: `Joker Game`,
      characterPhoto: 'http://static.wikia.nocookie.net/enanimanga/images/2/27/Joker_Game.jpg',
      genre_id: thriller._id
    },
    {
      name: `Noblesse: Awakening`,
      characterPhoto: 'http://static.wikia.nocookie.net/noblesse/images/5/5a/Noblesse_awakening_ova.png',
      genre_id: thriller._id
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