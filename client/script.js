document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('searchBar')
  const submitButton = document.getElementById('submitButton')
  const genreTypes = document.getElementById('Genre-types')

  const getGenres = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3001/api/genre')
      const genres = response.data

      genres.forEach(genre => {
        const genreButton = document.createElement('button')
        genreButton.textContent = genre.type
        genreButton.addEventListener('click', () => {
          fetchAnimeByGenre(genre.type)
        })
        genreButton.classList.add('genreButton')
        genreTypes.appendChild(genreButton)
      })
    } catch (error) {
      console.error('Error fetching genres:', error)
    }
  }

  getGenres()

  submitButton.addEventListener('click', () => {
    const searchTerm = searchBar.value.trim()

    if (searchTerm) {
      fetchAnimeOrCharacter(searchTerm)
    }
  })

  submitButton.addEventListener('click', () => {
    const searchTerm = searchBar.value.trim()

    if (searchTerm) {
      fetchAnimeOrCharacter(searchTerm)
    }
  })

  searchBar.addEventListener('keydown', function (event) {
    if (event.keyCode == 13) {
      submitButton.click()
    }
  })

  async function fetchAnimeOrCharacter(searchTerm) {
    try {
      const response = await axios.get(`http://localhost:3001/api/search/${encodeURIComponent(searchTerm)}`)
      const searchResults = response.data

      genreTypes.innerHTML = ''

      if (searchResults.anime) {
        const animeWrapper = document.createElement('div')
        animeWrapper.classList.add('anime-wrapper')

        searchResults.anime.forEach(animeName => {
          const animeContainer = document.createElement('div')
          animeContainer.classList.add('anime-container')

          const animeNameText = document.createElement('h1')
          animeNameText.textContent = animeName
          animeNameText.classList.add('anime-name')

          const animeImg = document.createElement('img')
          animeImg.src = getAnimePhoto(animeName)
          animeImg.classList.add('anime-photo')
          animeImg.alt = animeName

          animeContainer.appendChild(animeNameText)
          animeContainer.appendChild(animeImg)

          animeContainer.addEventListener('click', () => {
            fetchCharactersByAnime(animeName)
          })

          animeWrapper.appendChild(animeContainer)
        })

        genreTypes.appendChild(animeWrapper)
      }

      if (searchResults.characters) {
        const characterWrapper = document.createElement('div')
        characterWrapper.classList.add('character-wrapper')

        searchResults.characters.forEach(character => {
          const characterContainer = document.createElement('div')

          const characterImg = document.createElement('img')
          characterImg.src = character.photo
          characterImg.alt = character.name
          characterImg.classList.add('anime-photo')

          const characterNameText = document.createElement('p')
          characterNameText.textContent = character.name
          characterNameText.classList.add('anime-name')

          characterContainer.appendChild(characterNameText)
          characterContainer.appendChild(characterImg)

          characterContainer.addEventListener('click', () => {
            console.log('Fetching character info for ID:', character._id)
            fetchCharacterInfo(character._id)
          })

          characterWrapper.appendChild(characterContainer)
        })

        genreTypes.appendChild(characterWrapper)
      }
    } catch (error) {
      console.error('Error fetching anime or character:', error.message)
      if (error.response) {
    }
  }
}

function fetchAnimeByGenre(genreName) {
  axios.get(`http://localhost:3001/api/genre/${genreName}`)
    .then(response => {
      const genreDetails = response.data

      genreTypes.innerHTML = ''

      const animeWrapper = document.createElement('div')
      animeWrapper.classList.add('anime-wrapper')

      genreDetails.anime.forEach(animeName => {
        const animeContainer = document.createElement('div')
        animeContainer.classList.add('anime-container')

        const animeNameText = document.createElement('h1')
        animeNameText.textContent = animeName
        animeNameText.classList.add('anime-name')

        const animeImg = document.createElement('img')
        animeImg.src = getAnimePhoto(animeName)
        animeImg.classList.add('anime-photo')
        animeImg.alt = animeName

        animeContainer.appendChild(animeNameText)
        animeContainer.appendChild(animeImg)

        animeContainer.addEventListener('click', () => {
          fetchCharactersByAnime(animeName)
        })

        animeWrapper.appendChild(animeContainer)
      })

      genreTypes.appendChild(animeWrapper)
    })
    .catch(error => console.error(`Error fetching anime for ${genreName} genre:`, error))
}

