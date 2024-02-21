const db = require('../db')
const CharacterInfo = require('../models/characterInfo')
const AnimeName = require('../models/animeName')

db.on('error', (error) => {
  console.error('MogoDB connection error:', error);
})

const main = async () => {

  const blackClover = await AnimeName.find({name: 'Black Clover'})
  const jujutsuKaisen = await AnimeName.find({name: 'Jujutsu Kaisen'})
  const onepiece = await AnimeName.find({name: 'One Piece'})
  const soloLeveling = await AnimeName.find({name: 'Solo Leveling'})
  const shangri = await AnimeName.find({name: 'Shangri-La Frontier'})
  const risingShield = await AnimeName.find({name: 'The Rising of the Shield Hero'})
  const berserk = await AnimeName.find({name: 'Berserk of Gluttony'})
  const stone = await AnimeName.find({name: 'Dr. STONE'})
  const goblin = await AnimeName.find({name: 'Goblin Slayer'})
  const myHero = await AnimeName.find({name: 'My Hero Academia'})
  const attack = await AnimeName.find({name: 'Attack on Titan'})
  const frieren = await AnimeName.find({name: `Frieren: Beyond Journey's End`})
  const unwantedUndead = await AnimeName.find({name: 'The Unwanted Undead Adventurer'})
  const faraway = await AnimeName.find({name: 'The Faraway Paladin'})
  const dragonBall = await AnimeName.find({name: 'Dragon Ball'})
  const hunterxhunter = await AnimeName.find({name: 'Hunter x Hunter'})
  const fullmetal = await AnimeName.find({name: 'Fullmetal Alchemist: Brotherhood'})
  const yuyu = await AnimeName.find({name: 'Yu Yu Hakusho'})
  const fairyTail = await AnimeName.find({name: 'Fairy Tail'})
  const mashle = await AnimeName.find({name: 'Mashle: Magic and Muscles'})
  const spyFamily = await AnimeName.find({name: 'Spy x Family'})
  const mrVillan = await AnimeName.find({name: `Mr. Villan's Day Off`})
  const bucchigiri = await AnimeName.find({name: 'Bucchigiri?!'})
  const assassination = await AnimeName.find({name: 'Assassination Classroom'})
  const greatCleric = await AnimeName.find({name: 'The Great Cleric'})
  const apothecary = await AnimeName.find({name: 'The Apothecary Diaries'})
  const classroomElite = await AnimeName.find({name: 'Classroom of the Elite'})
  const kingdomRuin = await AnimeName.find({name: 'The Kingdoms of Ruin'})
  const returnersMagic = await AnimeName.find({name: `A Returner's Magic Should Be Special`})
  const witchandBeast = await AnimeName.find({name: 'The Witch and the Beast'})
  const metallicRouge = await AnimeName.find({name: 'Metallic Rouge"'})
  const kingdom = await AnimeName.find({name: 'Kingdom'})
  const underNinja = await AnimeName.find({name: 'Under Ninja'})
  const wrongWay = await AnimeName.find({name: 'The Wrong Way to Use Healing Magic'})
  const immortalKing = await AnimeName.find({name: 'The Daily Life of the Immortal King'})
  const swordArt = await AnimeName.find({name: 'Sword Art Online'})
  const tokyoGhoul = await AnimeName.find({name: 'Tokyo Ghoul'})
  const protocol = await AnimeName.find({name: 'Protocol: Rain'})
  const brave = await AnimeName.find({name: 'Brave Bang Bravern!'})
  const kamiErabi = await AnimeName.find({name: 'KamiErabi GOD.app'})
  const cowboy = await AnimeName.find({name: 'Cowboy Bebop'})
  const psycho = await AnimeName.find({name: 'Psycho-Pass'})
  const magicalIndex = await AnimeName.find({name: 'A Certain Magical Index'})
  const hellsing = await AnimeName.find({name: 'Hellsing'})
  const captainTsubasa = await AnimeName.find({name: 'Captain Tsubasa: Junior Youth Arc'})
  const haikyu = await AnimeName.find({name: 'Haikyu'})
  const chansawMan = await AnimeName.find({name: 'Chainsaw Man'})
  const fireForce = await AnimeName.find({name: 'Fire Force'})
  const naruto = await AnimeName.find({name: 'Naruto: Shippuden'})
  const fistOfTheBlue = await AnimeName.find({name: 'Fist of the Blue Sky: Regenesis'})
  const psychicPrincess = await AnimeName.find({name: 'Psychic Princess'})
  const laughingUnder = await AnimeName.find({name: 'Laughing Under the Clouds'})
  const sailorMoon = await AnimeName.find({name: 'Sailor Moon Crystal'})
  const fushigiYugi = await AnimeName.find({name: 'Fushigi Yugi'})
  const theatreDrakness = await AnimeName.find({name: 'Theatre of Drakness: Yamishibai'})
  const jojo = await AnimeName.find({name: `JOJO's Bizarre Adventure`})
  const promisedNeverland = await AnimeName.find({name: 'The Promised Neverland'})
  const sagaOfTanya = await AnimeName.find({name: 'Saga of Tanya the Evil'})
  const battleGame = await AnimeName.find({name: 'Battle Game in 5 Seconds'})
  const abandondedBeasts = await AnimeName.find({name: 'To the Abandoned Sacred Beasts'})
  const kingsGame = await AnimeName.find({name: `King's Game`})
  const jokerGame = await AnimeName.find({name: 'Joker Game'})
  const noblessAwakening = await AnimeName.find({name: 'Noblesse: Awakening'})


  const characterInfo = [
    {
      name: 'Asta',
      engVoiceActor: 'Dallas Reid',
      japVoiceActor: 'Gakuto Kajiwara',
      summary: 'Asta is a fictional character and the main protagonist of the manga series Black Clover created by Yūki Tabata. A peasant orphan who was left at a church, he aspires to become the next Wizard King.',
      photo: `https://static.wikia.nocookie.net/blackclover/images/9/9a/Asta_after_Heart_Kingdom_training.png`,
      characterGif: 'https://media1.tenor.com/m/l-vMo2gqeNEAAAAd/asta-black-clover.gif',
      animeName_id: blackClover[0]._id
    },
    {
      name: 'Yami Sukehiro',
      engVoiceActor: 'Christopher Sabat',
      japVoiceActor: `Jun'ichi Suwabe`,
      summary: 'Yami Sukehiro is a fictional character of the manga series Black Clover created by Yūki Tabata. Nicknamed the "Lord of Destruction", he is the captain of the Black Bulls, considered the worst Magic Knight Squad, and recruits Asta. Yami is physically strong and intimidating, threatening anyone who annoys him.',
      photo: `https://static.wikia.nocookie.net/blackclover/images/4/46/Young_Yami.png`,
      characterGif: 'https://media1.tenor.com/m/9SM0aliwrLcAAAAC/anime-yami.gif',
      animeName_id: blackClover[0]._id
    },
    {
      name: 'Mimosa Vermillion',
      engVoiceActor: 'Bryan Apprill',
      japVoiceActor: 'Asuka Nishi',
      summary: 'As a noblewoman, Mimosa wears fancy attires which consist of a puffy cream-colored sweater with long sleeves, white puffy short pants, and a brown corset. Below the corset, she also wears another lighter brown-colored piece of fabric that has frilly edges. The corset is tied at the front with strings. Her footwear consists of a pair of boots that are tightly fit her legs and extends above her knees. They are light-colored and have a split at the top in which are kept together by strings. The boots also have frilly edges below the collars. On top of all of those, Mimosa also wears a dark red mantle, which has a white lining made of similar material as the rest of the mantle.',
      photo: `https://static.wikia.nocookie.net/blackclover/images/c/c2/Mimosa_after_Heart_Kingdom_training.png`,
      characterGif: 'https://media1.tenor.com/m/D9_lhTyREkwAAAAC/black-clover-anime.gif',
      animeName_id: blackClover[0]._id
    },
    {
      name: 'Nero',
      engVoiceActor: '',
      japVoiceActor: 'Hitomi Saski',
      summary: 'As a human, Secre is a short, slender woman with black hair in a bob style. Two locks of hair stick up from the top of her head. She has dark bags under her eyes. She wears a black dress with thin straps and a short, ruffled skirt that resembles feathers. Due to using Forbidden Magic, she grows two black horns on the sides of her head.',
      photo: 'https://static.wikia.nocookie.net/blackclover/images/e/eb/Secre_after_Heart_Kingdom_training.png',
      characterGif: 'https://media1.tenor.com/m/99ESf8H5swkAAAAC/nero-gatto.gif',
      animeName_id: blackClover[0]._id
    },
    {
      name: 'Nobara Kugisaki',
      engVoiceActor: 'Asami Seto',
      japVoiceActor: 'Anne Yatco',
      summary: 'Nobara is a confident and brash young woman with an unshakable character. More than anything, Nobara is determined to stay true to herself no matter what. She takes great pride in being both a pretty girl and a strong fighter, refusing to let anyone influence her.',
      photo: 'https://static.wikia.nocookie.net/jujutsu-kaisen/images/d/dd/Nobara_Kugisaki_%28Anime_2%29.png',
      characterGif: 'https://media1.tenor.com/m/ItwOYPtzE68AAAAC/mommy-jjk.gif',
      animeName_id: jujutsuKaisen[0]._id
    },
    {
      name: 'Mahito',
      engVoiceActor: 'Lucien Dodge',
      japVoiceActor: 'Nobunaga Shimazaki',
      summary: `Mahito is a sadistic, immature cursed spirit who enjoys toying with human emotions. He believes he was born from human transgressions and considers himself the very manifestation of humans' hatred of each other. As such, Mahito believes that humans should be extinguished and cursed spirits should rule in their place.`,
      photo: 'https://static.wikia.nocookie.net/jujutsu-kaisen/images/9/99/Mahito_%28Anime_2%29.png',
      characterGif: 'https://media1.tenor.com/m/E4t7yz8l67QAAAAC/mahito-walking-jujutsu-kaisen.gif',
      animeName_id: jujutsuKaisen[0]._id
    },
    {
      name: 'Sanji',
      engVoiceActor: 'Eric Vale',
      japVoiceActor: 'Hiroaki Hirata',
      summary: 'Born as the third son and fourth child of the Vinsmoke Family (thus, making him a former prince of the Germa Kingdom), he disowned his family twice, once in his youth and again after reuniting with them as an adult. After fleeing the Vinsmokes as a child, he eventually entered the care of Zeff as the sous chef of the Baratie, where he would remain until he met Monkey D. Luffy, who convinced him to join his crew.',
      photo: 'https://static.wikia.nocookie.net/onepiece/images/b/b6/Sanji_Anime_Post_Timeskip_Infobox.png',
      characterGif: 'https://media1.tenor.com/m/oT3XOiIrzooAAAAC/sanji-sanji-heart-eyes.gif',
      animeName_id: onepiece[0]._id
    },
    {
      name: 'Jimbei',
      engVoiceActor: 'Daniel Baugh',
      japVoiceActor: 'Katsuhisa Hoki',
      summary: `Jinbe is a whale shark fish-man and a powerful master of Fish-Man Karate. His dream is to fulfill his former captain Fisher Tiger's dying wish of coexistence and equality between humans and fish-men. He was a member of the Sun Pirates, eventually becoming its second captain after the death of their original captain, Tiger. He eventually became one of the Seven Warlords of the Sea, though he resigned during the Summit War of Marineford. Vegapunk later cloned Jinbe as one of the Seraphim, S-Shark, to replace the Warlords.`,
      photo: 'https://static.wikia.nocookie.net/onepiece/images/8/81/Jinbe_Anime_Infobox.png',
      characterGif: 'https://media1.tenor.com/m/7M7SSaseFgkAAAAC/jinbe.gif',
      animeName_id: onepiece[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: jujutsuKaisen[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },
    {
      name: '',
      engVoiceActor: '',
      japVoiceActor: '',
      summary: '',
      photo: '',
      characterGif: '',
      animeName_id: blackClover[0]._id
    },

  ]
  await CharacterInfo.insertMany(characterInfo)
  console.log('Created characters')
}

const run = async () => {
  await main()
    db.close()
}

run()