# ultimate_anime_API
The best Anime API yopu will find

# Planning
## ERD
A 1 to many model where the Anime name is the grand parent to the Anime Character and the charachter details is the child to the anime character.

https://file+.vscode-resource.vscode-cdn.net/Users/larson.scott.96/Desktop/Screenshot%202024-02-13%20at%2011.51.25%E2%80%AFAM.png?version%3D1708090884699

# models
- Anime Name
  - name
  - cover_photo
- Anime Character
  - character_name
  - character_photo
- Character Details
  - characters_name
  - eng_voice
  - jap_voice
  - summary
  - GIF
I can expand on the character details after a few tests to make sure the app runs the way I want it to.

# Seeding
## Using Atlas to seed.
This will be a learning curve to use atlast but I think it will be the best tool to allow everything to be connected and also for testing at the beggining. I want to create three animes with three characters to start off and make sure that my functions work first. After everything works then I can go back into atlas and data dump 20+ animes with at the bare minimum of 5 characters.

# Functions
- Home page will list all the animes in alphbetical order
- buttonEventListeners for when you click on an anime it'll list the characters on a seperate screen.
- buttonEventListener for when you click on a character it'll take you to the character details page.
- search button needs functionality that when you type part of a name it'll bring up all animes with that word in their name. If you type the whole name it only brings up that one anime.

# Whiteboarding 