function fetchCharactersByAnime(animeName) {
  axios.get(`http://localhost:3001/api/anime/${encodeURIComponent(animeName)}/characters`)
    .then(response => {
      const characters = response.data

      genreTypes.innerHTML = ''

      const characterWrapper = document.createElement('div')
      characterWrapper.classList.add('character-wrapper')

      characters.forEach(character => {
        const characterContainer = document.createElement('div')

        const characterImg = document.createElement('img')
        characterImg.src = character.photo
        characterImg.alt = character.name
        characterImg.classList.add('anime-photo')

        const characterNameText = document.createElement('p')
        characterNameText.textContent = character.name
        characterNameText.classList.add('anime-name')

        characterContainer.appendChild(characterNameText)
        characterContainer.appendChild(characterImg)

        characterContainer.addEventListener('click', () => {
          console.log('Fetching character info for ID:', character._id)
          fetchCharacterInfo(character._id)
        })

        characterWrapper.appendChild(characterContainer)
      })

      genreTypes.appendChild(characterWrapper)
    })
    .catch(error => console.error(`Error fetching characters for ${animeName} anime:`, error))
}

  function fetchCharacterInfo(characterId) {
    console.log('Fetching character info for ID:', characterId)
    axios.get(`http://localhost:3001/api/characters/${characterId}`)
      .then(response => {
        console.log('Character info response:', response.data)

        const characterInfo = response.data
        genreTypes.innerHTML = ''

        const characterContainer = document.createElement('div')
        characterContainer.innerHTML = `
          <h2>Name</h2>
          <p>${characterInfo.name}</p>
          <h3>Summary</h3>
          <p>${characterInfo.summary}</p>
          <h3>English Voice Actor</h3>
          <p>${characterInfo.engVoiceActor}</p>
          <h3>Japanese Voice Actor</h3>
          <p>${characterInfo.japVoiceActor}</p>
          <img src="${characterInfo.characterGif}" alt="Character Gif">
        `

        genreTypes.appendChild(characterContainer)
      })
      .catch(error => {
        console.error(`Error fetching information for ${characterId} character:`, error)
        console.log('Character info error response:', error.response.data)
      })
  }

  // Add a function to get the anime photo URL
  function getAnimePhoto(animeName) {
    const animePhotoMap = {
      'Solo Leveling': 'http://static.wikia.nocookie.net/solo-leveling/images/b/bf/Solo_Leveling_Returns.png',
      'Black Clover': 'https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/71ie87aqvLL._AC_SY879_.jpg',
      'Jujutsu Kaisen': 'https://p325k7wa.twic.pics/high/jujutsu-kaisen/jujutsu-kaisen-cursed-clash/00-page-setup/JJK-header-mobile2.jpg',
      'One Piece': 'https://static.wikia.nocookie.net/onepiece/images/6/6b/Slide_1_preview.png',
      'Shangri-La Frontier': 'https://static.wikia.nocookie.net/shangrila-frontier/images/3/3e/Shangri-La_Frontier_Anime_Key_Visual_5.png',
      'The Rising of the Shield Hero': 'http://cdn.kobo.com/book-images/6b56546b-befc-4665-a5bd-a313a76449ad/353/569/90/False/the-rising-of-the-shield-hero-volume-20.jpg',
      'Berserk of Gluttony': 'https://static.wikia.nocookie.net/berserkofgluttony/images/4/4f/BoG_Cover_English_6.jpg',
      'Dr. STONE': 'http://static.wikia.nocookie.net/dr-stone/images/3/35/Dr._Stone_Stone_Wars_Key_Visual_4.png',
      'Goblin Slayer': 'http://images.hive.blog/p/NTy4GV6ooFRmaCXZ8UYgPhoud1kjiNX8QokLEZtbBKLuLWQ9yt7K3o4EsMHxweGuomeofBNSZzEaJqu8tKeujpLTyX4TY56979vzbizZKqCfsMKPDBACtnCZjLeZ1QrmzAdFYDr8qUBKvrjoaZTDgh8LimW5hVzHCpxd7hNv?format=match&mode=fit',
      'My Hero Academia': 'http://legendary-digital-network-assets.s3.amazonaws.com/wp-content/uploads/2018/10/12213851/My-Hero-Academia-1536x864.png',
      'Attack on Titan': 'http://wallpapers.com/images/high/attack-on-titan-eren-title-vs67k95bhj7b0cmy.webp',
      'Frieren: Beyond Journey\'s End': 'http://static.wikia.nocookie.net/frieren/images/9/90/Frieren_-_Beyond_Journey%27s_End_key_visual.png',
      'The Unwanted Undead Adventurer': 'http://img3.od-cdn.com/ImageType-100/8208-1/%7BC020BBD5-247B-4E1B-8AE4-759E8437E294%7DImg100.jpg',
      'The Faraway Paladin': 'http://static.wikia.nocookie.net/the-faraway-paladin/images/a/a5/Anime_Visual_4.jpg',
      'Dragon Ball': 'http://static.wikia.nocookie.net/dragonball/images/a/ac/Dragon_Ball_DAIMA_promo.png',
      'Hunter x Hunter': 'http://static.wikia.nocookie.net/toonami/images/6/65/HunterxHunter.jpg',
      'Fullmetal Alchemist: Brotherhood': 'http://static.wikia.nocookie.net/fma/images/e/e9/Fmab-poster.png',
      'Yu Yu Hakusho': 'http://static.wikia.nocookie.net/whumpapedia/images/8/84/YuYuHakusho.png',
      'Fairy Tail': 'http://static.wikia.nocookie.net/vsbattles/images/e/e7/Fairy_Tail_New_Banner.jpg',
      'Mashle: Magic and Muscles': 'http://static.wikia.nocookie.net/mashle/images/0/0f/Volume_01.png',
      'Spy x Family': 'http://static.wikia.nocookie.net/spy-x-family9171/images/7/76/SPY_x_FAMILY_Key_Visual_1.png',
      'Mr. Villan\'s Day Off': 'https://upload.wikimedia.org/wikipedia/en/3/39/Mr._Villain%27s_Day_Off_vol._1_cover.jpg',
      'Bucchigiri?!': 'http://static.wikia.nocookie.net/dubbing9585/images/4/42/Bucchigiri.png',
      'Assassination Classroom': 'http://static.miraheze.org/allthetropeswiki/thumb/d/d3/Assassination_Clasroom_-_2015_anime_poster_-_AllTheTropes.jpg/231px-Assassination_Clasroom_-_2015_anime_poster_-_AllTheTropes.jpg',
      'The Great Cleric': 'http://static.wikia.nocookie.net/the-great-cleric/images/b/bb/The_Great_Cleric_LN6_Cover.png',
      'The Apothecary Diaries': 'http://static.wikia.nocookie.net/kusuriya-no-hitorigoto/images/8/87/Manga_Volume_7.png',
      'Classroom of the Elite': 'http://static.wikia.nocookie.net/animangademocracy/images/a/a6/Bx98659-ROrT5fJYjbT9.png',
      'The Kingdoms of Ruin': 'http://upload.wikimedia.org/wikipedia/en/thumb/8/83/The_Kingdoms_of_Ruin_volume_1_cover.jpg/220px-The_Kingdoms_of_Ruin_volume_1_cover.jpg',
      'A Returner\'s Magic Should Be Special': 'http://static.wikia.nocookie.net/a-returners-magic-should-be-special/images/a/a8/A_Returner%27s_Magic_Should_Be_Special_-_KV_2x3.jpg',
      'The Witch and the Beast': 'http://static.wikia.nocookie.net/witchandthebeast/images/4/42/The_Witch_and_the_Beast_Key_Visual_2.png',
      'Metallic Rouge': 'http://static.wikia.nocookie.net/metallic-rouge/images/0/08/Metallic_Rouge_Visual_Key_%282%29.png',
      'Kingdom': 'http://static.wikia.nocookie.net/kingdom-anime/images/4/46/Volume_1_cover.PNG',
      'Under Ninja': 'http://static.wikia.nocookie.net/under-ninja/images/1/1b/Volume_11.png',
      'The Wrong Way to Use Healing Magic': 'http://static.wikia.nocookie.net/the-wrong-way-to-use-healing-magic/images/2/23/The_Wrong_Way_to_Use_Healing_Magic_LN_Volume_1_Cover.jpg',
      'The Daily Life of the Immortal King': 'http://static.wikia.nocookie.net/the-daily-life-of-the-immortal-king/images/2/2c/Wang_Ling_2022.jpeg/',
      'Sword Art Online': 'http://static.wikia.nocookie.net/swordartonline/images/2/2d/Sword_Art_Online_Anime_Aincrad_Arc_Key_Visual.png',
      'Tokyo Ghoul': 'http://static.wikia.nocookie.net/tokyoghoul/images/e/eb/Tokyo_Ghoul_-anime-.jpg',
      'Protocol: Rain': 'http://static.wikia.nocookie.net/protocol-rain/images/1/16/Protocol_Rain_-_JP_KV_2x3.jpg',
      'Brave Bang Bravern!': 'http://static.wikia.nocookie.net/bravesaga7855/images/8/8f/Bang_Bravern_%28Visual_2%29.jpg',
      'KamiErabi GOD.app': 'http://static.wikia.nocookie.net/kamierabi/images/3/39/KamiErabi_GOD.app_1st_Key_Visual.png',
      'Cowboy Bebop': 'http://static.wikia.nocookie.net/cowboybebop/images/3/37/CowboyBebopDVDBoxSet.jpg',
      'Psycho-Pass': 'http://upload.wikimedia.org/wikipedia/en/thumb/8/88/Psycho-Pass_key_visual.png/220px-Psycho-Pass_key_visual.png',
      'A Certain Magical Index': 'http://upload.wikimedia.org/wikipedia/en/thumb/0/07/Index_III.jpg/220px-Index_III.jpg',
      'Hellsing': 'http://static.wikia.nocookie.net/hellsing/images/6/64/Vol1Illustration.png',
      'Captain Tsubasa: Junior Youth Arc': 'http://static.wikia.nocookie.net/dubbing9585/images/0/01/Captain_Tsubasa_Junior_Youth_Arc.jpg',
      'Haikyu': 'http://upload.wikimedia.org/wikipedia/en/thumb/d/dd/Haikyu_season_2_DVD_cover.jpg/220px-Haikyu_season_2_DVD_cover.jpg',
      'Chainsaw Man': 'http://upload.wikimedia.org/wikipedia/en/thumb/e/e6/Chainsaw_Man_anime.png/220px-Chainsaw_Man_anime.png',
      'Fire Force': 'http://static.wikia.nocookie.net/fire-brigade-of-flames/images/8/84/Fire_force_funi_logo.png',
      'Naruto: Shippuden': 'http://upload.wikimedia.org/wikipedia/en/thumb/4/49/Shippudenkeyvisual.png/220px-Shippudenkeyvisual.png',
      'Fist of the Blue Sky: Regenesis': 'http://upload.wikimedia.org/wikipedia/en/8/88/FistoftheBlueSky1.jpg',
      'Psychic Princess': 'http://static.wikia.nocookie.net/psychicprincesstonglingfei/images/8/88/129034.jpg',
      'Laughing Under the Clouds': 'http://static.wikia.nocookie.net/dontenniwarau/images/2/26/Donten_ni_Warau_Gaiden_Movie_1_Visual.png',
      'Sailor Moon Crystal': 'http://static.wikia.nocookie.net/voiceacting/images/a/a4/Sailor_Moon_Crystal_image.png',
      'Fushigi Yugi': 'http://static.wikia.nocookie.net/fushigiyuugi/images/0/07/Fushigi-Yuugi-Yugi-Manga-Vol1-Volume-Cover-Tankoban.jpg',
      'Theatre of Drakness: Yamishibai': 'http://static.wikia.nocookie.net/enanimanga/images/6/66/Yami_Shibai.jpg',
      'JOJO\'s Bizarre Adventure': 'http://static.jojowiki.com/images/thumb/0/0e/latest/20230510204229/Volume_1.png/400px-Volume_1.png',
      'The Promised Neverland': 'http://static.wikia.nocookie.net/yakusokunoneverland/images/8/87/Chapter_1_JP.png',
      'Saga of Tanya the Evil': 'http://static.wikia.nocookie.net/enanimanga/images/4/43/Youjo_Senki_Light_Novel.jpg',
      'Battle Game in 5 Seconds': 'http://static.wikia.nocookie.net/battle-in-5-seconds-after-meeting/images/4/41/Battle_in_5_Seconds_After_Meeting1.jpg',
      'To the Abandoned Sacred Beasts': 'http://static.tvtropes.org/pmwiki/pub/images/a21778_33416613111559620473.jpg',
      'King\'s Game': 'https://static.wikia.nocookie.net/ousama-game/images/1/18/Ousama_Game_Kigen.jpg',
      'Joker Game': 'http://static.wikia.nocookie.net/enanimanga/images/2/27/Joker_Game.jpg',
      'Noblesse: Awakening': 'http://static.wikia.nocookie.net/noblesse/images/5/5a/Noblesse_awakening_ova.png',
    }
    return animePhotoMap[animeName] || 'https://placeholder.com/anime-photo'
}
})