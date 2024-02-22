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
      name: 'Guts',
      engVoiceActor: 'Marc Diraison',
      japVoiceActor: 'Nobutoshi Canna',
      summary: 'Guts, renowned as the "Black Swordsman", is a former mercenary and branded wanderer who travels the world in a constant internal struggle between pursuing his own ends and upholding his attachments to those dear to him.',
      photo: 'https://static.wikia.nocookie.net/berserk/images/4/40/Manga_V38_Guts.png',
      characterGif: 'https://media1.tenor.com/m/Dls3ERucnB8AAAAC/guts-waiting.gif',
      animeName_id: berserk[0]._id
    },
    {
      name: 'Caska',
      engVoiceActor: 'Carrie Keranen',
      japVoiceActor: 'Yuko Miyamura',
      summary: `Casca is a former unit commander of the Band of the Falcon and an estranged companion of Guts. Originally a callow peasant girl living in a remote mountain village,[10] she develops into a capable warrior upon joining the Band of the Falcon and aids greatly in the group's storied successes during the Hundred-Year War.`,
      photo: 'https://static.wikia.nocookie.net/berserk/images/d/d0/BTCG_Casca_and_Puck.png',
      characterGif: 'https://media1.tenor.com/m/eSgHNP0zsswAAAAC/berserk-casca.gif',
      animeName_id: berserk[0]._id
    },
    {
      name: 'Griffith',
      engVoiceActor: 'Kevin Collins',
      japVoiceActor: 'Toshiyuki Morikawa',
      summary: 'Griffith is the current leader of the reborn Band of the Falcon and supreme commander of the Midland Regular Army. Having been at the fore of many battles, he has amassed a reputation as a savior across the continent, and is revered as the "Falcon of Light".',
      photo: 'https://static.wikia.nocookie.net/berserk/images/b/b0/BTCG_Griffith_Holding_Sabre.png',
      characterGif: 'https://media1.tenor.com/m/zs7uLnHLI5sAAAAC/femto-griffith.gif',
      animeName_id: berserk[0]._id
    },
    {
      name: 'Senku Ishigami',
      engVoiceActor: 'Aaron Dismuke',
      japVoiceActor: 'Yusuke Kobayashi',
      summary: 'Senku is a straightforward, confident, and logical individual, who is also aware of the limits of his abilities. His decisions are often backed up by his vast knowledge of science and applying the scientific method.[26] Senku never belittles those who are less knowledgeable than him, however he does have a habit of diving into complicated explanations in an attempt to teach others.',
      photo: 'https://static.wikia.nocookie.net/dr-stone/images/9/93/Senku_Ishigami_%28Anime%29.png',
      characterGif: 'https://media1.tenor.com/m/BCoPBat83qEAAAAd/dr-stone-senku.gif',
      animeName_id: stone[0]._id
    },
    {
      name: 'Chrome',
      engVoiceActor: 'Matt Shipman',
      japVoiceActor: 'Gen Sato',
      summary: 'Chrome is a highly energetic person with a lot of passion and curiosity. He is genuinely interested in science, although at first, he only knows it as sorcery. Chrome is confident in his intellect, enough so to go toe to toe with Senku despite getting destroyed in a battle of wits',
      photo: 'https://static.wikia.nocookie.net/dr-stone/images/3/3a/Chrome_Anime_Profile.png',
      characterGif: 'https://media1.tenor.com/m/UVDiYc-wzp8AAAAC/starstrails-shatito.gif',
      animeName_id: stone[0]._id
    },
    {
      name: 'Ginro',
      engVoiceActor: 'Justin Briner',
      japVoiceActor: 'Ayumu Murase',
      summary: `Ginro is the coward[10] of the two guard brothers, immediately showcased when he gets visibly more startled than Kinro by Kohaku's threats of attacking them unless they let Senku into the village.[11] Another example being when he considered the possibility of having everyone run away from the village to avoid a fight with the Tsukasa Empire, though after Kohaku points out that only a scum bag would consider it as the elderly and children wouldn't be able to keep up, he claims he didn't think of such an idea. He can be very full of himself and is somewhat selfish, such as when he abruptly decided to try and beat Senku in the village games and take the spot of village chief.`,
      photo: 'https://static.wikia.nocookie.net/dr-stone/images/6/6d/Ginro_Anime_Profile.png',
      characterGif: 'https://media1.tenor.com/m/KV4pusE-ZTAAAAAC/dr-stone-ginro.gif',
      animeName_id: stone[0]._id
    },
    {
      name: 'Goblin Slayer',
      engVoiceActor: 'Brad Hawkins',
      japVoiceActor: 'Yuichiro Umehara',
      summary: `Goblin Slayer is a stoic and calm person who is generally unable to devote himself to the majority of things outside of goblin slaying. Because of this, he lacks the ability to understand certain social norms and doesn't notice the affections of those around him. His companions work to help him overcome this, but the process is difficult and arduous.`,
      photo: 'https://static.wikia.nocookie.net/goblin-slayer/images/0/09/Goblin_Slayer_LN_Profile.png',
      characterGif: 'https://media1.tenor.com/m/0bXnlQfC5PUAAAAC/goblin-slayer-power.gif',
      animeName_id: goblin[0]._id
    },
    {
      name: 'Priestess',
      engVoiceActor: 'Hayden Deviau',
      japVoiceActor: 'Yui Ogura',
      summary: 'Priestess is a kind and empathic person who has no problems making new friends, although she can be rather shy at first. She is always noted by others to be frail and delicate-looking, and is rather prone to shedding tears and going red-faced when troubled; this usually happens whenever Goblin Slayer is being callous. Still, she can and does maintain her assertiveness while tearing up all the same.',
      photo: 'https://static.wikia.nocookie.net/goblin-slayer/images/9/9d/Priestess_Light_Novel_2.png',
      characterGif: 'https://media1.tenor.com/m/l98NGGfa_EcAAAAC/goblin-slayer.gif',
      animeName_id: goblin[0]._id
    },
    {
      name: 'High Elf Archer',
      engVoiceActor: 'Mallorie Rodak',
      japVoiceActor: 'Nao Toyama',
      summary: 'Despite her great age, High Elf Archer is still quite innocent to the darker aspects of the world and has her own ideas about what an adventure involves. Her first quest with Goblin Slayer has her witness the brutal and severely-overlooked cruelty of goblins for the first time, followed by the joyless killing of them with a knife. Still, by the end of that affair, High Elf Archer promised herself to take Goblin Slayer on an adventure suited to her own standards.',
      photo: 'https://static.wikia.nocookie.net/goblin-slayer/images/c/cb/High_Elf_Archer.png',
      characterGif: 'https://media1.tenor.com/m/Y6QdFJXo7dIAAAAC/high-elf-archer-elf.gif',
      animeName_id: goblin[0]._id
    },
    {
      name: 'Izuku Midoriya',
      engVoiceActor: 'Justin Briner',
      japVoiceActor: 'Daiki Yamashita',
      summary: 'Even though Izuku was born Quirkless, he manages to catch the attention of the legendary hero All Might, due to his innate heroism and a strong sense of justice, and has since become his close pupil, as well as a student in Class 1-A at U.A. High School. All Might passed on his transferable Quirk to Izuku, making him the ninth and current holder of One For All.',
      photo: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/d/d9/Izuku_Midoriya_school_profile.png',
      characterGif: 'https://media1.tenor.com/m/ESMuW8DGJwIAAAAC/izuku-midoriya.gif',
      animeName_id: myHero[0]._id
    },
    {
      name: 'Katsuki Bakugo',
      engVoiceActor: 'Clifford Chapin',
      japVoiceActor: 'Nobuhiko Okamoto',
      summary: `Katsuki is a crude, arrogant, short-tempered, and aggressive person, especially at the beginning of the series. Katsuki tends to come off as unheroic; this problematic behavior going all the way back to his early childhood days when he was known to bully a young, Quirkless, Izuku Midoriya. He showed to be extremely arrogant and condescending to those around him, often bragging of his Explosion Quirk's power, and even boasting that he would take on his entire middle school class.`,
      photo: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/8/83/Katsuki_Bakugo_School_Uniform_Full_Body.png',
      characterGif: 'https://media1.tenor.com/m/28viN7ldMQwAAAAd/bakugou-katsuki-bakugou.gif',
      animeName_id: myHero[0]._id
    },
    {
      name: 'Ochaco Uraraka',
      engVoiceActor: 'Luci Christian',
      japVoiceActor: 'Ayane Sakura',
      summary: `Other students have described Ochaco as "the most laid-back girl" in her class, being very bubbly and kind of an airhead sometimes. She is often incredibly blunt without being aware of it. Similar to Izuku Midoriya, Ochaco's reactions tend to be exaggerated and humorous: She often becomes amused at certain personality traits and quirks others exhibit, bursting into laughter at times, which she tries to suppress.`,
      photo: 'https://static.wikia.nocookie.net/bokunoheroacademia/images/6/69/Ochaco_School_Uniform_Full_Body.png',
      characterGif: 'https://media1.tenor.com/m/KMsvPfTY6zUAAAAd/ochaco-uraraka.gif',
      animeName_id: myHero[0]._id
    },
    {
      name: 'Armin Arlert',
      engVoiceActor: 'Jessie James Grelle',
      japVoiceActor: 'Marina Inoue',
      summary: 'Even when he was young, the naturally curious Armin had a deep fascination with the world beyond the Walls. As a child, he found and studied an illegal book about the outside world that was owned by his grandfather. He told Eren Yeager, his best friend, about the book and the information that was contained in it. Armin was branded a heretic by other children for his unusual interest in the outside world, and was thus frequently picked on.',
      photo: 'https://static.wikia.nocookie.net/shingekinokyojin/images/9/93/Armin_Arlelt_%28Anime%29_character_image.png',
      characterGif: 'https://media1.tenor.com/m/RYjfreoMflQAAAAC/attack-on-titan-final-season.gif',
      animeName_id: attack[0]._id
    },
    {
      name: 'Eren Jaeger',
      engVoiceActor: 'Bryce Papenbrook',
      japVoiceActor: 'Yuki Kaji',
      summary: 'Eren was best described as hardheaded, strong-willed, passionate, and impulsive, which were attributes of both his strong determination to protect mankind and eventually escape the Walls. As a young child, he was so intent on joining the Scout Regiment that he argued with and shouted at his mother, referring to the people in the village as "silly" and compared them to complacent livestock.',
      photo: 'https://static.wikia.nocookie.net/shingekinokyojin/images/a/a1/Eren_Jaeger_%28Anime%29_character_image.png',
      characterGif: 'https://media1.tenor.com/m/JWoPBw1dAMkAAAAC/aot-eren-yeager.gif',
      animeName_id: attack[0]._id
    },
    {
      name: 'Mikasa Ackerman',
      engVoiceActor: 'Trina Nishimura',
      japVoiceActor: 'Yui Ishikawa',
      summary: `Prior to her parents' death, Mikasa was a cheerful yet unusually perceptive child. From an early age, she was aware of the harshness of nature, witnessing the manner in which predators would hunt and kill weaker prey. However, her innocence allowed her to push this reality to the back of her mind and she continued to live happily with her parents. This illusory peace was shattered when a band of criminals brutally murdered her parents before her eyes in a failed kidnapping attempt of both Mikasa and her mother.`,
      photo: 'https://static.wikia.nocookie.net/shingekinokyojin/images/4/4f/Mikasa_Ackermann_%28Anime%29_character_image.png',
      characterGif: 'https://media1.tenor.com/m/TwAgLO7ZJwEAAAAd/mikasa-training-mikasa.gif',
      animeName_id: attack[0]._id
    },
    {
      name: 'Frieren',
      engVoiceActor: 'Mallorie Rodak',
      japVoiceActor: 'Atsumi Tanezaki',
      summary: `Frieren has an easy-going personality; however, her aloof attitude makes her a mystery to her peers, with Heiter commenting that they as Humans cannot perceive an Elf's feelings. As an Elf that has lived for at least a millennium, she has a poor sense of time that manifests in a bad habit of being unable to get up in the morning, along with a deeper inability to comprehend how time passes for Humans.`,
      photo: 'https://static.wikia.nocookie.net/frieren/images/3/35/Frieren_anime_profile.png',
      characterGif: 'https://media1.tenor.com/m/qO4_SbfQMkgAAAAC/drinking-tea.gif',
      animeName_id: frieren[0]._id
    },
    {
      name: 'Fern',
      engVoiceActor: 'Jill Harris',
      japVoiceActor: 'Kana Ichinose',
      summary: 'Fern has a mature personality as a result of her upbringing, leading her to often act as the mother of the party. She constantly has to help Frieren perform ordinary tasks such as waking her up due to her being a deep sleeper, feeding her, and dressing her, along with cleaning up her messes. She acts similarly around Stark, such as getting mad when he stays up late, even though they are around the same age.',
      photo: 'https://static.wikia.nocookie.net/frieren/images/3/3a/Fern_anime_profile.png',
      characterGif: 'https://media1.tenor.com/m/csJAKHKrgG4AAAAd/fern-fern-frieren.gif',
      animeName_id: frieren[0]._id
    },
    {
      name: 'Heiter',
      engVoiceActor: 'Jason Douglas',
      japVoiceActor: 'Hiroki Tochi',
      summary: 'Heiter was an outwardly cheerful man who often diffused tense situations with his laughter and jokes about his inclination towards alcohol. He was easily moved to tears, both when things happened to the party or when he was hungover. However, inwardly Heiter was shown to be cynical about their odds of defeating the Demon King. As a child, this manifested in jealousy towards Himmel and he often outwardly expressed his doubts about being able to defeat monsters or eventually defeat the Demon King.',
      photo: 'https://static.wikia.nocookie.net/frieren/images/f/f2/Heiter_anime_profile.png',
      characterGif: 'https://media1.tenor.com/m/C3gXxL6dq9kAAAAd/frieren-beyond-journeys-end.gif',
      animeName_id: frieren[0]._id
    },
    {
      name: 'Rentt Faina',
      engVoiceActor: '',
      japVoiceActor: 'Ryota Suzuki',
      summary: `Rentt's most notable feature and greatest motivator is his life-long dream of becoming a Mithril-class Adventurer, training himself every day for 20 years in order to have the necessary strength to reach that rank. Even in the face of his lack of talent and aptitude he never gave up.`,
      photo: 'https://static.wikia.nocookie.net/the-unwanted-undead-adventurer/images/2/22/Faina_Vampire.png',
      characterGif: 'https://static.wikia.nocookie.net/the-unwanted-undead-adventurer/images/2/22/Faina_Vampire.png',
      animeName_id: unwantedUndead[0]._id
    },
    {
      name: 'Lorraine Vivie',
      engVoiceActor: '',
      japVoiceActor: 'Mikako Komatsu',
      summary: 'Lorraine is young beautiful woman who possesses light blonde hair that reaches to her waist and yellow eyes. She wears a dress that expose her shoulders and the upper part of chest. She wears high heels.',
      photo: 'https://static.wikia.nocookie.net/the-unwanted-undead-adventurer/images/f/fb/Vivie-Manga.png',
      characterGif: 'https://static.wikia.nocookie.net/the-unwanted-undead-adventurer/images/f/fb/Vivie-Manga.png',
      animeName_id: unwantedUndead[0]._id
    },
    {
      name: 'Sheila Ibarss',
      engVoiceActor: '',
      japVoiceActor: 'Ikuma Hasegawa',
      summary: `Five years ago, Sheila Ibarss was appointed as Rentt's supervisor. At first, she disliked the idea of having to dismiss Rentt as an Adventurer, but turns out Rentt was too valuable of an asset for the Guild to lose since his actions in and out of the Guild of coaching new inexperienced Adventurers and foiling ill-natured Adventurers have been invaluable for the general populace of Maalt, and in time she realized that she wasn't assigned to Rentt in order to guide him, but rather it was Rentt that ended up guiding her.`,
      photo: 'https://static.wikia.nocookie.net/the-unwanted-undead-adventurer/images/7/77/Sheila-Manga.png',
      characterGif: 'https://static.wikia.nocookie.net/the-unwanted-undead-adventurer/images/7/77/Sheila-Manga.png',
      animeName_id: unwantedUndead[0]._id
    },
    {
      name: 'Meneldor',
      engVoiceActor: '',
      japVoiceActor: 'Ayumu Murase',
      summary: 'Meneldor is a half-elf with silver hair and jade colour eyes. His elvish features are the cause of his beauty. Which he is quite conscious when others points out his feminine aura especially when they tease him.',
      photo: 'https://static.wikia.nocookie.net/the-faraway-paladin/images/f/f0/Meneldor_%28Light_Novel%29.png',
      characterGif: 'https://static.wikia.nocookie.net/the-faraway-paladin/images/f/f0/Meneldor_%28Light_Novel%29.png',
      animeName_id: faraway[0]._id
    },
    {
      name: 'William G. Maryblood',
      engVoiceActor: '',
      japVoiceActor: 'Maki Kawase',
      summary: 'William had a positive upbringing which caused him to have an earnest, respectable and sympathetic attitude towards others. As a paladin and feudal lord he cares for the well-being of his people and has the urge to help those desperately in need of help.',
      photo: 'https://static.wikia.nocookie.net/the-faraway-paladin/images/1/11/William_%28Light_Novel%29.png',
      characterGif: 'https://static.wikia.nocookie.net/the-faraway-paladin/images/1/11/William_%28Light_Novel%29.png',
      animeName_id: faraway[0]._id
    },
    {
      name: 'Augustus',
      engVoiceActor: '',
      japVoiceActor: 'Nobuo Tobita',
      summary: 'He is harsh and rude to everyone but cherishes his friends and family. Deep down Gus wants nothing but knowledge which lead him to have no attachment to his old body. His pride as a sorcerer tends to overwhelm his sense of humility forcing himself to act like a haughty old man. Because of their contract with Stagnate, he tends to be concerned for his old companions thus forcing him to eliminate any source that would harm their attachment, William is one of those sources.',
      photo: 'https://static.wikia.nocookie.net/the-faraway-paladin/images/7/72/Augustus_%28Light_Novel%29.png',
      characterGif: 'https://static.wikia.nocookie.net/the-faraway-paladin/images/7/72/Augustus_%28Light_Novel%29.png',
      animeName_id: faraway[0]._id
    },
    {
      name: 'Son Goku',
      engVoiceActor: 'Stephanie Nadolny',
      japVoiceActor: 'Masako Nozawa',
      summary: 'Originally as an infant Saiyan, Goku was very timid, constantly crying for attention. Goku was then programmed with intense hostility to carry out his mission of eradicating all sentient life on Earth. When found by Grandpa Gohan, he was unruly, savage, and aggressive, wanting nothing to do with the elder. However, after the head injury that caused him to lose his instinctual aggression, Goku became well-known for the energetic, kindhearted, pure heart and caring personality traits he inherited from his mother Gine.',
      photo: 'https://static.wikia.nocookie.net/dragonball/images/6/61/Son-goku.jpg',
      characterGif: 'https://media1.tenor.com/m/b8dZlh8booYAAAAC/goku-alongando.gif',
      animeName_id: dragonBall[0]._id
    },
    {
      name: 'Bulma',
      engVoiceActor: 'Tiffany Vollmer',
      japVoiceActor: 'Hiromi Tsuru',
      summary: 'Bulma has a temperamental personality while being very tomboyish and girly at the same time. While known for her extreme intellect, Bulma is considerably spoiled and vain, using her great beauty as an excuse for her selfish behavior. Her selfishness prevented her from being able to ride the Flying Nimbus.',
      photo: 'https://static.wikia.nocookie.net/dragonball/images/a/a6/Bulma_anime_profile.png',
      characterGif: 'https://media1.tenor.com/m/w-1WdEA9nb8AAAAd/dragonball-radar.gif',
      animeName_id: dragonBall[0]._id
    },
    {
      name: 'Krillin',
      engVoiceActor: 'Laurie Steele',
      japVoiceActor: 'Mayumi Tanaka',
      summary: `Originally a jealous and selfish person, Krillin did not respect rules when confronted with Roshi's training. After a short arch-rivalry between the two (years later, Krillin even admits that he hated Goku at first), he becomes Goku's best friend, and his selfish and jealous personality becomes more kind-hearted and generous (although he still has slight selfish and jealous traits after his reform). Krillin is often used as comic relief or cannon fodder by the author.`,
      photo: 'https://static.wikia.nocookie.net/dragonball/images/5/54/Krillin_DB_Episode_134.png',
      characterGif: 'https://media1.tenor.com/m/mArDPwKS6RMAAAAC/dragon-ball-goku.gif',
      animeName_id: dragonBall[0]._id
    },
    {
      name: 'Gon Freecss',
      engVoiceActor: 'Erica Mendez',
      japVoiceActor: 'Megumi Han',
      summary: 'Gon is an athletic, rustic, and friendly boy who is searching for adventure. Also, he is not very good at math. However, having spent a lot of time in the woods as a child, he is very good with animals. Gon is an Enhancer, who are known for being simple-minded and determined. This determination and talent lead to both potential allies and potential enemies trusting in him and taking his side.',
      photo: 'https://static.wikia.nocookie.net/hunterxhunter/images/e/e6/Gon_Portrait_HXH_1999_EP62.png',
      characterGif: 'https://media1.tenor.com/m/IOXwPf3BT04AAAAC/gon.gif',
      animeName_id: hunterxhunter[0]._id
    },
    {
      name: 'Killua Zoldyck',
      engVoiceActor: 'Cristina Valenzuela',
      japVoiceActor: 'Mariya Ise',
      summary: `Initially, Killua is introduced as cheeky, cheerful, and full of mischievous ideas. However, his ruthlessness and aptitude in killing show the other side of him—deadly, violent, and bloodthirsty. Conflicting with Killua's predisposal to kill is his unyielding loyalty to his friends and natural kindness. He claims Gon was his first friend, and he grows progressively more attached to him as time passes.`,
      photo: 'https://static.wikia.nocookie.net/naruto-original-stuff/images/a/a6/Killua_Zoldyck.jpg',
      characterGif: 'https://media1.tenor.com/m/pLhhw8tQib0AAAAC/killua-hunter-x-hunter.gif',
      animeName_id: hunterxhunter[0]._id
    },
    {
      name: 'Hisoka Morow',
      engVoiceActor: 'Daisuke Namikawa',
      japVoiceActor: 'Keith Silverstein',
      summary: 'Hisoka is portrayed as entirely self-serving and self-absorbed; he does whatever he likes as long as it pleases him in some way. His insatiable love for spilling the blood of powerful fighters in combat and his enjoyment of extreme pain while doing so fuels his seemingly sadomasochistic desires.',
      photo: 'https://static.wikia.nocookie.net/hunterxhunter/images/4/43/Hisoka_episode_16.PNG',
      characterGif: 'https://media1.tenor.com/m/uhSAIyB-C2QAAAAC/hisoka-hisoka-morow.gif',
      animeName_id: hunterxhunter[0]._id
    },
    {
      name: 'Edward Elric',
      engVoiceActor: 'Vic Mignogna',
      japVoiceActor: 'Romi Park',
      summary: `On the surface, Edward displays an immature sort of personality. He is decidedly stubborn and strong-willed, frequently letting his pettiness and vindictiveness get the better of him (it is this stubbornness that contributes to Führer Bradley's decision to codename him "Fullmetal," as "Hagane" (literally meaning "steel") is a term in Japanese that denotes someone of obstinate disposition.) and often has to be restrained or reprimanded by Al or whoever else is present.`,
      photo: 'https://static.wikia.nocookie.net/fma/images/0/08/213254_1407532169190_full.png',
      characterGif: 'https://media1.tenor.com/m/Vp33X5zVW7YAAAAC/ed.gif',
      animeName_id: fullmetal[0]._id
    },
    {
      name: 'Alphonse Elric',
      engVoiceActor: 'Maxey Whitehead',
      japVoiceActor: 'Rie Kugimiya',
      summary: `In many ways, Alphonse's calm and passive disposition exists as a foil to his older brother's more abrasive personality. Al is kindhearted, notably compassionate and patient almost to a fault, acting often out of protective selflessness for his loved ones, new friends and sometimes even toward his enemies (Scar is a particular example). Having had his psychological growth stunted at the age of ten due to loss of his physical body, Alphonse retains a childlike purity in the face of all his encountered horrors; however, despite his age, he has always displayed a significantly higher level of maturity than Edward.`,
      photo: 'https://static.wikia.nocookie.net/fma/images/5/51/Avatar_alphonse.png',
      characterGif: 'https://media1.tenor.com/m/GbHxywKTXIEAAAAd/fullmetal-alchemist-fullmetal-alchemist-brotherhood.gif',
      animeName_id: fullmetal[0]._id
    },
    {
      name: 'Roy Mustang',
      engVoiceActor: 'Travis Willingham',
      japVoiceActor: `Shin'ichiro Miki`,
      summary: 'On the surface, Roy seems to be a shallow, self-absorbed and an incorrigible womanizer who is infamous among many of his colleagues and subordinates alike for the selfish and narcissistic aura he gives off. Easily as arrogant as his young protégé Edward, Colonel Mustang is one to act in an ostentatious manner and appears to act mostly out of self-interest rather than any sort of philanthropy.',
      photo: 'https://static.wikia.nocookie.net/fma/images/a/a8/Avatar_roy2003.png',
      characterGif: 'https://media1.tenor.com/m/a75aSndVKMwAAAAd/fmab-fma.gif',
      animeName_id: fullmetal[0]._id
    },
    {
      name: 'Yusuke Urameshi',
      engVoiceActor: 'Justin Cook',
      japVoiceActor: 'Nozomu Sasaki',
      summary: `Having a no-show for a father and with his mother always off somewhere else (getting drunk or partying), Yusuke has grown up in a very neglectful environment. He's short-tempered, impulsive, merciless, and likes to intimidate those who are afraid of him. Underneath his bold, cocky attitude, he has a joking and kind nature.`,
      photo: 'https://static.wikia.nocookie.net/yuyuhakusho/images/b/b0/Yusuke_portrait_2_YYH.png',
      characterGif: 'https://media1.tenor.com/m/P8VlcV5cvCwAAAAd/yusuke-urameshi-yu-yu-hakusho.gif',
      animeName_id: yuyu[0]._id
    },
    {
      name: 'Kazuma Kuwabara',
      engVoiceActor: 'Christopher Sabat',
      japVoiceActor: 'Sanae Miyuki',
      summary: `Kuwabara is consistently described as being stupid and ugly. However, he is extremely loyal to his friends and has a very strict code of honor. He would do anything for his friends and for love. He can be clumsy, reckless, rude and is also stubborn, persistent, and also has a great sense of humor. He doesn't give up a fight, even if he is injured.`,
      photo: 'https://static.wikia.nocookie.net/yuyuhakusho/images/5/52/Kuwabara_%282018_OVA%29_1.png',
      characterGif: 'https://media1.tenor.com/m/-gJpWDudSJEAAAAC/kuwabara-mulberry.gif',
      animeName_id: yuyu[0]._id
    },
    {
      name: 'Botan',
      engVoiceActor: 'Cynthia Cranz',
      japVoiceActor: 'Sanae Miyuki',
      summary: `Botan is genuinely helpful and well-meaning, while also somewhat clumsy and short-sighted. She's also bubbly and has a cheery demeanor, while cautiously optimistic, but can also be a bit of a scaredy-cat. She sometimes tends to be a motormouth. She used to view Yusuke as an interesting subject to study until she develops a bond with him, and becomes a valuable ally and close friend.`,
      photo: 'https://static.wikia.nocookie.net/yuyuhakusho/images/6/64/Botan_%282018_OVA%29_1.png',
      characterGif: 'https://media1.tenor.com/m/ycufK90RfGkAAAAC/botan-yu-yu-hakusho.gif',
      animeName_id: yuyu[0]._id
    },
    {
      name: 'Lucy Heartfilla',
      engVoiceActor: 'Cherami Leigh',
      japVoiceActor: 'Aya Hirano',
      summary: 'Lucy takes exceptional pride in her appearance and is very confident in her sex appeal, often exuding a certain amount of vanity.[8] Despite this superficial attitude, she is a clever, kind, and genuinely caring person. Lucy is passionate for literature and is in the process of writing her own novel about her adventures with Fairy Tail although she does not like telling anyone about it. She is a member of the Heartfilia family, once one of the wealthiest and most influential conglomerate families in the country of Fiore.',
      photo: 'https://static.wikia.nocookie.net/fairytail/images/a/a6/Lucy_in_Tartaros_arc.png',
      characterGif: 'https://media1.tenor.com/m/H_5tZfWi8ysAAAAC/lucy-lucy-heartfilia.gif',
      animeName_id: fairyTail[0]._id
    },
    {
      name: 'Natsu Dragneel',
      engVoiceActor: 'Todd Haberkorn',
      japVoiceActor: 'Tetsuya Kakihara',
      summary: 'Natsu is carefree and reckless in nature, and, despite his consistent brawls with the other members of Fairy Tail, he is a fiercely loyal and protective friend. He is willing to go down fighting for his friends, regardless of how futile it might seem. Natsu has a straightforward mind, and often tackles issues with a "hands on" approach. His solution to problems often involve violence.',
      photo: 'https://static.wikia.nocookie.net/fairytail/images/6/66/Natsu_2018.png',
      characterGif: 'https://media1.tenor.com/m/m9ipnIinnLIAAAAC/fairy-tail-natsu-dragneel.gif',
      animeName_id: fairyTail[0]._id
    },
    {
      name: 'Happy',
      engVoiceActor: 'Tia Lynn Ballard',
      japVoiceActor: 'Rie Kugimiya',
      summary: 'Despite his small stature and eccentric appearance, Happy is very loyal to his teammates and fellow guild members and has a fairly significant amount of knowledge of the Magic world, in some cases, more than Lucy and Natsu. Given that he has been around Natsu Dragneel since his own birth, Happy often emulates Natsu in his actions and responses.',
      photo: 'https://static.wikia.nocookie.net/fairytail/images/4/41/Happy_proposal.png',
      characterGif: 'https://media1.tenor.com/m/uUtThvoEvEUAAAAC/fairy-tail-laughing.gif',
      animeName_id: fairyTail[0]._id
    },
    {
      name: 'Mash Burnedead',
      engVoiceActor: 'Aleks Le',
      japVoiceActor: 'Chiaki Kobayashi',
      summary: 'Mash is generally a quiet and kind boy, often displaying little to no emotion and sporting a stoic, dispassionate expression regardless of his circumstances. However, if he sees someone hurting his family or friends, he gets incredibly angry.',
      photo: 'https://static.wikia.nocookie.net/mashle/images/6/6b/Mash_Burnedead_anime_design.png',
      characterGif: 'https://media1.tenor.com/m/qf9W6UaY698AAAAd/mashle-mash.gif',
      animeName_id: mashle[0]._id
    },
    {
      name: 'Finn Ames',
      engVoiceActor: 'Brian Timothy Anderson',
      japVoiceActor: 'Reiji Kawashima',
      summary: `Finn is the Straight Man to the other characters' strange antics. He is a coward who gets frightened very easily. He is extremely loyal to his friends and cares about them deeply. He goes to great lengths for the people he is close to. During the Divine Visionary Selection Exam Arc, Finn endured all of Carpaccio Luo-Yang's attacks so he could protect the crystal that would allow Mash to move forward with the exam.`,
      photo: 'https://static.wikia.nocookie.net/mashle/images/e/eb/Finn_Ames_anime_design.png',
      characterGif: 'https://static.wikia.nocookie.net/mashle/images/e/eb/Finn_Ames_anime_design.png',
      animeName_id: mashle[0]._id
    },
    {
      name: 'Dot Barrett',
      engVoiceActor: 'Ben Diskin',
      japVoiceActor: 'Takuya Eguchi',
      summary: `Dot is hot-blooded and obnoxious, stating that he's the main character, loathing "hot guys", and constantly trying to one-up someone. But deep down, he's a nice guy and will apologize if he's wrong about something. He also is shown to fall in love easily and also is sensitive to getting rejected.`,
      photo: 'https://static.wikia.nocookie.net/mashle/images/d/d0/Dot_Barrett_anime_design.png',
      characterGif: 'https://media1.tenor.com/m/TepBuOFT3CEAAAAC/mashle-slap-dot-barret.gif',
      animeName_id: mashle[0]._id
    },
    {
      name: 'Loid Forger',
      engVoiceActor: 'Alex Organ',
      japVoiceActor: 'Takuya Eguchi',
      summary: `Befitting of a spy, Loid is able to project whatever personality is necessary for his mission, though his true personality is rather cold and methodical, doing whatever it takes to complete the mission, from joining terrorist organizations to dating a target's daughter to becoming a father. He is normally seen to be a calm, aloof, and calculating individual who takes every situation seriously and merely views his approaches as logical means to an end.`,
      photo: 'https://static.wikia.nocookie.net/spy-x-family9171/images/9/9c/Loid_Forger_Colored_Full_Body.png',
      characterGif: 'https://media1.tenor.com/m/VYeaaNXYs2QAAAAC/glare-spy-x-family.gif',
      animeName_id: spyFamily[0]._id
    },
    {
      name: 'Anya Forger',
      engVoiceActor: 'Megan Shipman',
      japVoiceActor: 'Atsumi Tanezaki',
      summary: `As a young child, Anya is very impressionable towards the people around her. For instance, reading Loid's mind and attempting to mimic him, and learning how to punch from Yor. Given her telepathic ability, which ostracized her from people and her many foster homes, she instantly took to "Twilight" for being a real spy. Since being adopted, she wanted to go wherever Loid was going in hopes of seeing the spy stuff she always sees on TV.`,
      photo: 'https://static.wikia.nocookie.net/spy-x-family9171/images/e/ee/Anya_Forger_Manga_Infobox.png',
      characterGif: 'https://media1.tenor.com/m/f_EOn4JhDZUAAAAC/anya-forger-smile.gif',
      animeName_id: spyFamily[0]._id
    },
    {
      name: 'Yor Forger',
      engVoiceActor: 'Natilie Van Sistine',
      japVoiceActor: 'Saori Hayami',
      summary: 'Yor lacks social skills and initially comes across as a somewhat aloof individual, interacting minimally with her co-workers and being rather straightforward, described as robotic by Camilla. Similarly, Yor is remarkably collected and able to keep her composure during combat. She is incredibly polite, to the point of asking her assassination targets for "the honor of taking their lives.',
      photo: 'https://static.wikia.nocookie.net/spy-x-family9171/images/3/34/Yor_Forger_Colored_Full_Body.png',
      characterGif: 'https://media1.tenor.com/m/kaq4MlWBHL4AAAAd/yor-forger-yor-forger-blade-dance.gif',
      animeName_id: spyFamily[0]._id
    },
    {
      name: 'Koro-sensei',
      engVoiceActor: '',
      japVoiceActor: 'Jun Fukuyama',
      summary: `It was revealed that he was raised in an environment "where everybody could easily betray one another to the point that one could only trust oneself". Through these hardships, he decided to become an assassin to survive. Despite gaining an apprentice, he only saw him as a tool for his goals, which drove the latter to finally betray his master.`,
      photo: 'https://static.wikia.nocookie.net/assassinationclassroom/images/c/c5/Koro_sensei_transparent.png',
      characterGif: 'https://media1.tenor.com/m/soOmMBY9CckAAAAC/koro-hungry.gif',
      animeName_id: assassination[0]._id
    },
    {
      name: 'Nagisa Shiota',
      engVoiceActor: '',
      japVoiceActor: 'Mai Fuchigami',
      summary: 'Nagisa is a calm, collected, and friendly individual who can be exceptionally observant and circumspect of his surroundings and the situations that develop around him. He tends to pay strict attention to Korosensei in hopes to understand the motives of the mysterious being and compiles the information he has gathered in his notes for reference.',
      photo: 'https://static.wikia.nocookie.net/assassinationclassroom/images/b/b1/Nagisa_transparent.png',
      characterGif: 'https://media1.tenor.com/m/wjCiYBycSaIAAAAC/assassination-classroom.gif',
      animeName_id: assassination[0]._id
    },
    {
      name: 'Teppei Araki',
      engVoiceActor: '',
      japVoiceActor: 'Jessie James Grelle',
      summary: 'Teppei is not quite as belligerent as Tomoya Seo or Natsuhiko Koyama, but he clearly subscribes to the belief that Class 3-E is inferior to him, expressing great shock when he, Class A or the baseball team loses to them.',
      photo: 'https://static.wikia.nocookie.net/assassinationclassroom/images/4/41/TeppeiAnime.PNG',
      characterGif: 'https://media1.tenor.com/m/VVDqv9uYD8cAAAAC/irina-assassination.gif',
      animeName_id: assassination[0]._id
    },
    {
      name: 'Luciel',
      engVoiceActor: 'Justin Briner',
      japVoiceActor: 'Reiji Kawashima',
      summary: 'Before Luciel died and reincarnated he was in charge of office solutions for a modestly sized company/ a businessman primarily dealing in office automation equipment and had just entered his 30. He had just left his office when he was suddenly shot.',
      photo: 'https://static.wikia.nocookie.net/the-great-cleric/images/2/28/Luciel_anime.png',
      characterGif: 'https://media1.tenor.com/m/DJNXR3U5CjwAAAAC/anime-anime-congratuation.gif',
      animeName_id: greatCleric[0]._id
    },
    {
      name: 'Brod',
      engVoiceActor: 'Chris Guerrero',
      japVoiceActor: 'Shinya Takahashi',
      summary: `He was formerly in an adventuring party with Gulgar and Galba, but they decided that they wanted to foster future generations and took over the Merratoni Adventurer's Guild.`,
      photo: 'https://static.wikia.nocookie.net/the-great-cleric/images/f/fc/Brod_anime.png',
      characterGif: 'https://static.wikia.nocookie.net/the-great-cleric/images/f/fc/Brod_anime.png',
      animeName_id: greatCleric[0]._id
    },
    {
      name: 'Luminalia',
      engVoiceActor: 'Kiane Chula King',
      japVoiceActor: 'Manaka Iwami',
      summary: 'Lumina was born as Luminalia Arcs Francisque second daughter to Earl Francisque of the dukedom of Blanche and a noble as such. She lived a quiet life until she became a paladin at her twelfth birthday and consequently was sent to the church were she learned fighting and eventually took on the name Lumina.',
      photo: 'https://static.wikia.nocookie.net/the-great-cleric/images/4/47/Lumina_anime.png',
      characterGif: 'https://static.wikia.nocookie.net/the-great-cleric/images/4/47/Lumina_anime.png',
      animeName_id: greatCleric[0]._id
    },
    {
      name: 'Maomao',
      engVoiceActor: '',
      japVoiceActor: 'Aoi Yuki',
      summary: 'Having been raised by the esteemed pharmacist Luomen, Maomao is fascinated by poison and herbs, and has a habit of experimenting with them to observe their effects, primarily on her own body. Due to her passionate love of poisons and her enjoyment when consuming them, she is considered strange, creepy, or obsessed by many characters in the series - a trait she shares with many other members of the eccentric and uniquely talented La Clan.',
      photo: 'https://static.wikia.nocookie.net/kusuriya-no-hitorigoto/images/2/26/Maomao_%28Anime%29.png',
      characterGif: 'https://media1.tenor.com/m/oJV57baC9R4AAAAC/the-apothecary-diaries-apothecary-diaries.gif',
      animeName_id: apothecary[0]._id
    },
    {
      name: 'Jinshi',
      engVoiceActor: '',
      japVoiceActor: 'Takeo Otsuka',
      summary: 'While Jinshi appears to be a serene and beautiful eunuch, he possesses a lack of self-confidence. Although he is intelligent and well-built as noted by Maomao, he is neither a great scholar nor a brilliant general, and believes that he pales in comparison to the large shadow that is his brother, the Emperor.',
      photo: 'https://static.wikia.nocookie.net/kusuriya-no-hitorigoto/images/3/33/Jinshi_anime_render.webp',
      characterGif: 'https://media1.tenor.com/m/mRaHJzfq-cYAAAAC/jinshi-yawn-jinshi-tired.gif',
      animeName_id: apothecary[0]._id
    },
    {
      name: 'Gaoshun',
      engVoiceActor: '',
      japVoiceActor: 'Katsuyuki Konishi',
      summary: 'On the outside, Gaoshun appears calm, aloof, and capable; as a high-ranking official, he is intelligent, diligent, and quick on the uptake. He would sometimes show his angry side towards his son when he failed to do his job properly. On the inside, he has a fear of women due to his overly bossy wife.',
      photo: 'https://static.wikia.nocookie.net/kusuriya-no-hitorigoto/images/1/11/Gaoshun_%28Anime%29.png',
      characterGif: 'https://static.wikia.nocookie.net/kusuriya-no-hitorigoto/images/1/11/Gaoshun_%28Anime%29.png',
      animeName_id: apothecary[0]._id
    },
    {
      name: 'Kirito',
      engVoiceActor: 'Bryce Papenbrook',
      japVoiceActor: 'Yoshitsugu Matsuoka',
      summary: 'Kazuto is someone who is not good with words, as stated by Klein, and can be quite direct. This is due to him not having many friends and closing others off because of his love for computers. Thus, he can appear to be rude to others, such as Lisbeth and Sinon. Sometimes, he actually seems to enjoy angering and teasing people as well.',
      photo: 'https://static.wikia.nocookie.net/swordartonline/images/7/7d/Kazuto.png',
      characterGif: 'https://media1.tenor.com/m/r6al4zi2uYgAAAAC/kirito-radit-is-succ.gif',
      animeName_id: swordArt[0]._id
    },
    {
      name: 'Asuna',
      engVoiceActor: 'Cherami Leigh',
      japVoiceActor: 'Haruka Tomatsu',
      summary: `Asuna originally did not care about dying in the game before meeting Kirito. That meeting drastically changed Asuna's personality and outlook on life. She soon takes most things Kirito says to heart and looks to him for help, using him as somewhat of a lifeline.`,
      photo: 'https://static.wikia.nocookie.net/swordartonline/images/0/06/Asuna_with_Yui_Biprobe.png',
      characterGif: 'https://media1.tenor.com/m/8AX-nvqjUHQAAAAC/sao-hits.gif',
      animeName_id: swordArt[0]._id
    },
    {
      name: 'Suguha',
      engVoiceActor: 'Cassandra Lee Morris',
      japVoiceActor: 'Ayana Taketatsu',
      summary: 'Unlike her cousin Kazuto, Suguha is upbeat and outgoing. She is much more social and converses easily with others. Even when Kazuto began to push her away after finding out they were not really siblings, she still treated him with good spirit and tried to get back in his life. She can be very aggressive towards those that annoy her or cross her and can easily lose her temper.',
      photo: 'https://static.wikia.nocookie.net/swordartonline/images/3/3c/Leafa_PA.png',
      characterGif: 'https://media1.tenor.com/m/OWWxfekFJXsAAAAd/sao.gif',
      animeName_id: swordArt[0]._id
    },
    {
      name: 'Kaneki Ken',
      engVoiceActor: 'Austin Tindle',
      japVoiceActor: 'Natsuki Hanae',
      summary: 'Kaneki was a shy and reserved person, with Hide being his only close friend. He usually spent most of his time reading books, mostly novels. He was extremely gentle and appeared to be optimistic most of the time. Influenced by his mother and a true testament of modesty, he willingly took blame and punishment from others so that he can be someone who does not hurt people, but rather absorb the torment.',
      photo: 'https://static.wikia.nocookie.net/tokyoghoul/images/c/c7/Kaneki%27s_Mask.png',
      characterGif: 'https://media1.tenor.com/m/E38FJz3vSykAAAAd/tokyo-ghoul-ken-kaneki.gif',
      animeName_id: tokyoGhoul[0]._id
    },
    {
      name: 'Touka Kirishima',
      engVoiceActor: 'Brina Palencia',
      japVoiceActor: 'Sora Amamiya',
      summary: `Touka's personality is initially defined by her duality between rage and kindness, with her character arc centred around that rage fading as well as her kindness coming to the fore. She is inherently kind, but this was repressed due to her losing her father and thus having to survive in the ghoul world from an early age, which required her to be ruthless.`,
      photo: 'https://static.wikia.nocookie.net/tokyoghoul/images/4/4a/Touka%27s_appearance_in_the_re_anime.jpg',
      characterGif: 'https://media1.tenor.com/m/kIpELgctj-EAAAAC/touka-kirishima-anime.gif',
      animeName_id: tokyoGhoul[0]._id
    },
    {
      name: 'Yoshimura',
      engVoiceActor: 'Sean Hennigan',
      japVoiceActor: '',
      summary: `A kind and generous old man, the manager shows that he is both wise and reasonable even among the ghouls. People like Nishiki Nishio often question his motives on how and why it is that he has come to be a solemn peacemaker in the 20th ward, but he is nonetheless reliable and great for those who serve him. As head of his organization Anteiku, he is not afraid to assert his authority, but his demands are mostly agreeable to Anteiku's members.`,
      photo: 'https://static.wikia.nocookie.net/tokyoghoul/images/f/f2/Yoshimura_anime_design_front_view.png',
      characterGif: 'https://media1.tenor.com/m/9ibbh9G_L-IAAAAd/kuzen-yoshimura-tokyo-ghoul.gif',
      animeName_id: tokyoGhoul[0]._id
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