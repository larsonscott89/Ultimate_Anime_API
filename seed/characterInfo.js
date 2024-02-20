const db = require('../db')
const CharacterInfo = require('../models/characterInfo')
const AnimeName = require('../models/animeName')

db.on('error', (error) => {
  console.error('MogoDB connection error:', error);
})

const main = async () => {

  const blackClover = await AnimeName.find({name: 'Black Clover'})
  const jujutsuKaisen = await AnimeName.find({name: 'Jujutsu Kaisen'})
  const onePiece = await AnimeName.find({name: 'One Piece'})

  const characterInfo = [
    {
      name: 'Asta',
      engVoiceActor: 'Dallas Reid',
      japVoiceActor: 'Gakuto Kajiwara',
      summary: 'Asta is a fictional character and the main protagonist of the manga series Black Clover created by Yūki Tabata. A peasant orphan who was left at a church, he aspires to become the next Wizard King.',
      characterGif: 'https://www.funimation.com/shows/black-clover/not-in-the-slightest/?qid=None',
      animeName_id: blackClover[0]._id
    },
    {
      name: 'Noelle Silva',
      engVoiceActor: 'Jill Harris',
      japVoiceActor: 'Kana Yuki',
      summary: 'Noelle Silva is a fictional character of the manga series Black Clover created by Yūki Tabata. A Magic Knight in the Black Bulls, she is a royal of the Clover Kingdom and daughter of the House of Silva who joins the squad alongside Asta.',
      characterGif: 'https://media1.tenor.com/m/dmMn5pvWi_wAAAAd/noelle-bc.gif',
      animeName_id: blackClover[0]._id
    },
    {
      name: 'Yami Sukehiro',
      engVoiceActor: 'Christopher Sabat',
      japVoiceActor: `Jun'ichi Suwabe`,
      summary: 'Yami Sukehiro is a fictional character of the manga series Black Clover created by Yūki Tabata. Nicknamed the "Lord of Destruction", he is the captain of the Black Bulls, considered the worst Magic Knight Squad, and recruits Asta. Yami is physically strong and intimidating, threatening anyone who annoys him.',
      characterGif: 'https://www.funimation.com/shows/black-clover/the-light-of-judgment/simulcast/?lang=english',
      animeName_id: blackClover[0]._id
    },
    {
      name: 'Yuji Itadori',
      engVoiceActor: 'Adam McArthur',
      japVoiceActor: `Junya Enoki`,
      summary: 'Yuji Itadori is a fictional character and the main protagonist of the manga series Jujutsu Kaisen created by Gege Akutami.',
      characterGif: 'https://media1.tenor.com/m/iwXHwlY31ecAAAAC/yuji-itadori-suku.gif',
      animeName_id: jujutsuKaisen[0]._id
    },
    {
      name: 'Satoru Gojo',
      engVoiceActor: 'Kaiji Tang',
      japVoiceActor: `Yuichi Nakamura`,
      summary: `Satoru Gojo is a fictional character from Gege Akutami's manga Jujutsu Kaisen. He was first introduced in Akutami's short series Tokyo Metropolitan Curse Technical School as the mentor of the cursed teenager Yuta Okkotsu at Tokyo Prefectural Jujutsu High School.`,
      characterGif: 'https://media1.tenor.com/m/aXjsDEqdersAAAAC/gojo-satoru-gojo.gif',
      animeName_id: jujutsuKaisen[0]._id
    },
    {
      name: 'Megumi Fushiguro',
      engVoiceActor: 'Robbie Daymond',
      japVoiceActor: `Yuma Uchida`,
      summary: 'Megumi is a relatively tall, slim young man with fair skin and green eyes (dark blue in the anime adaptation). He has uniquely styled black hair with long spikes that jut out in every direction around his head, resembling a sea-urchin',
      characterGif: 'https://media1.tenor.com/m/OLhUrratPTIAAAAC/yameda-fushiguro-megumi.gif',
      animeName_id: jujutsuKaisen[0]._id
    },
    {
      name: 'Monkey D. Luffy',
      engVoiceActor: 'Colleen Clinkenbeard',
      japVoiceActor: `Mayumi Tanaka`,
      summary: `Monkey D. Luffy, also known as "Straw Hat Luffy" and commonly as "Straw Hat", is the founder and captain of the increasingly infamous and powerful Straw Hat Pirates, as well as the most powerful of its top fighters. He desires to find the legendary treasure left behind by the late Gol D. Roger and thereby become the Pirate King, which would help facilitate an unknown dream of his that he has told only to Shanks, his brothers, and crew. He believes that being the Pirate King means having the most freedom in the world.`,
      characterGif: 'https://media1.tenor.com/m/6ZhzHHYyNxoAAAAC/luffy.gif',
      animeName_id: onePiece[0]._id
    },
    {
      name: 'Roronoa Zoro',
      engVoiceActor: 'Tony Black',
      japVoiceActor: `Kazuya Nakai`,
      summary: `Roronoa Zoro, also known as "Pirate Hunter" Zoro, is a main combatant of the Straw Hat Pirates, one of their two swordsmen, one of the Senior Officers of the Straw Hat Grand Fleet, and is publicly recognized as the right-hand man of his crew's captain Monkey D. Luffy. Formerly a bounty hunter, he is the second member of Luffy's crew and the first to join it, doing so in the Romance Dawn Arc.`,
      characterGif: 'https://media1.tenor.com/m/cOhgxKZrGqQAAAAC/zoro-one-piece.gif',
      animeName_id: onePiece[0]._id
    },
    {
      name: 'Nami',
      engVoiceActor: 'Luci Christian',
      japVoiceActor: `Akemi Okamura`,
      summary: `"Cat Burglar" Nami is the navigator of the Straw Hat Pirates and one of the Senior Officers of the Straw Hat Grand Fleet. She is the third member of the crew and the second to join, doing so during the Orange Town Arc. She is the adoptive sister of Nojiko after the two were orphaned and taken in by Bell-mère.`,
      characterGif: 'https://media1.tenor.com/m/Df_o7ebo1IYAAAAC/nami-dinheiro.gif',
      animeName_id: onePiece[0]._id
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