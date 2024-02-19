document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('searchBar');
  const submitButton = document.getElementById('submitButton');
  const genreTypes = document.getElementById('Genre-types');

  const getGenres = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:3001/api/genre');
      const genres = response.data;

      genres.forEach(genre => {
        const genreButton = document.createElement('button');
        genreButton.textContent = genre.type;
        genreButton.addEventListener('click', () => {

          fetchAnimeByGenre(genre.type);
        });
        genreTypes.appendChild(genreButton);
      });
    } catch (error) {
      console.error('Error fetching genres:', error);
    }
  };

  getGenres();

  submitButton.addEventListener('click', () => {
    const searchTerm = searchBar.value.trim();

    if (searchTerm) {

      fetchAnimeOrCharacter(searchTerm);
    }
  });

  function fetchAnimeByGenre(genreName) {
    axios.get(`http://localhost:3001/api/genre/${genreName}`)
      .then(response => {
        const genreDetails = response.data;


        genreTypes.innerHTML = '';

        genreDetails.anime.forEach(animeName => {
          const animeButton = document.createElement('button');
          animeButton.textContent = animeName;
          animeButton.addEventListener('click', () => {

            fetchCharactersByAnime(animeName);
          });
          genreTypes.appendChild(animeButton);
        });
      })
      .catch(error => console.error(`Error fetching anime for ${genreName} genre:`, error));
  }

  function fetchCharactersByAnime(animeName) {
    axios.get(`http://localhost:3001/api/anime/${encodeURIComponent(animeName)}/characters`)
      .then(response => {
        const characters = response.data;

        genreTypes.innerHTML = '';
    
        console.log('Characters:', characters); 

        characters.forEach(character => {
          const characterButton = document.createElement('button');
          characterButton.textContent = character;
          characterButton.addEventListener('click', () => {
           
            fetchCharacterInfo(character);
          });
          genreTypes.appendChild(characterButton);
        });
      })
      .catch(error => console.error(`Error fetching characters for ${animeName} anime:`, error));
  }

  function fetchCharacterInfo(characterName) {
    axios.get(`http://localhost:3001/api/characters/${encodeURIComponent(characterName)}`)
      .then(response => {
        const characterInfo = response.data;
  
        genreTypes.innerHTML = '';
  
        const characterContainer = document.createElement('div');
  
        characterContainer.innerHTML = `
          <h2>${characterInfo.name}</h2>
          <img src="${characterInfo.characterGif}" alt="Character Gif">
        `;
  
        genreTypes.appendChild(characterContainer);
      })
      .catch(error => console.error(`Error fetching information for ${characterName} character:`, error));
  }
});