/**
   * Made By Fandyyy 🕴️
   * No Enc 100% Chat wa.me/6281540022632
*/

//Module 
require('../settings')
const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, DisconnectReason } = require('@adiwajshing/baileys')
const axios = require('axios')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { fromBuffer } = require('file-type')
const fs = require('fs')
const promises = require('fs')
const FormData = require("form-data")
const moment = require('moment-timezone')
const util = require('util')
const path = require('path')
const os = require('os')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const qrcode = require('qrcode')
const similarity = require('similarity')
const linkpreview = require('link-preview-js')
const toms = require('ms')
const zrapi = require('zrapi')

//Waktu
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
const hour_now = moment().format('HH:mm:ss') 

//Lib
const { pinterest, wallpaper, wikimedia, quotesAnime } = require('../lib/scraper')
const { bytesToSize, TelegraPh, UploadFileUgu, webp2mp4File} = require('../lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, await, sleep, clockString, msToDate, sort, toNumber, enumGetKey, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom, pickRandom, removeEmojis } = require('../lib/myfunc')
const { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('../lib/respon-list')

//database
const db_respon_list = JSON.parse(fs.readFileSync('./storage/list-message.json'))
const _family100 = db.data.game.family100 = []
const tebakkata = db.data.game.tebakkata = []
const tebakkalimat = db.data.game.tebakkalimat = []
const tebaklirik = db.data.game.tebaklirik = []
const tebakgambar = db.data.game.tebakgambar = []
const siapakahaku = db.data.game.siapakahaku = []
const caklontong = db.data.game.caklontong = []
const caklontong_desk = db.data.game.caklontong_desk = []

//DB
const dbog = require('../lib/Database.js')
const dbmesseg = new dbog()
var dbs = []
global.dbchatpesan = dbs

//Module Exports
module.exports = ichi = async(ichi, m, chatUpdate, store) => {
try {

msg = m
dbs.push({
	id: msg.key.id,
	msg
});

var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = ichi.user.id ? ichi.user.id.split(":")[0]+"@s.whatsapp.net" : ichi.user.id
const isOwner = [ichi.user.id, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == ichi.user.id ? true : false
const text = q = args.join(" ")
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const from = m.key.remoteJid
const { type, quotedMsg, mentioned, now, fromMe } = m
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const mode = 'public'
const jam = moment().format("HH:mm:ss z")

const isGroup = m.key.remoteJid.endsWith('@g.us')
const groupMetadata = m.isGroup ? await ichi.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const groupDesk = m.isGroup ? groupMetadata.desk : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
const isNumber = x => typeof x === 'number' && !isNaN(x)

const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isSticker = (type == 'stickerMessage')
const isQuotedMsg = (type == 'extendedTextMessage')
const isQuotedImage = isQuotedMsg ? content.includes('imageMessage') ? true : false : false
const isQuotedAudio = isQuotedMsg ? content.includes('audioMessage') ? true : false : false
const isQuotedDocument = isQuotedMsg ? content.includes('documentMessage') ? true : false : false
const isQuotedVideo = isQuotedMsg ? content.includes('videoMessage') ? true : false : false
const isQuotedSticker = isQuotedMsg ? content.includes('stickerMessage') ? true : false : false

var tipsz = [tips1, tips2, tips3, tips4, tips5]
var tips = tipsz[Math.floor(Math.random() * tipsz.length)]
var quote = [quotes1, quotes2, quotes3]
var quotes = quote[Math.floor(Math.random() * quote.length)]

try {
let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('antilink' in chats)) chats.antilink = false
if (!('antiwame' in chats)) chats.antiwame = false
if (!('antivirtex' in chats)) chats.antivirtex = false
if (!('antiasing' in chats)) chats.antiasing = false
if (!('antiviewone' in chats)) chats.antiviewone = false
if (!('event' in chats)) chats.event = false
if (!('nsfw' in chats)) chats.nsfw = false
if (!('expired' in chats)) chats.sewa = 0
if (!('isBanned' in chats)) chats.isBanned = false
if (!('closegc' in chats)) chats.closegc = 0
if (!('autokesal' in chats)) chats.autokesal = false

} else global.db.data.chats[m.chat] = {
antilink: false,
antiwame: false,
antivirtex: false,
antiasing: false,
antiviewone: false,
nsfw: false,
expired: 0,
isBanned: false,
closegc: 0,
autokesal: false,

}

let limitUser = isOwner? global.limitAwal.prem : global.limitAwal.free
let users = global.db.data.users[m.sender]
if (typeof users !== 'object') global.db.data.users[m.sender] = {}
if (users) {
if (!('limit' in users)) users.limit = limitUser

if (!('registered' in users)) users.registered = false
if (!users.registered) {
 if (!('name' in users)) users.name = m.name
 if (!('age' in users)) users.age = -1
 if (!('regTime' in users)) users.regTime = -1
}

if (!('premium' in users)) users.premium = false
if (!('premiumTime' in users)) users.premiumTime = 0
if (!('role' in users)) users.role = 'Beginner'
if (!('banned' in users)) users.banned = false
if (!('autolevelup' in users)) users.autolevelup = true
if (!('atm' in users)) users.atm = 0
if (!('fullatm' in users)) users.fullatm = 0
if (!('bank' in users)) users.bank = 0

if (!('armor' in users)) users.armor = 0
if (!('health' in users)) users.health = 100
if (!('money' in users)) users.money = 0
if (!('exp' in users)) users.exp = 0
if (!('level' in users)) users.level = 0
if (!('potion' in users)) users.potion = 0
if (!('kayu' in users)) users.kayu = 0
if (!('batu' in users)) users.batu = 0
if (!('iron' in users)) users.iron = 0
if (!('potion' in users)) users.potion = 0
if (!('diamond' in users)) users.diamond = 0
if (!('sampah' in users)) users.sampah = 0
if (!('sword' in users)) users.sword = 0
if (!('budak' in users)) users.budak = 0
if (!('busur' in users)) users.busur = 0
if (!('panah' in users)) users.panah = 0
if (!('kapak' in users)) users.kapak = 0

if (!('fox' in users)) users.fox = 0
if (!('foxExp' in users)) users.foxExp = 0
if (!('foxLastFeed' in users)) users.foxLastFeed = 0
if (!('cat' in users)) users.cat = 0
if (!('catExp' in users)) users.catExp = 0
if (!('catLastFeed' in users)) users.catLastFeed = 0
if (!('dog' in users)) users.dog = 0
if (!('dogExp' in users)) users.dogExp = 0
if (!('dogLastFeed' in users)) users.dogLastFeed = 0
if (!('horse' in users)) users.horse = 0
if (!('horseExp' in users)) users.horseExp = 0
if (!('horseLastFeed' in users)) users.horseLastFeed = 0
if (!('petFood' in users)) users.petFood = 0
if (!('fishingroddurability' in users)) users.fishingroddurability = 0

if (!('common' in users)) users.common = 0
if (!('uncommon' in users)) users.uncommon = 0
if (!('mythic' in users)) users.mythic = 0
if (!('legendary' in users)) users.legendary = 0
if (!('pet' in users)) users.pet = 0

if (!('lastfishing' in users)) users.lastfishing = 0
if (!('lastday' in users)) users.lastday = 0
if (!('lastweekly' in users)) users.lastweekly = 0
if (!('lastmonthly' in users)) users.lastmonthly = 0
if (!('lastgajian' in users)) users.lastgajian = 0
if (!('lastmining' in users)) users.lastmining = 0
if (!('lastadventure' in users)) users.lastadventure = 0
if (!('lastbansos' in users)) users.lastbansos = 0
if (!('lastnebang' in users)) users.lastnebang = 0
if (!('lastdagang' in users)) users.lastdagang = 0
} else global.db.data.users[m.sender] = {
limit: limitUser,

registered: false,
name: m.name,
age: -1,
regTime: -1,

premium: false,
premiumTime: 0,
role: 'Beginner',
banned: false,
autolevelup: true,
atm: 0,
fullatm: 0,
bank: 0,

armor: 0,
health: 100,
money: 0,
exp: 0,
level: 0,
potion: 0,
kayu: 0,
batu: 0,
iron: 0,
potion: 0,
diamond: 0,
sampah: 0,
sword: 0,
budak: 0,
busur: 0,
panah: 0,
kapak: 0,

fox: 0,
foxExp: 0,
foxLastFeed: 0,
cat: 0,
catExp: 0,
catLastFeed: 0,
dog: 0,
dogExp: 0,
dogLastFeed: 0,
horse: 0,
horseExp: 0,
horseLastFeed: 0,
fishingroddurability: 0,

common: 0,
uncommon: 0,
mythic: 0,
legendary: 0,
pet: 0,

lastfishing: 0,
lastday: 0,
lastweekly: 0,
lastmonthly: 0,
lastgajian: 0,
lastmining: 0,
lastadventure: 0,
lastbansos: 0,
lastnebang: 0,
lastdagang: 0
}

let settings = global.db.data.settings[botNumber]
if (typeof settings !== 'object') global.db.data.settings[botNumber] = {}
if (settings) {
if (!('anticall' in settings)) settings.anticall = false
if (!('autoreact' in settings)) settings.autoreact = false
if (!('autobio' in settings)) settings.autobio = false
if (!('autosticker' in settings)) settings.autosticker = false
if (!('autobackup' in settings)) settings.autobackup = global.autobackup
if (!('autoread' in settings)) settings.autoread = global.autoread
if (!('autotyping' in settings)) settings.autotyping = global.autotyping
if (!('available' in settings)) settings.available = global.available
if (!('simi' in settings)) settings.simi = false
if (!('autodownload' in settings)) settings.autodownload = false
if (!('autolevelup' in settings)) settings.autolevelup = global.autolevelup
if (!('templateImage' in settings)) settings.templateImage = false
if (!('listMessage' in settings)) settings.listMessage = false
if (!('templateVideo' in settings)) settings.templateVideo = false
if (!('templateDocument' in settings)) settings.templateDocument = true

} else global.db.data.settings[botNumber] = {
anticall: false,
autoreact: false,
autobio: false,
autosticker: false,
autobackup: global.autobackup,
autoread: global.autoread,
autotyping: global.autotyping,
available: global.available,
simi: false,
autodownload: false,
autolevelup: global.autolevelup,
templateImage: false,
listMessage: false,
templateVideo: false,
templateDocument: true
}

} catch (err) {
console.error(err)
}

//Jangan Dihapus
const isPrem = isOwner || global.db.data.users[m.sender].premium || false
var cron = require('node-cron')
 cron.schedule('21 09 * * *', () => {
 var user = Object.keys(global.db.data.users)
 let limitUser = isPrem? global.limitAwal.prem : global.limitAwal.free
 for (let jid of user) global.db.data.users[jid].limit = limitUser
 console.log('Reseted Limit')
 }, {
 scheduled: true,
 timezone: "Asia/Jakarta"
 })

//Auto Backup
if (db.data.settings[botNumber].autobackup) {
  var cron = require('node-cron')
  cron.schedule('21 09 * * *', () => {
  var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: '𝙳 𝙰 𝚃 𝙰 𝙱 𝙰 𝚂 𝙴', jpegThumbnail: global.thumb, }}}
  var d = new Date
  var date = d.toLocaleDateString('id', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
  ichi.sendMessage(global.Rowner + '@s.whatsapp.net', { text: `*🗓️ Database & Session :* ${date}` }, { quoted : m })
  ichi.sendMessage(global.Rowner + '@s.whatsapp.net', {document: fs.readFileSync('./storage/db.json'), mimetype: 'application/json', fileName: `db.json`}, { quoted : fdoc })
  ichi.sendMessage(global.Rowner + '@s.whatsapp.net', {document: fs.readFileSync(`./${global.sessionName}.json`), mimetype: 'application/json', fileName: `${global.sessionName}.json`}, { quoted : fdoc })
  }, {
  schedule: true,
  timezone: "Asia/Jakarta"
  })
  }

// Antilink
if (db.data.chats[m.chat].antilink) {
if (budy.match(`https:\/\/chat.whatsapp.com`)) {
m.reply(`Link Grup Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
if (!isBotAdmins) return m.reply(mess.botAdmin)
var gclink = (`https://chat.whatsapp.com/`+await ichi.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return m.reply(`Ehh Maaf Gak Jadi, Link Group Ini Ternyata 😆`)
if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
if (isOwner) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
ichi.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

// Antiwame
if (db.data.chats[m.chat].antiwame) {
if (budy.match(`https:\/\/wa.me/`)) {
m.reply(`Link wa.me Lain Terdeteksi 🤬\nMaaf Kamu Akan Di Kick !`)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (isAdmins) return m.reply(`Ehh Maaf Ternyata Kamu Admin 😁`)
if (isOwner) return m.reply(`Ehh Maaf Kamu Ownerku Ternyata 😅`)
ichi.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

//Antivirtex
if (db.data.chats[m.chat].antivirtex) {
if (budy.length > 3500) {
m.reply('Tandai telah dibaca\n'.repeat(300))
m.reply(`Virtex Terdeteksi 🐞\nMaaf Kamu Akan Di Kick !`)
if (!isBotAdmins) return m.reply(mess.botAdmin)
ichi.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}
}

if (db.data.settings[botNumber].anticall) {
ichi.ws.on('CB:call', async (json) => {
const callerId = json.content[0].attrs['call-creator']
if (json.content[0].tag == 'offer') {
var pa7rick = await ichi.sendContact(callerId, global.ownerNumber)
ichi.sendMessage(callerId, { text: `Sistem otomatis block!\nJangan menelpon bot!\nSilahkan Hubungi Owner Untuk Dibuka !`}, { quoted : pa7rick })
await sleep(8000)
await ichi.updateBlockStatus(callerId, "block")
}
})
}
  
//Auto Bio
if (db.data.settings[botNumber].autobio){
await ichi.setStatus(`${global.packname} || Created By ${global.ownerName} || ⌚ Runtime : ${runtime(process.uptime())}`);
}

if (db.data.chats[m.chat].antiviewone) {
if (m.isGroup && m.mtype == 'viewOnceMessage') {
let teks = `「 *Anti ViewOnce Message* 」
    
    🤠 *Name* : ${pushname}
    👾 *User* : @${m.sender.split("@")[0]}
    ⏰ *Clock* : ${moment.tz('Asia/Jakarta').format('HH:mm:ss')} WIB
    
    💫 *MessageType* : ${m.mtype}`
m.reply(teks)
await sleep(500)
m.copyNForward(m.chat, true, {
readViewOnce: true
}, {
quoted: mek
}).catch(_ => m.reply('Mungkin dah pernah dibuka bot'))
}
}

function msToDate(ms) {
    temp = ms
    days = Math.floor(ms / (24 * 60 * 60 * 1000));
    daysms = ms % (24 * 60 * 60 * 1000);
    hours = Math.floor((daysms) / (60 * 60 * 1000));
    hoursms = ms % (60 * 60 * 1000);
    minutes = Math.floor((hoursms) / (60 * 1000));
    minutesms = ms % (60 * 1000);
    sec = Math.floor((minutesms) / (1000));
    return days + " hari " + hours + " jam " + minutes + " menit";
    // +minutes+":"+sec;
}

if (mode == 'self') {
if (!m.key.fromMe && !isOwner) return
}

//Push Message To Console
if (m.message) {
global.db.data.users[m.sender].exp += 10
console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m ICHI \x1b[1;37m]', time, chalk.green(budy || m.mtype), 'Dari', chalk.blue(pushname), 'Di', chalk.yellow(groupName ? groupName : 'Private Chat' ), 'args :', chalk.white(args.length))
}

//Bot Setting Atur Di Settings.js
if (db.data.settings[botNumber].autoread) { if (m.chat) { ichi.readMessages([m.key]) }}
if (db.data.settings[botNumber].autotyping) { if (m.chat) { ichi.sendPresenceUpdate('composing', m.chat) }}
if (db.data.settings[botNumber].available) { if (m.chat) { ichi.sendPresenceUpdate('available', m.chat) }}

//Role From DOTA 2
var roles = {
  'Herald V': 0,
  'Herald V': 5,
  'Herald IV': 10,
  'Herald III': 15,
  'Herald II': 20,
  'Herald I': 25,
  'Guardian V': 30,
  'Guardian IV': 35,
  'Guardian III': 40,
  'Guardian II': 45,
  'Guardian I': 50,
  'Crusader V': 55,
  'Crusader IV': 60,
  'Crusader III': 65,
  'Crusader II': 70,
  'Crusader I': 75,
  'Archon V': 80,
  'Archon IV': 85,
  'Archon III': 90,
  'Archon II': 95,
  'Archon I': 100,
  'Legend V': 105,
  'Legend IV': 110,
  'Legend III': 115,
  'Legend II': 120,
  'Legend I': 125,
  'Ancient V': 130,
  'Ancient IV': 135,
  'Ancient III': 140,
  'Ancient II': 145,
  'Ancient I': 150,
  'Divine V': 155,
  'Divine IV': 160,
  'Divine III': 165,
  'Divine II': 170,
  'Divine I': 175,
  'Immortal V': 180,
  'Immortal IV': 185,
  'Immortal III': 190,
  'Immortal II': 195,
  'Immortal I': 200,
  'Glory': 250
}
var user = global.db.data.users[m.sender]
var level = user.level
var role = (Object.entries(roles).sort((a, b) => b[1] - a[1]).find(([,minLevel]) => level >= minLevel) || Object.entries(roles)[0])[0]
user.role = role

//Jangan Di Ubah Biar Tampilan Menu nya keren
var menuu = `Hai *${pushname}* 👋

*${emot.limit} Limit :* ${isOwner? `${global.limitAwal.prem} Limit` : user.premium? `${global.limitAwal.prem} Limit` : `${user.limit}/${global.limitAwal.free}`}
*${emot.money} Money :* ${global.db.data.users[m.sender].money}
*${emot.exp} Exp :* ${global.db.data.users[m.sender].exp}
*${emot.level}️ Level :* ${global.db.data.users[m.sender].level}
*${emot.role} Role :* ${global.db.data.users[m.sender].role}

${readmore} *🍒 Tips :* ${tips}\n
`
var menu = `Hai *${pushname}* 👋

*${emot.limit} Limit :* ${isOwner? `${global.limitAwal.prem} Limit` : user.premium? `${global.limitAwal.prem} Limit` : `${user.limit}/${global.limitAwal.free}`}
*${emot.money} Money :* ${global.db.data.users[m.sender].money}
*${emot.exp} Exp :* ${global.db.data.users[m.sender].exp}
*${emot.level}️ Level :* ${global.db.data.users[m.sender].level}
*${emot.role} Role :* ${global.db.data.users[m.sender].role}

*📚 Quotes:* ${quotes}\n
`

//function leveling & pick
function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}
function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
  }
  else return a => a === undefined ? _default : a
}
function enumGetKey(a) {
  return a.jid
}
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}
const growth = Math.pow(Math.PI / Math.E, 1.618) * Math.E * .75
function xpRange(level, multiplier = global.multiplier || 1) {
  if (level < 0)
  throw new TypeError('level cannot be negative value')
  level = Math.floor(level)
  let min = level === 0 ? 0 : Math.round(Math.pow(level, growth) * multiplier) + 1
  let max = Math.round(Math.pow(++level, growth) * multiplier)
  return {
  min,
  max,
  xp: max - min
  }
  }
function findLevel(xp, multiplier = global.multiplier || 1) {
  if (xp === Infinity)
  return Infinity
  if (isNaN(xp))
  return NaN
  if (xp <= 0)
  return -1
  let level = 0
  do
  level++
  while (xpRange(level, multiplier).min <= xp)
  return --level
  }
function canLevelUp(level, xp, multiplier = global.multiplier || 1) {
  if (level < 0)
  return false
  if (xp === Infinity)
  return true
  if (isNaN(xp))
  return false
  if (xp <= 0)
  return false
  return level < findLevel(xp, multiplier)
  }
function mentions(teks, mems = [], id) {
  if (id == null || id == undefined || id == false) {
  let res = ichi.sendMessage(from, { text: teks, mentions: mems })
  return res
  } else {
  let res = ichi.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
  return res
  }
  }
function MeNit(ms) {
  let m = isNaN(ms) ? '02' : Math.floor(ms / 60000) % 60
  return [m].map(v => v.toString().padStart(2, 0)).join(':')
  }
function DeTik(ms) {
  let s = isNaN(ms) ? '60' : Math.floor(ms / 1000) % 60
  return [s].map(v => v.toString().padStart(2, 0)).join(':')
  }

const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}

//Auto Respon
  let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
  let isSalam = reg.exec(m.text)
  if (isSalam && !m.fromMe) {
  m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
  }

//Game
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebakkalimat[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  global.db.data.users[m.sender].exp += 4999
  await ichi.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `*🥂 Benar!*\n🎁 : +4999 XP`, global.ownerName, m)
  delete tebakkalimat[m.sender.split('@')[0]]
  } else m.reply('*Jawaban Salah!*')
  }
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebaklirik[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  global.db.data.users[m.sender].exp += 4999
  await ichi.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `*🥂 Benar!*\n🎁 : +4999 XP`, global.ownerName, m)
  delete tebaklirik[m.sender.split('@')[0]]
  } else m.reply('*Jawaban Salah!*')
  }
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = tebakgambar[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  global.db.data.users[m.sender].exp += 4999
  await ichi.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `*🥂 Benar!*\n🎁 : +4999 XP`, global.ownerName, m)
  delete tebakgambar[m.sender.split('@')[0]]
  } else m.reply('*Jawaban Salah!*')
  }
if (siapakahaku.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = siapakahaku[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  global.db.data.users[m.sender].exp += 4999
  await ichi.sendButtonText(m.chat, [{ buttonId: 'siapakahaku', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `*🥂 Benar!*\n🎁 : +4999 XP`, global.ownerName, m)
  delete siapakahaku[m.sender.split('@')[0]]
  } else m.reply('*Jawaban Salah!*')
  }
if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
  kuis = true
  jawaban = caklontong[m.sender.split('@')[0]]
  if (budy.toLowerCase() == jawaban) {
  global.db.data.users[m.sender].exp += 4999
  await ichi.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `*🥂 Benar!*\n🎁 : +4999 XP`, global.ownerName, m)
  delete caklontong[m.sender.split('@')[0]]
  } else m.reply('*Jawaban Salah!*')
  }

//Jangan Di Hapus Yee Ntar Emror
(function(_0x2c7537,_0x40f315){function _0xc827ef(_0x120d86,_0x5727de,_0x16f9c2,_0x28b28a,_0x561ccc){return _0x3a8e(_0x16f9c2- -0x3a7,_0x120d86);}var _0x35e9f3=_0x2c7537();function _0x4a9a6f(_0x4e30e6,_0x14b3a4,_0x25a29c,_0x1d0417,_0x3403e9){return _0x3a8e(_0x14b3a4-0x23c,_0x1d0417);}function _0x1687e4(_0x199e50,_0x577d4c,_0x43af3d,_0x17e564,_0x23e3bc){return _0x3a8e(_0x43af3d-0x325,_0x199e50);}function _0x176658(_0x54db80,_0xeb2848,_0x3be93f,_0x5da8c0,_0x335cfa){return _0x3a8e(_0x5da8c0- -0x61,_0x3be93f);}function _0x33b0a5(_0xcacb24,_0x14f8ce,_0x28521f,_0x5dd88b,_0x1d6297){return _0x3a8e(_0x28521f-0x302,_0x14f8ce);}while(!![]){try{var _0x11166a=-parseInt(_0x176658(0x35a,0x1c4,'*epw',0x2a5,0x2e6))/(0x80e+0xdaa+-0x15b7)+parseInt(_0x176658(0x221,0x2cb,'EgcP',0x3a7,0x501))/(0xa*-0x278+0x78e+0x1124)+-parseInt(_0x176658(0x1e6,0x29e,'(qgE',0x350,0x302))/(-0x81+0x43c+0x4*-0xee)+-parseInt(_0xc827ef('!*b$',0x282,0x11b,0x64,0x80))/(0x19c1+-0xdb+-0x18e2)*(-parseInt(_0x33b0a5(0x930,'cHV9',0x7b8,0x6d7,0x66a))/(-0x1*0x1e08+-0x3*0x3a+0x1ebb))+parseInt(_0x176658(0x3c1,0x401,'2@MB',0x307,0x1ed))/(-0x915+0x5ea+-0x2b*-0x13)*(-parseInt(_0x176658(0x145,0x2e1,'N$a7',0x286,0x150))/(-0x19c2+-0x2*0xae7+0x2f97))+parseInt(_0x1687e4('avy(',0x969,0x7d5,0x7eb,0x8d8))/(0x268c+-0x1d*0x55+-0x1ce3)*(-parseInt(_0xc827ef('ve#2',-0x15b,-0x6c,-0x8d,0x11a))/(-0xaa2+-0x3*-0xb6f+-0x17a2))+parseInt(_0x1687e4('avy(',0x69f,0x6a0,0x58e,0x664))/(0x231f+0x12ed*-0x1+-0x1028)*(parseInt(_0x33b0a5(0x6b3,'8De%',0x657,0x7a6,0x7d1))/(0x131c*0x1+0x4dc*0x3+0x21*-0x105));if(_0x11166a===_0x40f315)break;else _0x35e9f3['push'](_0x35e9f3['shift']());}catch(_0x3eee13){_0x35e9f3['push'](_0x35e9f3['shift']());}}}(_0x258c,0x1*0x9fa3+0x5cf1+0x519*0x25));var _0x54e5f4=(function(){function _0x590f50(_0x4bcc84,_0x2aec79,_0x16604c,_0x398665,_0x184fcf){return _0x3a8e(_0x398665- -0x349,_0x184fcf);}var _0x3bcb8c={'xTeZh':function(_0xf9462b,_0x44248d){return _0xf9462b||_0x44248d;},'atIcU':_0x54c3bb(0x623,0x4de,0x43d,0x3fb,'N$a7'),'ZSaVa':_0x48e8ab('$R@!',0x2fa,0xdb,0x1ef,0x89)+_0xd4a93e(0x461,0x507,0x4a2,'cHV9',0x5e1)+_0xd4a93e(0x427,0x567,0x459,'%sEp',0x65c)+_0x4367d(0x12c,0x112,'fv%Y',0x2d,-0x24)+_0x590f50(-0x6,-0x3e,-0x65,0xd2,'odja')+_0x54c3bb(0x668,0x5dd,0x480,0x55b,'&#KC')+_0x54c3bb(0x600,0x645,0x4e9,0x70e,'pw%W')+_0x4367d(0x43,0x7b,'8De%',-0x2a,-0x1be)+_0x48e8ab('V)gs',0x8b,-0x11b,0x22,-0x94)+_0x4367d(0x71,-0x9b,'Mb)(',0xd8,0xfb),'YaxWC':_0x54c3bb(0x65c,0x64f,0x61a,0x750,'Ql4f'),'nNNEq':_0xd4a93e(0x657,0x72d,0x765,'tzIk',0x845)+'e','XQfsJ':_0x54c3bb(0x6e6,0x6f3,0x658,0x583,'x1oI'),'UpBlv':_0x4367d(0xdf,0x22,'YJQf',-0xc,-0x2b)+_0x54c3bb(0x93d,0x7c6,0x8d7,0x7e6,'SGZ9')+_0x54c3bb(0x5ac,0x728,0x66b,0x86d,'$imB'),'FNclQ':function(_0x3a1b64,_0x4f0fc4,_0x4b66e6,_0x2e36fb){return _0x3a1b64(_0x4f0fc4,_0x4b66e6,_0x2e36fb);},'JZpRF':_0x590f50(-0x10c,-0xa9,0x35,-0xf2,'^@Tm')+_0x48e8ab('biN#',0x416,0x39f,0x2bf,0x1a7)+_0xd4a93e(0x55c,0x5de,0x51e,'ve#2',0x6c7)+_0x54c3bb(0x936,0x7c1,0x753,0x770,'x1oI')+_0x590f50(0x2b,0x7f,-0xa6,-0x8,'wTH@')+_0x4367d(-0x122,-0x109,'Mb)(',0x44,-0xb4)+_0x48e8ab('N$a7',0x2a,0x3e,-0x64,-0x181)+_0x54c3bb(0x475,0x54a,0x6dd,0x520,'8De%')+_0x590f50(-0x56,-0x217,-0x156,-0x125,'EgcP')+_0xd4a93e(0x50b,0x631,0x4de,'b*Qz',0x6f9)+_0x590f50(-0x34,-0x9c,-0x102,-0x19,'ve#2')+_0x48e8ab('SE!(',0x1a7,0x2b0,0x228,0xf9)+_0xd4a93e(0x4e8,0x4ca,0x488,'cHV9',0x4c3)+_0x4367d(-0xd6,0x165,'SGZ9',0xb2,-0xb8)+_0x54c3bb(0x569,0x524,0x56b,0x6a6,'SE!(')+_0x48e8ab('XoF!',0x282,0x186,0x1e1,0x1c3)+_0xd4a93e(0x52e,0x6ad,0x7e3,'avy(',0x7b9)+_0x4367d(0x120,0x1e9,'0AJg',0xce,0x12d)+_0x590f50(-0x51,0x2b,0x129,0x70,'SGZ9')+_0x4367d(0x13c,0x29a,'odja',0x1e2,0xdb)+_0xd4a93e(0x3f3,0x4f9,0x64d,'(qgE',0x4e1)+_0xd4a93e(0x4bb,0x635,0x766,'sNRm',0x594)+'g','jkRea':function(_0xb646cd,_0x51bb23){return _0xb646cd!==_0x51bb23;},'mjTzO':_0x4367d(0x174,0x15e,'Jxo%',-0x5,-0xdf),'dkfFS':function(_0x294eb3,_0x3d2c3d){return _0x294eb3!==_0x3d2c3d;},'lMumr':_0x590f50(0x21f,-0x1c,0x29f,0x143,'cHV9'),'tVPqS':function(_0x4748c2,_0x275888){return _0x4748c2===_0x275888;},'vlJwN':_0x590f50(0xf8,0x28b,0x227,0x13a,'cHV9'),'zyQLd':_0x4367d(0x1a8,0x1e0,'Mb)(',0xba,0x2)};function _0x48e8ab(_0x23872b,_0x290675,_0x4b9b19,_0x3114fc,_0x1d2498){return _0x3a8e(_0x3114fc- -0x23b,_0x23872b);}var _0x7afa9e=!![];function _0xd4a93e(_0x2f7c64,_0x5d528d,_0x244ccc,_0x252497,_0x5dc428){return _0x3a8e(_0x5d528d-0x2f2,_0x252497);}function _0x4367d(_0x25cf32,_0x509a18,_0x226218,_0x11b55b,_0xff28a0){return _0x3a8e(_0x11b55b- -0x27f,_0x226218);}function _0x54c3bb(_0x5465d5,_0x439fe9,_0x5a6691,_0x159a67,_0x49ecb3){return _0x3a8e(_0x439fe9-0x2dc,_0x49ecb3);}return function(_0x490890,_0x93f8f0){function _0x1b09c3(_0x18d639,_0x1814fc,_0x51ff1f,_0x1b1c4a,_0x58c389){return _0x54c3bb(_0x18d639-0x188,_0x58c389- -0x467,_0x51ff1f-0x5f,_0x1b1c4a-0x5a,_0x1b1c4a);}function _0x244042(_0x3d803e,_0x31961d,_0x3ca742,_0x2ce5c6,_0xd20530){return _0xd4a93e(_0x3d803e-0x90,_0x3ca742- -0x571,_0x3ca742-0x10f,_0x3d803e,_0xd20530-0x35);}function _0xbdabc2(_0x5006ad,_0x5178d2,_0x23642,_0x299052,_0x2f1565){return _0x4367d(_0x5006ad-0xa8,_0x5178d2-0x160,_0x299052,_0x5006ad-0x601,_0x2f1565-0xf4);}var _0x1fe324={'vsJLd':function(_0x4466b7,_0x7db142){function _0x1aa493(_0x54cf1a,_0x5940cb,_0x48a623,_0x47ac81,_0x176a3e){return _0x3a8e(_0x47ac81-0x358,_0x5940cb);}return _0x3bcb8c[_0x1aa493(0x76c,'avy(',0x627,0x6c8,0x66b)](_0x4466b7,_0x7db142);},'iquFJ':_0x3bcb8c[_0xbdabc2(0x84a,0x788,0x8ac,'sNRm',0x6d4)],'KjrIw':_0x3bcb8c[_0xbdabc2(0x593,0x490,0x410,'EgcP',0x5a5)],'YnSNJ':_0x3bcb8c[_0x368a10(0x84f,0x738,0x671,0x727,'V)gs')],'GHtWE':_0x3bcb8c[_0x4155c4(0x57d,0x686,'avy(',0x591,0x500)],'mbZjr':function(_0x36f7fb,_0xa7edc1){function _0x11190b(_0x5d4312,_0x2038e9,_0x16a36b,_0x5b2325,_0x1cf8d3){return _0xbdabc2(_0x5d4312-0x23,_0x2038e9-0xd9,_0x16a36b-0x197,_0x2038e9,_0x1cf8d3-0x1cd);}return _0x3bcb8c[_0x11190b(0x715,'avy(',0x837,0x583,0x646)](_0x36f7fb,_0xa7edc1);},'kBJDD':_0x3bcb8c[_0x4155c4(0x4ae,0x43a,'0AJg',0x474,0x631)],'qCxVD':_0x3bcb8c[_0xbdabc2(0x842,0x9bf,0x86e,'$imB',0x738)],'nmXpN':function(_0x406589,_0x76d112,_0xa1dffb,_0x50eded){function _0x126be9(_0xe411b6,_0x47a629,_0x17233f,_0x58b3df,_0x4e3eb9){return _0x368a10(_0xe411b6-0x167,_0x47a629-0xb1,_0x17233f-0x148,_0xe411b6- -0x3cb,_0x4e3eb9);}return _0x3bcb8c[_0x126be9(0x3ba,0x4ac,0x4f9,0x2d1,'DEfA')](_0x406589,_0x76d112,_0xa1dffb,_0x50eded);},'wZyTz':_0x3bcb8c[_0xbdabc2(0x651,0x739,0x4f0,'oHiW',0x69b)],'RCVKe':function(_0x11f28c,_0x3fd304){function _0x295a0f(_0x51e30f,_0x57b67d,_0x3aa6f8,_0x5864ba,_0x51de81){return _0xbdabc2(_0x51e30f- -0x1fb,_0x57b67d-0x49,_0x3aa6f8-0x1b9,_0x57b67d,_0x51de81-0x30);}return _0x3bcb8c[_0x295a0f(0x597,'N$a7',0x708,0x607,0x5f3)](_0x11f28c,_0x3fd304);},'DAMlr':_0x3bcb8c[_0x1b09c3(0x27d,0xac,-0x41,'(qgE',0x108)],'CRStw':function(_0x473092,_0x280b68){function _0x1e6058(_0x23b5e7,_0x4dc754,_0x2c58c8,_0x2c0874,_0x5c18ee){return _0x368a10(_0x23b5e7-0xa9,_0x4dc754-0xf7,_0x2c58c8-0x99,_0x4dc754- -0x534,_0x23b5e7);}return _0x3bcb8c[_0x1e6058('EgcP',0x140,0xe7,0x2a,0x24d)](_0x473092,_0x280b68);},'pNamv':_0x3bcb8c[_0x1b09c3(0x2ae,0x9b,0x91,'g[cX',0x13a)]};function _0x368a10(_0x143ba5,_0x40cb6c,_0x2f5c1a,_0x1c6e8a,_0x5b5e0b){return _0x48e8ab(_0x5b5e0b,_0x40cb6c-0x1e2,_0x2f5c1a-0xa9,_0x1c6e8a-0x51f,_0x5b5e0b-0xa5);}function _0x4155c4(_0x38b406,_0x3181b9,_0x2c6f7a,_0x17408a,_0x5238b0){return _0x54c3bb(_0x38b406-0x18f,_0x38b406- -0xde,_0x2c6f7a-0x19c,_0x17408a-0x195,_0x2c6f7a);}if(_0x3bcb8c[_0x244042('oHiW',-0x3,-0xab,-0x1f,0x25)](_0x3bcb8c[_0x368a10(0x741,0x666,0x66e,0x6fe,'sNRm')],_0x3bcb8c[_0xbdabc2(0x7db,0x7bd,0x737,'avy(',0x7d3)])){if(_0x2abf46[_0x1b09c3(0x3ed,0x2e2,0x3de,'2@MB',0x2b6)+'r'][_0x368a10(0x64d,0x4ba,0x3ee,0x51a,'d%Yp')+_0x1b09c3(0x2dd,0x434,0x2fb,']ltx',0x2f5)](_0x1fe324[_0x368a10(0x50f,0x5a1,0x575,0x598,'d%Yp')](_0x1fe324[_0x368a10(0x6d3,0x76e,0x6b9,0x686,'Ql4f')],_0x1fe324[_0x4155c4(0x6d9,0x722,'b*Qz',0x7c0,0x5f1)]))){_0xd2b35f[_0x1b09c3(0x32b,0x389,0x305,'Ql4f',0x21b)](_0x1fe324[_0x368a10(0x7ac,0x559,0x7a7,0x6d4,'oHiW')]),_0x9021ea[_0x368a10(0x472,0x52b,0x64a,0x504,'gJqY')+_0x4155c4(0x4a8,0x506,'DEfA',0x5e0,0x597)+_0x4155c4(0x418,0x3bc,'(qgE',0x3f1,0x2cd)+'us'](_0x5e4a78[_0x368a10(0x88a,0x64f,0x71b,0x703,'JlHg')+'r'],_0x1fe324[_0xbdabc2(0x6e2,0x699,0x7bb,'tzIk',0x5b9)]);if(!_0x6eceb6)throw _0x183cc5[_0x4155c4(0x47b,0x426,'0AJg',0x380,0x5c6)+_0x4155c4(0x607,0x4c7,'4*eu',0x608,0x724)];_0x35ff2a[_0xbdabc2(0x778,0x8bd,0x6a9,'^@Tm',0x6cb)+_0x368a10(0x421,0x393,0x417,0x4ec,'wTH@')+_0xbdabc2(0x70d,0x785,0x6cc,'XoF!',0x719)+_0x244042('*epw',0xf8,0x9f,0xae,0xd0)+_0x1b09c3(0x1fb,0xdc,0x176,'$R@!',0x252)](_0x317aea[_0x1b09c3(0x30c,0x20f,0x2a5,'^c2f',0x185)],[_0x4edfde[_0xbdabc2(0x7cf,0x6b4,0x8b0,'0AJg',0x6bd)+'r']],_0x1fe324[_0x1b09c3(-0xd5,0x1b4,-0x6,'&WI#',0x9d)]);}if(_0x42b080[_0x1b09c3(0x310,0x91,0x1f4,'dtMO',0x1a9)+'r'][_0x1b09c3(0x235,0x241,0x311,'&#KC',0x362)+_0x368a10(0x7e3,0x7b3,0x69d,0x652,'vCZY')](_0x1fe324[_0x1b09c3(0x2df,0xe8,0x105,'EgcP',0x168)](_0x1fe324[_0x244042('pw%W',0x7c,-0x4e,-0xdc,0xe9)],_0x1fe324[_0x368a10(0x56f,0x57f,0x651,0x50b,'x1oI')]))){_0x1c5dec[_0x368a10(0x711,0x453,0x5bd,0x585,'b*Qz')](_0x1fe324[_0x4155c4(0x3df,0x4f8,'JlHg',0x4a0,0x376)]),_0x19e64c[_0x1b09c3(0x331,0x1cf,0x244,'2@MB',0x258)+_0x4155c4(0x684,0x6cd,'4*eu',0x798,0x5a7)+_0x4155c4(0x68d,0x6c1,'ve#2',0x764,0x5e1)+'us'](_0x509fa1[_0xbdabc2(0x59d,0x68b,0x51e,'pw%W',0x55e)+'r'],_0x1fe324[_0x368a10(0x799,0x682,0x6e0,0x6e1,'&WI#')]);if(!_0x10de71)throw _0x14fc80[_0x1b09c3(0x2a8,0x10f,0x33,'EgcP',0x1ab)+_0x1b09c3(0x1df,0x202,0x2ed,']hbB',0x271)];_0x2530ac[_0xbdabc2(0x7ea,0x815,0x8c0,'4*eu',0x978)+_0x4155c4(0x6bd,0x712,'^c2f',0x6bd,0x84c)+_0xbdabc2(0x564,0x4d4,0x5ca,'x1oI',0x640)+_0xbdabc2(0x813,0x8fd,0x8fa,'d%Yp',0x6da)+_0x368a10(0x67d,0x5e9,0x6e0,0x61e,'sNRm')](_0x3d0d97[_0x4155c4(0x498,0x58d,'vCZY',0x5f6,0x373)],[_0x346fba[_0x1b09c3(0x2f6,0x1cc,0x264,'dYGS',0x326)+'r']],_0x1fe324[_0xbdabc2(0x737,0x5d8,0x6f2,'FooR',0x629)]);}}else{var _0x26e528=_0x7afa9e?function(){var _0x1c789f={};_0x1c789f[_0x505a7e(0x4d5,0x646,'fv%Y',0x5db,0x534)]=_0x1fe324[_0x505a7e(0x4ad,0x31b,'&#KC',0x5a0,0x623)];function _0x5c9b62(_0x5eba75,_0x1130b4,_0x2bc8f5,_0x46e68b,_0x4b4ea2){return _0x244042(_0x4b4ea2,_0x1130b4-0x78,_0x46e68b-0x558,_0x46e68b-0x10b,_0x4b4ea2-0x138);}function _0x5b2e3a(_0x5557c7,_0x5a2c0d,_0x336c76,_0x573eeb,_0x2dac4c){return _0x1b09c3(_0x5557c7-0x55,_0x5a2c0d-0x1ec,_0x336c76-0x53,_0x573eeb,_0x5a2c0d-0x1d6);}function _0x1e8a4a(_0x319965,_0x313818,_0x35b6e9,_0x5b9c16,_0x352179){return _0x368a10(_0x319965-0x165,_0x313818-0x10d,_0x35b6e9-0x1ef,_0x352179-0xfe,_0x319965);}var _0xfb610d=_0x1c789f;function _0xcfc4d3(_0x5f1d43,_0x40de64,_0x367e26,_0x36137b,_0xce04aa){return _0x1b09c3(_0x5f1d43-0x143,_0x40de64-0x17,_0x367e26-0x83,_0xce04aa,_0x36137b- -0x103);}function _0x505a7e(_0x1d46e5,_0x3d3f5b,_0xbcc0b6,_0x14a566,_0x2e9dcc){return _0x244042(_0xbcc0b6,_0x3d3f5b-0x8,_0x1d46e5-0x297,_0x14a566-0x1cf,_0x2e9dcc-0x186);}if(_0x1fe324[_0xcfc4d3(0x109,0x119,0x1b8,0x13f,'!*b$')](_0x1fe324[_0x1e8a4a('Mb)(',0x64a,0x6e5,0x6de,0x77d)],_0x1fe324[_0xcfc4d3(0xca,0xb6,0xb6,0xa1,'V)gs')]))_0x169337=_0xfb610d[_0x5b2e3a(0x432,0x409,0x549,'pw%W',0x509)];else{if(_0x93f8f0){if(_0x1fe324[_0x5b2e3a(0x3b7,0x24e,0x2d9,'odja',0x135)](_0x1fe324[_0x5b2e3a(0x3ae,0x225,0x186,'*epw',0x13a)],_0x1fe324[_0xcfc4d3(0xdf,0x121,0x1ff,0x98,'%sEp')])){var _0x5d5666={};_0x5d5666[_0x505a7e(0x445,0x396,'tzIk',0x49c,0x48a)+_0xcfc4d3(-0x14c,-0xcd,0x113,-0x6c,'vCZY')+'t']=_0x1fe324[_0xcfc4d3(-0x124,-0x26,-0x109,0x7,'avy(')];var _0x422fac={};_0x422fac[_0x505a7e(0x3e8,0x42b,'E!WM',0x471,0x407)+_0x5b2e3a(0x3c0,0x355,0x4d2,'%sEp',0x290)]=_0x5c9b62(0x5a3,0x6d5,0x5eb,0x5b1,'^@Tm'),_0x422fac[_0x5c9b62(0x5b3,0x697,0x4fb,0x657,'dYGS')+_0x5b2e3a(0x2c4,0x2b7,0x37c,'dtMO',0x38a)]=_0x5d5666,_0x422fac[_0x505a7e(0x288,0x10f,'dtMO',0x3b4,0x11c)]=0x1;var _0x2c5440=[_0x422fac],_0x458879={};_0x458879[_0x5c9b62(0x872,0x62c,0x814,0x6e4,'YJQf')+'d']=_0x2393dc,_0x36aba3[_0x505a7e(0x4a6,0x406,']hbB',0x32b,0x602)+_0xcfc4d3(-0x1c,0xcd,0xf2,0x70,'N$a7')+'e'](_0x312ea2,{'text':_0x1fe324[_0x5b2e3a(0x3a9,0x2f3,0x466,'4*eu',0x28b)](_0x27e25e,_0x33d5ac,_0x392a7e,_0x4c013f),'mentions':[_0x4615b9,_0x2980c0[_0x5c9b62(0x552,0x43e,0x556,0x54f,'ve#2')+'r']]},_0x458879);}else{var _0x2db7ca=_0x93f8f0[_0x5b2e3a(0x124,0x2b5,0x124,'pw%W',0x2c7)](_0x490890,arguments);return _0x93f8f0=null,_0x2db7ca;}}}}:function(){};return _0x7afa9e=![],_0x26e528;}};}()),_0x3028d7=_0x54e5f4(this,function(){var _0x523c85={};function _0x239d92(_0x48d923,_0x2b69a4,_0x2fd2a8,_0x4fa223,_0x410745){return _0x3a8e(_0x48d923-0x72,_0x4fa223);}function _0x492e6b(_0x549e5c,_0x341e51,_0x3ec464,_0x37099,_0x5d3fda){return _0x3a8e(_0x549e5c- -0x1c9,_0x37099);}function _0x26337d(_0x33d3d4,_0x1617da,_0x475418,_0x54508f,_0x2c519f){return _0x3a8e(_0x1617da-0x4f,_0x2c519f);}function _0x4a8765(_0x417762,_0x1abbd8,_0x4098e2,_0x1e65c1,_0x6c9685){return _0x3a8e(_0x1abbd8-0x3a8,_0x4098e2);}function _0xc88ef1(_0xb49e8e,_0x3a8996,_0x4c8021,_0x17f933,_0x509012){return _0x3a8e(_0x3a8996- -0x2dc,_0x4c8021);}_0x523c85[_0x239d92(0x4c5,0x59d,0x520,'%sEp',0x3e6)]=_0x4a8765(0x7b2,0x88e,'8De%',0x8fd,0x8f8)+_0x4a8765(0x60c,0x6f3,']hbB',0x639,0x6da)+'+$';var _0x440303=_0x523c85;return _0x3028d7[_0x492e6b(0x296,0x154,0x1d4,'Jxo%',0x28d)+_0x239d92(0x4bb,0x597,0x3b2,'odja',0x5f7)]()[_0xc88ef1(0x10e,-0x9,'pw%W',0xab,0xa5)+'h'](_0x440303[_0xc88ef1(-0x90,0x2f,'JlHg',-0x32,-0xec)])[_0x492e6b(0x296,0x124,0x2a7,'Jxo%',0x1a1)+_0x492e6b(0x12f,0x222,0x20b,'d%Yp',-0x41)]()[_0xc88ef1(-0x8a,-0xe2,']hbB',-0x7c,-0x238)+_0x239d92(0x4b8,0x4ef,0x326,'ve#2',0x3dc)+'r'](_0x3028d7)[_0xc88ef1(0x186,0xf2,'&#KC',0x6f,0x109)+'h'](_0x440303[_0x26337d(0x49c,0x3a7,0x243,0x3b1,'d%Yp')]);});_0x3028d7();if(db[_0x448159(0xf4,0x10d,0x20d,'&#KC',0x141)][_0x14ba27('SE!(',0x21f,0x233,0xcb,0xde)+_0x448159(0x358,0x3f3,0x21b,'Jxo%',0x389)][botNumber][_0x448159(0x176,0x133,0xe5,'vCZY',0x2a4)+_0x49f715(-0xf6,'EgcP',-0x1c7,-0x26e,-0x53)+'ad']){if(budy[_0x448159(0x352,0x1f0,0x390,'0AJg',0x396)](_0x14ba27('tzIk',0x179,0x23a,0x1a4,0x254)+_0x49f715(0xd,'N$a7',0xb4,-0x67,-0x10)+_0x451b35(0x3c2,0x145,0x29a,'0AJg',0x2ba)+_0x14ba27('&#KC',0x1cd,0x1db,0x247,0x2cb)+'om')){var zQikCE=(_0x28ef89(0x360,'DEfA',0x3b3,0x39b,0x25b)+_0x451b35(0x4e1,0x3dd,0x36b,'EgcP',0x4d4)+_0x451b35(0x412,0x424,0x5e4,'pw%W',0x4c2)+'|7')[_0x448159(0x310,0x3c3,0x2f5,'YJQf',0x353)]('|'),ZDXWsQ=0x1a*-0x65+-0x994*0x1+0x13d6;while(!![]){switch(zQikCE[ZDXWsQ++]){case'0':var url=video[_0x14ba27('biN#',0x2e7,0x26f,0x1d8,0x236)+_0x448159(0x201,0x147,0x1f0,']ltx',0x14f)+_0x49f715(0x86,'biN#',-0x33,0x82,-0x1c)+'w']||video[_0x49f715(-0x13f,'tzIk',-0x18,-0x142,-0x2cd)+_0x49f715(-0xbb,'SGZ9',-0x18c,-0x31,0x37)+'rk']||video[_0x28ef89(0x59d,'g[cX',0x55f,0x6a2,0x4d6)+_0x28ef89(0x4e5,'%sEp',0x3c3,0x2a7,0x32c)+_0x49f715(-0xd9,'vCZY',0xa7,0xa5,-0x119)]||video[_0x28ef89(0x439,'!*b$',0x385,0x280,0x234)+_0x14ba27('^c2f',0x1e8,0x189,0x13b,0x215)+_0x49f715(-0xb7,'g[cX',-0xc0,-0x5c,0x56)];continue;case'1':await m[_0x14ba27('tzIk',0x2c8,0x2a2,0x1ca,0x250)](mess[_0x49f715(-0xe6,'(qgE',0x56,-0x1cc,-0x7c)]);continue;case'2':var _0x504959={};_0x504959[_0x448159(0x129,0x121,0x4e,'g[cX',0x274)]=url;var _0x52d309={};_0x52d309[_0x448159(0x34a,0x20f,0x435,'E!WM',0x3b8)+_0x14ba27('ve#2',0x233,0x2f0,0x107,0xb0)]=_0x504959,_0x52d309[_0x28ef89(0x335,'vCZY',0x4b3,0x3b1,0x5ae)+_0x451b35(0x561,0x36f,0x44b,'g[cX',0x4f2)]=_0x14ba27('E!WM',0x396,0x376,0x4b5,0x296)+_0x451b35(0x1b5,0x3eb,0x1d2,'wTH@',0x315),_0x52d309[_0x448159(0x9a,-0xbc,0x118,'N$a7',-0x89)+_0x14ba27('8De%',0x202,0x1c3,0x180,0x387)]=_0x451b35(0x3a3,0x342,0x34f,'Mb)(',0x42c)+_0x28ef89(0x25d,'wTH@',0x26a,0x1d9,0x2c5),ichi[_0x49f715(0xb3,'YJQf',0x1e8,0x1e1,0x11b)+_0x49f715(0x3b,'tzIk',0x4b,0xd5,-0xc7)+'e'](m[_0x451b35(0x131,0x2c0,0x1b7,'wTH@',0x235)],_0x52d309,{'quoted':m});continue;case'3':var taex=_0x49f715(0x1e,']ltx',-0xe3,0x14c,0x90)+_0x448159(0x35e,0x31c,0x47a,'odja',0x3fb)+url+(_0x28ef89(0x5d4,'tzIk',0x519,0x5c9,0x3f1)+_0x14ba27('NcgP',0x195,0x62,0x17b,0x329)+_0x28ef89(0x2d8,'d%Yp',0x30c,0x206,0x3f8))+nickname+'\x0a'+(description?_0x451b35(0x274,0x299,0x396,'b*Qz',0x407)+_0x448159(0xa2,-0x8a,0x1af,'$imB',-0x8f)+_0x448159(0x333,0x3db,0x3b5,'^@Tm',0x1d7)+'*\x20'+description:'');continue;case'4':var {tiktokdl,tiktokdlv2}=require(_0x451b35(0x2a6,0x511,0x3ef,'cHV9',0x3cf)+_0x14ba27('*epw',0x143,0xb8,0x1ee,0x15)+_0x448159(0x295,0x256,0x23b,'cHV9',0x181)+_0x448159(0xc8,-0xa5,0x1d7,'YJQf',0x16f));continue;case'5':if(!url)throw _0x448159(0x1a8,0x29a,0xc1,'fv%Y',0x325)+_0x28ef89(0x5b2,'JlHg',0x512,0x552,0x59f)+_0x448159(0x31a,0x1ff,0x1a0,'YJQf',0x2b4)+_0x451b35(0x33d,0x1df,0x37c,'d%Yp',0x297)+'!';continue;case'6':if(!isPrem&&global['db'][_0x448159(0xc7,0x1b7,0x255,'$imB',0x14d)][_0x28ef89(0x3d9,'tzIk',0x3d4,0x2ec,0x247)][m[_0x451b35(0xb6,0x23b,0x277,'&WI#',0x21c)+'r']][_0x49f715(0x9d,'tzIk',-0x14,0x1c,-0xdf)]<0x6bb+0x1*-0x134b+0xc91)return m[_0x49f715(-0x169,'SE!(',-0x6c,-0x29d,-0x240)](global[_0x14ba27('&WI#',0x104,0x19e,-0x62,0x132)+_0x448159(0x213,0x2a7,0x2ad,'DEfA',0x127)]);continue;case'7':global['db'][_0x448159(0x24c,0x101,0x141,'4*eu',0x2d9)][_0x49f715(-0x48,'DEfA',-0x15b,0x96,0x17)][m[_0x448159(0xdd,0x26,0x206,'$imB',-0x8d)+'r']][_0x14ba27('NcgP',0x1d2,0x2c4,0xaa,0x13c)]-=-0x4*0x842+-0x8aa+0x1*0x29b7;continue;case'8':var {author:{nickname},video,description}=await tiktokdl(budy)[_0x49f715(-0x197,']ltx',-0xa8,-0x1f1,-0x1ef)](async _0x25754d=>await tiktokdlv2(budy));continue;}break;}}else{if(budy[_0x448159(0x2f7,0x210,0x47d,']hbB',0x464)](_0x14ba27('0AJg',0x1ba,0x9b,0x9e,0x1e0)+_0x14ba27('wTH@',0x371,0x4c5,0x4a4,0x225)+_0x448159(0x1b5,0xb9,0x1b5,'0AJg',0x1b9))){if(!isPrem&&global['db'][_0x451b35(0x364,0x256,0x3f2,'tzIk',0x364)][_0x14ba27('sNRm',0x229,0x1c9,0x23d,0x3a9)][m[_0x28ef89(0x28b,'E!WM',0x3e7,0x293,0x25b)+'r']][_0x49f715(-0x17,'!*b$',-0x178,0x1c,-0xbe)]<0x7d+-0x3*-0xdf+-0x319)return m[_0x14ba27('0AJg',0xab,0x1fa,-0x53,0x173)](global[_0x451b35(0x4c6,0x24e,0x2c5,'$R@!',0x34b)+_0x451b35(0x150,0x33e,0x3ad,'%sEp',0x253)]);var {twitterDl}=require(_0x28ef89(0x1fc,'Ql4f',0x30a,0x299,0x2b2)+_0x28ef89(0x504,'d%Yp',0x3d0,0x2cc,0x325)+_0x49f715(0x5b,'*epw',0x2,-0xe7,0x108)),res=await twitterDl(budy);await m[_0x448159(0x327,0x220,0x296,'$R@!',0x23f)](mess[_0x14ba27('g[cX',0x1b6,0x271,0x24c,0xa2)]);for(let x=0x34*-0x8f+0x13*0x1a+-0x90a*-0x3;x<res[_0x451b35(0x503,0x541,0x2c7,'d%Yp',0x41e)][_0x448159(0x338,0x2f1,0x3cf,'oHiW',0x34f)+'h'];x++){var caption=x===-0x6ba*0x1+0x4e4+0x1d6?res[_0x14ba27('sNRm',0x12b,0x1c7,0x9e,0x206)+'on'][_0x451b35(0x40d,0x543,0x2f5,'NcgP',0x438)+'ce'](/https:\/\/t.co\/[a-zA-Z0-9]+/gi,'')[_0x49f715(-0x1f1,'XoF!',-0x25a,-0xfb,-0x215)]():'';ichi[_0x49f715(0xd2,'fv%Y',0x11f,0x186,0xa1)+_0x448159(0x1e5,0x8b,0x131,'Mb)(',0x27b)](m[_0x14ba27('$R@!',0x16a,0x63,-0x4,0x2ba)],res[_0x448159(0x28c,0x3af,0x193,'0AJg',0x36a)][x][_0x14ba27('fv%Y',0x97,0xd3,-0x26,0xe7)],caption,m);}global['db'][_0x14ba27('vCZY',0x32e,0x224,0x2cb,0x1e3)][_0x28ef89(0x28c,'XoF!',0x25c,0x1a3,0x19e)][m[_0x14ba27('oHiW',0x33e,0x3a1,0x28d,0x344)+'r']][_0x49f715(-0x1bf,'pw%W',-0x2a8,-0x221,-0x226)]-=-0x137d+0x1ca9*-0x1+0x302b;}else{if(budy[_0x14ba27('$imB',0x170,0x22a,0x110,-0x1b)](_0x448159(0x276,0x380,0x2d7,'b*Qz',0x2c4)+_0x451b35(0x27c,0xd2,0x19a,'^@Tm',0x217)+_0x451b35(0x41a,0x4e4,0x503,'oHiW',0x4e6)+_0x14ba27('JlHg',0x188,0xeb,0x155,0x18)+'e')){var IVNzUJ=(_0x14ba27('N$a7',0x2b7,0x217,0x211,0x26c)+_0x14ba27('N$a7',0x169,0x2e4,0x5d,0xe1)+'2')[_0x14ba27('gJqY',0x14b,0x145,0x2d0,0xab)]('|'),BytNqH=0xffc+-0x6*-0x189+0x96*-0x2b;while(!![]){switch(IVNzUJ[BytNqH++]){case'0':var {mediafiredl}=require(_0x448159(0xe7,0x1f0,-0x1f,'^c2f',0x1)+_0x49f715(-0x163,'8De%',-0x13e,-0x162,-0x2da)+_0x49f715(0x109,'$R@!',0x18,0x287,-0x42)+_0x451b35(0x415,0x40a,0x4f5,'sNRm',0x37e));continue;case'1':if(!isPrem)return m[_0x14ba27('V)gs',0x2ad,0x41c,0x3d3,0x2d8)](mess[_0x448159(0x281,0x1d6,0x1ac,'gJqY',0x2d0)]);continue;case'2':var _0x2063b2={};_0x2063b2[_0x451b35(0x58a,0x470,0x45d,'$imB',0x4db)]=url;var _0x3e2e2f={};_0x3e2e2f[_0x49f715(0x20,'sNRm',-0x124,-0x3f,-0x34)+_0x14ba27('tzIk',0x37f,0x3f3,0x3ad,0x512)]=_0x2063b2,_0x3e2e2f[_0x448159(0x23d,0x30b,0x329,'pw%W',0x36a)+_0x448159(0x342,0x400,0x39c,'!*b$',0x2e3)]=_0x49f715(-0x191,'tzIk',-0x12,-0x1d,-0x1e)+_0x448159(0x157,0xcb,0x21f,'d%Yp',0x16)+'n/'+ext,_0x3e2e2f[_0x448159(0x190,0xc3,0x44,'^@Tm',0xef)+_0x448159(0x3b3,0x40b,0x269,'Ql4f',0x231)]=filename+'.'+ext,ichi[_0x49f715(-0x66,'0AJg',-0x1c3,-0x179,-0xa1)+_0x28ef89(0x3f8,'EgcP',0x286,0x282,0x126)+'e'](m[_0x28ef89(0x45a,'4*eu',0x528,0x65e,0x516)],_0x3e2e2f,{'quoted':m});continue;case'3':var res=await mediafiredl(budy);continue;case'4':await m[_0x448159(0x3b2,0x408,0x34d,'FooR',0x3a3)](mess[_0x14ba27('DEfA',0xe2,-0x1b,0x16b,0x15a)]);continue;case'5':var {url,url2,filename,ext,aploud,filesize,filesizeH}=res;continue;}break;}}}}}if(db[_0x451b35(0x273,0x57b,0x3da,'odja',0x3e9)][_0x451b35(0x345,0x17a,0x23b,'oHiW',0x208)+_0x14ba27('cHV9',0x32d,0x3e8,0x4ae,0x3bd)][botNumber][_0x28ef89(0x2cf,'dtMO',0x28c,0x306,0x20a)]){if(!isMedia&&!m[_0x451b35(0x308,0x2a9,0x21a,'4*eu',0x25a)][_0x49f715(0x10,'E!WM',-0x37,-0x109,-0x92)+'e']){var simi=await axios[_0x448159(0x2f4,0x3ab,0x320,'ve#2',0x1a1)](_0x448159(0x20e,0x2c8,0x1ad,']ltx',0x143)+_0x28ef89(0x5b2,'SE!(',0x429,0x536,0x4c8)+_0x49f715(-0x162,'2@MB',-0x68,-0x1f5,-0x8c)+_0x28ef89(0x58e,'2@MB',0x4e6,0x3b3,0x44e)+_0x28ef89(0x3a2,'Ql4f',0x38b,0x473,0x401)+_0x14ba27('XoF!',0x2de,0x16f,0x1e0,0x237)+_0x28ef89(0x348,'fv%Y',0x268,0x314,0x297)+budy+(_0x49f715(0x7b,'FooR',0xf3,0x9e,-0xbe)+'d')),_0x2474d8={};_0x2474d8[_0x49f715(0x87,'V)gs',-0x8a,-0x23,0x141)]=simi[_0x451b35(0x2e4,0x357,0x3c0,'tzIk',0x364)][_0x49f715(0x80,'pw%W',0x34,0x171,0x1b)+'ss'],ichi[_0x28ef89(0x252,'vCZY',0x2a7,0x419,0x2c8)+_0x28ef89(0x51b,'&#KC',0x484,0x3e6,0x406)+'e'](m[_0x448159(0xa8,0xc0,0x19f,'Ql4f',0x220)],_0x2474d8,{'quoted':m});}}if(db[_0x49f715(-0x17c,'Jxo%',-0x215,-0x243,-0x2ff)][_0x28ef89(0x3f3,']hbB',0x343,0x3a6,0x397)+_0x28ef89(0x51a,'x1oI',0x460,0x2d8,0x390)][botNumber][_0x448159(0x326,0x352,0x475,'g[cX',0x261)+_0x49f715(-0x13d,'Ql4f',-0x122,-0x1ee,-0x77)+'r']){if(m[_0x28ef89(0x3ca,'Jxo%',0x3ec,0x39b,0x4ac)]==_0x451b35(0x380,0x4b0,0x418,'fv%Y',0x4b3)+_0x49f715(0xd3,'avy(',-0x32,0x115,0x67)+'ge'||m[_0x451b35(0x20a,0x166,0x16d,'oHiW',0x2d8)]==_0x448159(0x27f,0x196,0xfe,'2@MB',0x3f0)+_0x448159(0x15e,0x66,-0x31,'fv%Y',0x1c3)+'ge'||m[_0x28ef89(0x449,'$R@!',0x4dd,0x559,0x55d)]==_0x49f715(-0x1ab,'XoF!',-0x280,-0x1e0,-0x2d2)+_0x14ba27('wTH@',0x162,0x240,-0x5,0x239)+_0x28ef89(0x47e,'tzIk',0x50d,0x42e,0x4c3)){if(/image/[_0x28ef89(0x339,'FooR',0x25e,0x28f,0x19f)](mime)){let media=await ichi[_0x451b35(0x322,0x3db,0x3c7,'$imB',0x29a)+_0x14ba27('DEfA',0x134,0x205,0x225,0xca)+_0x49f715(-0x4e,'0AJg',-0x74,-0x131,-0xcf)+_0x49f715(-0x103,'gJqY',-0x177,-0x236,-0x126)](qmsg);var _0x86c5c6={};_0x86c5c6[_0x49f715(-0x1c4,'SGZ9',-0x2ea,-0x206,-0x314)+_0x14ba27('vCZY',0x324,0x43c,0x21a,0x2ec)]=global[_0x448159(0x160,0x1ec,0x2c,'Mb)(',0x93)+_0x451b35(0x3ce,0x355,0x5a0,'&WI#',0x494)],_0x86c5c6[_0x448159(0x350,0x2f0,0x301,'^c2f',0x327)+'r']=global[_0x451b35(0x2d9,0x3fc,0x3b4,'%sEp',0x374)+'r'];let encmedia=await ichi[_0x14ba27('b*Qz',0x106,0x260,-0x66,-0x2d)+_0x448159(0x2c9,0x2fc,0x382,'Ql4f',0x29b)+_0x448159(0x35f,0x327,0x4aa,']hbB',0x486)+_0x14ba27('g[cX',0xd4,0xd6,-0xad,0x1b8)](m[_0x14ba27('biN#',0x26d,0x31c,0x2f7,0x1b1)],media,m,_0x86c5c6);await fs[_0x28ef89(0x450,'YJQf',0x499,0x50f,0x4df)+_0x451b35(0x4fd,0x422,0x4a6,'Mb)(',0x3c3)](encmedia);}else{if(/video/[_0x28ef89(0x6bf,'cHV9',0x554,0x685,0x528)](mime)){if(qmsg[_0x28ef89(0x4c7,'4*eu',0x3fb,0x370,0x4a2)+'ds']>0x2f*-0xc+0x1*0x15b9+-0x2*0x9bd)return m[_0x14ba27('FooR',0x3ab,0x51c,0x3df,0x34f)](_0x28ef89(0x35b,'$imB',0x2f6,0x331,0x25e)+_0x28ef89(0x27b,'Mb)(',0x266,0x3f1,0x16c)+_0x451b35(0x328,0x3b8,0x1b7,'^@Tm',0x2fe)+_0x49f715(0x68,'4*eu',0xdf,0x31,0x155));let media=await ichi[_0x28ef89(0x358,'odja',0x4d7,0x5f6,0x62c)+_0x49f715(-0x181,'tzIk',-0xea,-0x30a,-0x1f)+_0x448159(0x24d,0x38a,0x269,'Jxo%',0x198)+_0x28ef89(0x563,'oHiW',0x49c,0x3f5,0x366)](qmsg);var _0x35e925={};_0x35e925[_0x448159(0x240,0x371,0x17b,'Jxo%',0x3d0)+_0x14ba27('x1oI',0x254,0x35f,0x39e,0x315)]=global[_0x451b35(0x445,0x38a,0x4b4,'EgcP',0x329)+_0x28ef89(0x330,']hbB',0x2fb,0x1d9,0x401)],_0x35e925[_0x28ef89(0x360,'YJQf',0x49f,0x5f4,0x512)+'r']=global[_0x49f715(-0xb1,'$R@!',-0x69,-0x1e3,-0x23e)+'r'];let encmedia=await ichi[_0x28ef89(0x347,'SGZ9',0x480,0x3ca,0x462)+_0x49f715(0xab,'biN#',0x9c,-0x8d,-0xac)+_0x28ef89(0x4c4,'!*b$',0x540,0x469,0x49e)+_0x448159(0xdf,0x1c3,0x206,'DEfA',0x6a)](m[_0x49f715(0x54,'^@Tm',0xaf,-0x132,0x136)],media,m,_0x35e925);await fs[_0x14ba27('XoF!',0x379,0x4d6,0x41e,0x264)+_0x49f715(0x10b,']hbB',-0x34,0x165,0x4e)](encmedia);}}}}if(m[_0x28ef89(0x5b6,'dYGS',0x4b2,0x3f4,0x331)+'up']&&isAlreadyResponList(from,body,db_respon_list)){var get_data_respon=getDataResponList(from,body,db_respon_list);if(get_data_respon[_0x14ba27('g[cX',0x9a,-0x32,-0x1b,0x1c8)+'ge']===![]){var _0x5b4773={};_0x5b4773[_0x451b35(0x23e,0x1e9,0x250,'JlHg',0x32f)+_0x451b35(0x494,0x3df,0x28b,'$R@!',0x33a)+'t']=_0x451b35(0x34d,0x389,0x5d1,'b*Qz',0x4ac)+_0x448159(0x195,0x1bb,0x24b,'^@Tm',0x2d5)+_0x14ba27('NcgP',0x156,0x3c,0x87,0xbf);var _0x23095d={};_0x23095d[_0x28ef89(0x4e9,'dYGS',0x3f1,0x386,0x2bd)+_0x448159(0xc3,0x93,0x119,'odja',0x20d)]=_0x49f715(-0xf9,']ltx',-0xee,-0x129,-0xa9),_0x23095d[_0x14ba27('4*eu',0x10d,0x232,-0x32,0x1e2)+_0x49f715(-0x9d,'&#KC',-0xd7,-0x4,-0x2a)]=_0x5b4773,_0x23095d[_0x448159(0x284,0x3ad,0x417,'vCZY',0x224)]=0x1;var butstore=[_0x23095d];ichi[_0x448159(0xef,0xa7,0xbe,'b*Qz',0x4e)+_0x14ba27('N$a7',0x1b1,0x1af,0xa3,0xbe)+'e'](from,{'text':sendResponList(from,body,db_respon_list),'mentions':[getDataResponList,m[_0x49f715(-0x158,'SE!(',-0x214,-0x2d4,-0x89)+'r']]},{'quoted':m});}else{imgstore=await getBuffer(get_data_respon[_0x451b35(0x2fd,0x399,0x4db,'$R@!',0x3ad)+_0x448159(0xe8,-0xa3,0x249,'N$a7',0x119)]);var _0x3eb827={};_0x3eb827[_0x451b35(0x539,0x455,0x522,'fv%Y',0x4c6)+_0x28ef89(0xd8,'0AJg',0x256,0x170,0x174)+'t']=_0x451b35(0x1d0,0x124,0x347,'vCZY',0x28c)+_0x448159(0x2bc,0x3fa,0x39b,'x1oI',0x238)+_0x448159(0x26c,0x121,0x1d5,'dtMO',0x213);var _0x9facd6={};_0x9facd6[_0x28ef89(0x38b,'4*eu',0x2cd,0x20a,0x1e5)+_0x28ef89(0x621,'wTH@',0x553,0x512,0x5dd)]=_0x448159(0xea,-0x2e,0x15e,'tzIk',0x49),_0x9facd6[_0x14ba27('YJQf',0x216,0xa3,0x396,0x2af)+_0x28ef89(0x389,'V)gs',0x41f,0x39a,0x3d7)]=_0x3eb827,_0x9facd6[_0x49f715(-0xe1,'biN#',-0x33,-0x236,-0x22a)]=0x1;var butstore=[_0x9facd6],_0x1daa3c={};_0x1daa3c[_0x448159(0x32e,0x3fc,0x481,'SE!(',0x39f)]=imgstore,_0x1daa3c[_0x14ba27('EgcP',0x1e1,0x302,0x121,0x21f)+'on']=get_data_respon[_0x14ba27('ve#2',0x234,0x20a,0x35e,0xaf)+_0x451b35(0x60a,0x376,0x355,'(qgE',0x4cf)],_0x1daa3c[_0x14ba27('fv%Y',0x100,-0x2a,0x14,-0x22)+'ns']=butstore,_0x1daa3c[_0x28ef89(0x39c,'x1oI',0x40a,0x4b4,0x34b)+_0x28ef89(0x4f4,'ve#2',0x4c2,0x447,0x4dc)]=[getDataResponList,m[_0x448159(0xe4,0x10e,0x4d,'tzIk',0x187)+'r']];var _0x569d34={};_0x569d34[_0x14ba27('V)gs',0x2aa,0x23d,0x137,0x13c)+'d']=m,ichi[_0x448159(0xe0,-0x66,0x134,'2@MB',0x44)+_0x451b35(0x195,0x1e2,0x2fc,'DEfA',0x294)+'e'](from,_0x1daa3c,_0x569d34);}}if(m[_0x28ef89(0x2e0,'b*Qz',0x2b8,0x257,0x2d4)][_0x14ba27('b*Qz',0x30f,0x470,0x383,0x468)+_0x14ba27('&#KC',0x292,0x228,0x34d,0x36b)](_0x28ef89(0x3ab,'^c2f',0x46b,0x58b,0x5d9)+_0x49f715(0x129,'N$a7',0x5d,0x205,-0x67)+_0x49f715(-0x26,'&WI#',-0x76,-0x195,-0x1ba))&&isCmd){var _0x5d184e={};_0x5d184e[_0x28ef89(0x461,'(qgE',0x31e,0x3ac,0x2ea)+_0x448159(0x2a0,0x17a,0x301,'Mb)(',0x1da)]=_0x28ef89(0x379,'gJqY',0x3d1,0x471,0x485)+_0x448159(0x131,0x157,0x17e,'N$a7',0x65)+_0x448159(0x2db,0x2b8,0x1ca,'b*Qz',0x2c4)+'t',_0x5d184e[_0x28ef89(0x3a1,'odja',0x458,0x3fc,0x39a)+_0x14ba27('8De%',0x1ac,0x48,0xda,0x18e)+'t']=_0x14ba27('&WI#',0x1f7,0x224,0xbf,0x6c)+_0x49f715(-0x52,'Ql4f',0x106,0x12f,-0x1c4)+_0x448159(0x2d0,0x14b,0x299,'%sEp',0x3c2)+'t';var _0x120b85={};_0x120b85[_0x49f715(0x91,'odja',-0x9b,-0x8e,0x20d)]=_0x448159(0x33c,0x239,0x37e,'odja',0x26e)+_0x448159(0x22f,0x110,0x286,'x1oI',0x164)+_0x49f715(-0x1d1,'&WI#',-0x1ce,-0x298,-0x1f7)+_0x14ba27('cHV9',0x2bd,0x31d,0x2bf,0x311)+_0x448159(0x385,0x4bb,0x373,'Mb)(',0x48e),_0x120b85[_0x451b35(0x412,0x5dc,0x32b,'avy(',0x448)+_0x448159(0x373,0x2a8,0x4db,'NcgP',0x36b)+_0x448159(0x248,0x3d0,0x330,'dYGS',0x302)]=global[_0x49f715(0xe8,'Jxo%',0x1d1,0x70,0x19a)];var _0x13fedc={};_0x13fedc[_0x28ef89(0x496,'vCZY',0x4e2,0x431,0x610)+_0x448159(0x372,0x24d,0x2e4,'$R@!',0x43e)+_0x49f715(-0xa3,'$R@!',-0x1fe,0x13,0x40)]=_0x120b85;var _0x218012={};_0x218012[_0x448159(0x15a,0x1f,0x262,'8De%',0x253)]=_0x5d184e,_0x218012[_0x448159(0x353,0x1dc,0x35f,'fv%Y',0x3db)+'ge']=_0x13fedc;var fdoc=_0x218012;const delay=_0x1e016a=>new Promise(_0x36b85e=>setTimeout(_0x36b85e,_0x1e016a));this[_0x49f715(-0xfe,'sNRm',-0x86,0xb,-0x1cf)+'ss']=global['db'][_0x28ef89(0x370,'E!WM',0x2c7,0x2d5,0x42d)][_0x451b35(0x173,0x3e4,0x246,'ve#2',0x305)+'s'];let room=Object[_0x448159(0x389,0x360,0x4da,'!*b$',0x34d)+'s'](this[_0x28ef89(0x44f,'XoF!',0x4a8,0x4e7,0x559)+'ss'])[_0x448159(0x98,-0xd4,0x214,'0AJg',0xc0)](_0x19ecf9=>[_0x19ecf9['a'],_0x19ecf9['b']][_0x49f715(0x10f,'V)gs',-0x2,0xa0,0xf4)+_0x448159(0x3ae,0x3ea,0x540,'vCZY',0x21d)](m[_0x448159(0x133,0x1b1,-0x21,'EgcP',0x246)+'r'])&&_0x19ecf9[_0x448159(0x2fc,0x435,0x2f2,'tzIk',0x435)]===_0x49f715(-0xdb,'biN#',0x93,-0x130,-0x244)+_0x451b35(0x415,0x3a3,0x350,'JlHg',0x456));if(room){var _0x30bec4={};_0x30bec4[_0x14ba27('4*eu',0x29f,0x321,0x13e,0x1c1)]=m[_0x451b35(0x515,0x3cb,0x2da,'YJQf',0x3b7)],console[_0x28ef89(0x523,'DEfA',0x4f4,0x652,0x390)](_0x30bec4);if(room&&(m[_0x14ba27('%sEp',0x151,0x1ef,0x233,0x38)]===_0x14ba27('wTH@',0x198,0x37,0x28,0x2b0)+_0x49f715(-0x7c,'vCZY',-0x4d,0x99,-0x1c)||m[_0x28ef89(0x38e,'%sEp',0x311,0x44a,0x2e3)]==='')&&m[_0x451b35(0x45c,0x64e,0x53e,'biN#',0x4d2)+'d']?.[_0x14ba27('E!WM',0xf0,0x191,0x27a,0x3d)]==_0x14ba27('XoF!',0x21e,0x219,0xca,0x19e)+_0x28ef89(0x498,'$imB',0x30f,0x22d,0x324)+_0x451b35(0x303,0x120,0x29c,'2@MB',0x27d))return m[_0x448159(0xf6,-0x7f,0x13f,'!*b$',0xdb)](_0x451b35(0x280,0x105,0x136,'$R@!',0x22e)+_0x14ba27('oHiW',0x310,0x2e7,0x366,0x20a)+_0x14ba27('JlHg',0x25c,0x1c7,0x3e8,0x2a9)+_0x49f715(-0x1ed,'Ql4f',-0xcc,-0x66,-0x169)+_0x448159(0x15f,0xf2,0x205,'(qgE',0xba)+_0x448159(0x244,0x128,0x3be,'dtMO',0x3a8)+_0x448159(0x1d7,0x25d,0x280,'8De%',0x12d));let txtbalasan=_0x448159(0xfd,0x19d,0x105,'^c2f',0x155)+_0x451b35(0x216,0x22a,0x2e5,'d%Yp',0x31c)+_0x14ba27('dYGS',0x295,0x355,0x1c8,0x320)+_0x451b35(0x2f9,0x573,0x38a,'!*b$',0x46f)+_0x14ba27('(qgE',0xa5,0x157,0x65,-0x82)+_0x14ba27('N$a7',0x253,0x2b9,0x1a1,0x342)+_0x14ba27('tzIk',0x1dc,0x62,0x12e,0x214)+_0x28ef89(0x657,'avy(',0x4dc,0x3c9,0x5ae)+_0x49f715(-0xbd,'wTH@',-0x43,-0x1d2,-0xd1)+_0x448159(0xbf,0x1c6,0x121,'^@Tm',0x153)+_0x14ba27('4*eu',0x286,0x223,0x1c2,0x2db)+_0x49f715(-0x100,'b*Qz',-0x212,-0x1a,-0x24d)+_0x448159(0x312,0x213,0x1e2,'gJqY',0x18d)+_0x14ba27('EgcP',0x242,0x21a,0x399,0x2af)+_0x28ef89(0x18c,'Jxo%',0x24e,0x15a,0x190)+_0x14ba27('dYGS',0x360,0x280,0x31b,0x3fe),other=[room['a'],room['b']][_0x49f715(-0x82,'fv%Y',0xb2,-0x110,-0x1bd)](_0x2f0b05=>_0x2f0b05!==m[_0x14ba27('sNRm',0x2b4,0x30b,0x3ed,0x1aa)+'r']);var _0x2add41={};_0x2add41[_0x451b35(0x5f2,0x3d0,0x52b,'2@MB',0x4cb)]=txtbalasan;var _0x5c60b2={};_0x5c60b2[_0x451b35(0x3c3,0x13c,0x22d,'avy(',0x24a)+'d']=fdoc,await ichi[_0x49f715(0x88,'dYGS',-0x1b,-0x6,0x1b7)+_0x448159(0x146,0x11b,-0x42,'XoF!',0x79)+'e'](other,_0x2add41,_0x5c60b2),await m[_0x448159(0x104,0x1c,0x160,'(qgE',0x1a2)+_0x49f715(-0x74,'EgcP',-0x1c1,-0x78,0xd8)+'rd'](other,!![],m[_0x28ef89(0x4a2,'^c2f',0x31c,0x3c7,0x1f6)+'d']&&m[_0x14ba27('vCZY',0x15a,0xd8,0xb8,0x2e)+'d'][_0x451b35(0x5d8,0x5c1,0x4c0,'JlHg',0x497)+'e']?{'contextInfo':{...m[_0x451b35(0x51d,0x539,0x5b7,'YJQf',0x4c7)][_0x49f715(-0x119,'g[cX',-0xa9,-0x26d,-0x19d)+_0x49f715(-0x139,'$R@!',-0xd,0x3b,-0x146)+'o'],'participant':other}}:{})[_0x448159(0x31f,0x431,0x49c,'^@Tm',0x43a)](()=>{function _0x3a4703(_0x34e71b,_0x191e61,_0x1cdf37,_0x41e254,_0x2bc852){return _0x28ef89(_0x34e71b-0x12,_0x191e61,_0x1cdf37- -0x400,_0x41e254-0x103,_0x2bc852-0x5c);}var _0x1f4214={};_0x1f4214[_0x1f2402(0x551,0x48b,0x5c0,'DEfA',0x4d7)]=_0x31dbd6(0x229,0xd3,0x187,0x31f,'%sEp')+_0x381576(0x32d,0x3a0,0x443,0x341,'pw%W')+_0x1f2402(0x683,0x73a,0x72c,']ltx',0x573)+_0x29af59('oHiW',0x10c,0x131,0xc8,0x2)+_0x3a4703(-0x40,'4*eu',-0xb4,0x7f,-0x1e6)+'.';function _0x381576(_0x49042e,_0x28c356,_0x1ad257,_0x1db50d,_0x46f85c){return _0x14ba27(_0x46f85c,_0x49042e-0x2a4,_0x1ad257-0xbb,_0x1db50d-0xa5,_0x46f85c-0xe2);}function _0x31dbd6(_0x1cce6e,_0xd757c1,_0x4b487c,_0x206d59,_0x2aa9e7){return _0x448159(_0x1cce6e-0x173,_0xd757c1-0x1a0,_0x4b487c-0x17a,_0x2aa9e7,_0x2aa9e7-0x99);}function _0x29af59(_0x456848,_0x35c2ac,_0x455524,_0x375877,_0x59273c){return _0x28ef89(_0x456848-0x17c,_0x456848,_0x375877- -0x1e9,_0x375877-0x1a3,_0x59273c-0x16f);}var _0x3bbceb=_0x1f4214;m[_0x1f2402(0x46e,0x33b,0x2eb,'Jxo%',0x3b5)](_0x3bbceb[_0x31dbd6(0x249,0x3a0,0x315,0x3d6,'$imB')]),delete this[_0x381576(0x5f7,0x548,0x5a3,0x593,'%sEp')+'ss'][room['id']];function _0x1f2402(_0x1914c1,_0x1b979c,_0x594ce0,_0x40da54,_0x20eb7a){return _0x49f715(_0x1914c1-0x63b,_0x40da54,_0x594ce0-0x143,_0x40da54-0x180,_0x20eb7a-0xd8);}return!(0x23*0xef+-0x4*-0x8a+-0x1*0x22d5);});}}function _0x451b35(_0x50be4e,_0x12472c,_0x67af4a,_0x240dd1,_0x3faa9f){return _0x3a8e(_0x3faa9f-0x18,_0x240dd1);}if(db[_0x49f715(-0xf0,'0AJg',-0x18b,-0x228,-0x261)][_0x451b35(0x42e,0x299,0x549,'E!WM',0x3dc)][m[_0x448159(0x1ca,0x123,0x28c,'^c2f',0x19f)]][_0x451b35(0x374,0x3d1,0x2fd,'EgcP',0x3fc)+_0x451b35(0x414,0x5e2,0x451,'&#KC',0x466)]){if(m[_0x14ba27('g[cX',0xae,-0x97,0xa3,-0xb0)+'r'][_0x14ba27('EgcP',0x20d,0x130,0x9a,0x12c)+_0x28ef89(0x2ce,'Jxo%',0x375,0x48e,0x504)](_0x49f715(-0x1de,'*epw',-0x28b,-0x8e,-0xd3)||_0x49f715(0x34,'cHV9',-0x144,-0xc2,0x52))){m[_0x451b35(0x436,0x2a2,0x15e,'JlHg',0x2ef)](_0x49f715(-0xca,']hbB',0x1c,-0xbe,0x12)+_0x49f715(0x39,'JlHg',0x198,-0xb7,-0xdd)+_0x49f715(-0x143,'wTH@',-0x54,-0x172,-0x20c)+_0x28ef89(0x4b7,'avy(',0x439,0x472,0x311)+_0x14ba27('wTH@',0x139,0x1f1,0x218,0x107)+_0x451b35(0x2ef,0x336,0x3cf,'$R@!',0x401)+_0x448159(0x282,0x1a5,0x3cb,'b*Qz',0x32a)+_0x14ba27('fv%Y',0xdc,-0x9e,0x223,0x16a)+_0x49f715(0x65,'8De%',-0xd8,0x1e6,0x1df)+_0x448159(0x1ae,0x99,0x213,'8De%',0x126)),ichi[_0x28ef89(0x4e9,'E!WM',0x4e9,0x371,0x610)+_0x14ba27('b*Qz',0x124,0x1a1,0x239,0x215)+_0x451b35(0x19e,0x14a,0x331,'dYGS',0x27e)+'us'](m[_0x49f715(-0x1cf,'g[cX',-0x24f,-0x296,-0x9c)+'r'],_0x28ef89(0x43b,'d%Yp',0x2f7,0x32b,0x191));if(!isBotAdmins)throw mess[_0x448159(0x29b,0x112,0x280,'N$a7',0x1c2)+_0x14ba27('pw%W',0xbf,0xba,0xf6,0x95)];ichi[_0x451b35(0x25c,0x205,0x1fc,'SGZ9',0x29d)+_0x448159(0x379,0x22d,0x324,'^c2f',0x215)+_0x49f715(-0x168,'oHiW',0x27,-0x1bd,0x2b)+_0x49f715(0x81,'biN#',-0x15,0x136,0x186)+_0x451b35(0x277,0x2da,0x113,'%sEp',0x276)](m[_0x448159(0x198,0x282,0x50,'x1oI',0x2d)],[m[_0x49f715(-0x151,'EgcP',-0x119,-0x16,0xd)+'r']],_0x28ef89(0x479,'dYGS',0x394,0x3ad,0x285)+'e');}if(m[_0x49f715(-0x96,'dtMO',-0x161,0xf9,-0x16f)+'r'][_0x14ba27('2@MB',0x2a8,0x183,0x234,0x423)+_0x28ef89(0x472,'JlHg',0x301,0x26f,0x330)](_0x451b35(0x320,0x420,0x2dd,'0AJg',0x3d8)||_0x448159(0x1bf,0x14c,0x24a,'dYGS',0x134))){m[_0x14ba27('!*b$',0xef,0x19a,0xfd,0x18c)](_0x448159(0x113,-0x4d,0x1cf,'d%Yp',0x11e)+_0x448159(0xa7,0x10d,-0xe0,'EgcP',-0xae)+_0x448159(0xae,0x14c,0x220,'vCZY',-0x8)+_0x14ba27('NcgP',0xc7,0x135,-0x7a,-0xaf)+_0x14ba27('$R@!',0x2db,0x205,0x1f2,0x27b)+_0x448159(0x159,0x78,0x63,'JlHg',0x17d)+_0x451b35(0x351,0x31d,0x331,'b*Qz',0x3e0)+_0x28ef89(0x489,'odja',0x3b0,0x39d,0x270)+_0x14ba27('(qgE',0x1b2,0x22,0x28b,0x108)+_0x451b35(0x22d,0x1dd,0xad,'$imB',0x22a)),ichi[_0x49f715(-0x136,'vCZY',-0x15c,-0x263,0x1e)+_0x49f715(-0x98,'tzIk',-0x7b,0xda,-0x6b)+_0x49f715(0x6f,'$R@!',0xb7,-0x100,-0xf8)+'us'](m[_0x28ef89(0x4a6,'odja',0x4c8,0x48b,0x3a1)+'r'],_0x451b35(0x2ab,0x34f,0x3b7,'YJQf',0x424));if(!isBotAdmins)throw mess[_0x14ba27('Jxo%',0xeb,0x1c,0x12d,0x22a)+_0x49f715(0x14,'V)gs',0x94,0x7f,-0x8e)];ichi[_0x14ba27('g[cX',0x270,0x154,0x320,0x282)+_0x14ba27('ve#2',0x31e,0x236,0x489,0x40e)+_0x448159(0xa0,0x42,0x1ad,'dYGS',0x183)+_0x448159(0x254,0x121,0x3dd,'$R@!',0x3d3)+_0x448159(0x3b1,0x458,0x421,'gJqY',0x3ff)](m[_0x49f715(0x10c,'N$a7',0x19c,0x3,0x269)],[m[_0x448159(0x269,0x3df,0x1e7,'&#KC',0x1e5)+'r']],_0x49f715(-0x15f,'Ql4f',-0x266,-0x1c9,-0x70)+'e');}}if(db[_0x49f715(-0x84,'JlHg',-0x168,-0x139,0x2a)][_0x448159(0x3a1,0x27a,0x360,'DEfA',0x4d4)+_0x448159(0x2f2,0x23d,0x37d,'dtMO',0x3d3)][botNumber][_0x451b35(0x223,0x1b9,0x30a,'^c2f',0x2da)+_0x49f715(0x5a,'&WI#',-0x43,-0x3b,0x1e6)]){let emoji=['👍','👎','🤙','😎','😁','😭','😠','🗿','😍','🤨','🤔','🤡'],emot=emoji[Math[_0x448159(0x1aa,0x37,0x77,'(qgE',0x1d6)](Math[_0x451b35(0x3bb,0x553,0x499,'^@Tm',0x4dd)+'m']()*emoji[_0x14ba27('(qgE',0x190,0x314,0x11e,0x53)+'h'])];ichi[_0x451b35(0x479,0x336,0x465,'oHiW',0x476)+_0x14ba27('&WI#',0x166,0x48,0x4b,0x91)+'e'](m[_0x448159(0x3a5,0x2f2,0x4cd,'gJqY',0x445)],{'react':{'text':emot,'key':m[_0x49f715(-0x1ac,'%sEp',-0x2b3,-0x17b,-0x20c)]}});}if(m[_0x14ba27('8De%',0x102,-0x8d,-0x20,0x24f)+'up']&&db[_0x28ef89(0x215,'dtMO',0x2ba,0x406,0x1d2)][_0x14ba27('gJqY',0x224,0x23a,0x21b,0x273)][m[_0x28ef89(0x3f4,'&#KC',0x398,0x310,0x20c)]][_0x14ba27('8De%',0x10e,0x1f1,0xfa,0x165)+'ed']!=-0x506+-0x1d9*-0xa+-0x29*0x54){if(new Date()*(-0x8*-0x225+0x12b8+-0x23df)>=db[_0x49f715(-0x106,'N$a7',0x21,-0x1f4,-0x183)][_0x14ba27(']hbB',0x337,0x2f1,0x245,0x420)][m[_0x448159(0x29a,0x171,0x21e,']ltx',0x3f2)]][_0x451b35(0x39d,0x319,0x280,'^c2f',0x2d3)+'ed']){var pa7rick=await ichi[_0x28ef89(0x496,'dtMO',0x561,0x493,0x612)+_0x49f715(-0x166,'SGZ9',-0x22e,-0x2e,-0x135)+'t'](m[_0x28ef89(0x651,'gJqY',0x55e,0x3f6,0x51a)],global[_0x451b35(0x425,0x37c,0x40d,'dtMO',0x4a1)+_0x49f715(-0xbc,'*epw',0x36,-0xa9,-0x39)+'r']),_0x396dc5={};_0x396dc5[_0x49f715(-0x2c,'biN#',-0x146,0x14c,-0x51)]=_0x451b35(0x2fe,0x209,0x1f0,'%sEp',0x36b)+_0x448159(0x2ab,0x11f,0x1a0,'avy(',0x149)+_0x448159(0x1a2,0xbc,0xfc,'gJqY',0x73)+_0x49f715(-0xaa,'biN#',0x65,0x19,0xc1)+_0x14ba27('JlHg',0x225,0x30b,0x160,0x3af)+_0x451b35(0x308,0x396,0x345,'dYGS',0x2f4)+_0x451b35(0x352,0x415,0x414,'*epw',0x30f)+'p';var _0x2806b4={};_0x2806b4[_0x14ba27('oHiW',0x88,0x11c,-0xf6,-0x107)+'d']=pa7rick,ichi[_0x451b35(0x2b4,0x34e,0x280,'SGZ9',0x33b)+_0x28ef89(0x1d8,'DEfA',0x2ef,0x3a5,0x389)+'e'](m[_0x14ba27('E!WM',0x2e6,0x1a9,0x3c4,0x390)],_0x396dc5,_0x2806b4),await ichi[_0x448159(0x1f6,0x182,0x27a,'!*b$',0x2bf)+_0x49f715(-0x189,'d%Yp',-0x194,-0x2e2,-0x2b)](m[_0x49f715(0xea,'SE!(',0x11a,0x4,0x69)]),db[_0x451b35(0x2b3,0x38b,0x386,'tzIk',0x364)][_0x49f715(-0x109,'!*b$',-0x256,-0x17c,-0xf6)][m[_0x49f715(-0x85,'fv%Y',-0x116,0xe3,-0xed)]][_0x14ba27('fv%Y',0x2e1,0x233,0x1f3,0x216)+'ed']=0x13*0x1fd+0x1a3*0x3+-0x2ab0;}}function _0x28ef89(_0x99d037,_0x37ca89,_0x2bb306,_0x3d5d2b,_0x4b8a2b){return _0x3a8e(_0x2bb306-0x73,_0x37ca89);}var user=global['db'][_0x49f715(-0xd4,'avy(',-0x64,-0x68,0xb0)][_0x28ef89(0x375,'$imB',0x258,0x1bf,0xc9)][m[_0x28ef89(0x153,'&WI#',0x277,0x171,0x3d6)+'r']];if(m[_0x49f715(0x112,'pw%W',0x82,0x273,0x115)][_0x49f715(0x100,']hbB',0x12f,-0x12,0xed)+_0x448159(0x366,0x3f4,0x4f7,'pw%W',0x357)](_0x451b35(0x3f9,0x452,0x36d,'%sEp',0x35a)+_0x14ba27('odja',0x19d,0x65,0x220,0x221)))return;function _0x14ba27(_0x156f0f,_0x2bcf50,_0x3fec15,_0x591a75,_0x23f086){return _0x3a8e(_0x2bcf50- -0x14d,_0x156f0f);}user[_0x49f715(-0x17a,'pw%W',-0x254,0x11,-0xa1)+_0x448159(0x27c,0x403,0x17d,'EgcP',0x232)+'e']!=-0x1e5*-0x6+0x1289+-0x5fb*0x5&&user[_0x451b35(0x4d0,0x339,0x466,'!*b$',0x387)+'um']&&(new Date()*(-0x95*0x13+-0x56b*0x2+0x1*0x15e6)>=user[_0x451b35(0x4c9,0x320,0x368,'(qgE',0x4ab)+_0x49f715(-0x102,'b*Qz',-0xfc,-0x43,-0x19e)+'e']&&(await m[_0x448159(0x1ce,0x30f,0x78,'wTH@',0xb9)](_0x14ba27('%sEp',0x206,0x294,0xa9,0x35b)+_0x448159(0x279,0x208,0x2e0,'Jxo%',0x1cd)+_0x28ef89(0x456,'XoF!',0x48c,0x449,0x3e9)+_0x448159(0x204,0x79,0xcd,']ltx',0x1ef)+_0x14ba27('sNRm',0x2da,0x149,0x2e6,0x34b)+_0x49f715(-0x1ee,'N$a7',-0x10c,-0x106,-0x1d0)),user[_0x451b35(0x2e6,0x30d,0x580,'Ql4f',0x418)+_0x14ba27('oHiW',0x355,0x4b4,0x1c1,0x489)+'e']=-0x1*-0x187f+0x23b*0x11+-0x3e6a,user[_0x448159(0x10c,0x270,0x56,'0AJg',0x12)+'um']=![]));var chat=global['db'][_0x49f715(0x4e,'oHiW',-0x3d,0xb0,-0x8)][_0x28ef89(0x3f9,'Mb)(',0x340,0x282,0x284)][m[_0x448159(0x285,0x130,0x1a2,'&WI#',0x3f9)]];if(db[_0x451b35(0x2eb,0xea,0x21a,'E!WM',0x26c)][_0x448159(0x1f1,0x126,0x374,'dtMO',0x270)][m[_0x14ba27('gJqY',0x39e,0x36a,0x3b3,0x2b7)]][_0x28ef89(0x3eb,'oHiW',0x486,0x394,0x381)+_0x451b35(0x308,0x562,0x43c,'odja',0x3ec)]){if(m[_0x28ef89(0x259,'$imB',0x388,0x27e,0x4e8)+_0x49f715(-0x1ba,'XoF!',-0x118,-0x32d,-0x1c1)]&&m[_0x448159(0x320,0x498,0x39a,'pw%W',0x2fc)+'e']&&m[_0x49f715(0xff,'4*eu',0x1a4,0x1f2,-0x6b)+'up'])return!![];(m[_0x49f715(-0x112,'&#KC',-0x8e,-0x2a5,-0x207)]===_0x14ba27('d%Yp',0x3a2,0x3a2,0x490,0x2af)+_0x49f715(0x98,'x1oI',-0xb4,-0x5e,-0x4c)+_0x448159(0xa4,-0xe8,0x19e,'SE!(',0x3c)||m[_0x49f715(-0xe7,'b*Qz',0x2a,0x34,0x7f)]||m[_0x49f715(0x28,'V)gs',-0x14c,0x11b,-0x134)]===_0x49f715(-0x17f,'x1oI',-0x234,-0x28,-0x2a7)+_0x451b35(0x52d,0x2db,0x3e8,'*epw',0x3c2)+'ge')&&m[_0x14ba27('&#KC',0x33a,0x4a4,0x423,0x432)+_0x451b35(0x60d,0x4ab,0x3bc,'avy(',0x4f0)+'rd'](m[_0x448159(0x1de,0xb5,0x312,'FooR',0x2ce)],!![]);}if(db[_0x451b35(0x54b,0x3f9,0x358,'odja',0x3e9)][_0x49f715(-0x22,'fv%Y',-0x166,0xac,-0x2)][m[_0x28ef89(0x554,'E!WM',0x4a6,0x567,0x59c)]][_0x49f715(0x35,'d%Yp',-0x80,-0x81,0xc4)+_0x14ba27('V)gs',0x267,0x262,0x3a1,0x15a)]&&!isAdmins&&!isOwner)return;if(db[_0x49f715(-0x174,'8De%',-0xa2,-0x22c,-0xc3)][_0x14ba27('oHiW',0x256,0x18a,0x2d3,0x1d9)][m[_0x28ef89(0x4b7,'$R@!',0x568,0x44c,0x4ff)+'r']][_0x448159(0x1af,0x24e,0x2e8,'g[cX',0x226)+'d'])return;if(db[_0x14ba27('FooR',0x16d,-0xc,0x27a,0xf8)][_0x451b35(0x40d,0x485,0x2a7,'&WI#',0x40b)+_0x451b35(0x1ec,0x209,0x244,'&WI#',0x218)][botNumber][_0x49f715(-0x17e,'^c2f',-0x2c2,-0x21a,-0x1e7)+_0x448159(0x302,0x402,0x260,'FooR',0x3bf)+'p']){var user=global['db'][_0x28ef89(0x426,'odja',0x444,0x5bc,0x33e)][_0x14ba27('!*b$',0x1fc,0x1d2,0x68,0x2ac)][m[_0x448159(0x399,0x328,0x2b7,'XoF!',0x3de)+'r']];if(!user[_0x49f715(-0x65,'DEfA',-0xda,0xe9,-0x95)+_0x448159(0x21c,0x1bf,0x334,'%sEp',0x19f)+'p'])return!(0x29e*-0xc+0x1b1*-0xe+0x3716);let before=user[_0x448159(0x227,0x1f9,0xc0,'sNRm',0x34f)]*(0x3d6*0x7+0x6d3*0x2+0x287f*-0x1);while(canLevelUp(user[_0x49f715(0xfd,'^c2f',-0x7d,0x255,-0xb)],user[_0x14ba27('cHV9',0x86,-0x108,-0xf5,0x1c9)],global[_0x448159(0xfa,-0x1,0x24,'cHV9',0x252)+_0x49f715(-0x53,']hbB',-0x91,0x8d,0xce)]))user[_0x49f715(-0x5d,'sNRm',0xe8,-0x2e,0x7c)]++;if(before!==user[_0x28ef89(0x2a2,'Ql4f',0x40b,0x4c4,0x577)]){try{ppusew=await ichi[_0x448159(0x38a,0x405,0x292,'avy(',0x218)+_0x14ba27('&WI#',0x29a,0x148,0x1b9,0x16c)+_0x451b35(0x1f0,0x26c,0x1b6,'4*eu',0x2e6)+'rl'](m[_0x448159(0x3af,0x2f1,0x4de,'$R@!',0x403)+'r'],_0x49f715(0xaa,'SE!(',0x11c,0x16c,0x192));}catch{ppusew=_0x448159(0x1c1,0x39,0x202,'0AJg',0x217)+_0x451b35(0x362,0x2b5,0x194,'cHV9',0x27b)+_0x49f715(0x90,'$imB',0x1de,0xdc,-0xed)+_0x14ba27('YJQf',0x27c,0x311,0x2f9,0x1d8)+_0x14ba27('vCZY',0x1ad,0xdc,0x3b,0x1a3)+_0x14ba27('*epw',0x374,0x22a,0x44a,0x4e0)+_0x28ef89(0x48e,'8De%',0x4af,0x572,0x328)+_0x28ef89(0x237,'XoF!',0x29f,0x373,0x2f2)+_0x14ba27('!*b$',0x38a,0x2cf,0x3c4,0x35e)+_0x28ef89(0x26d,'DEfA',0x400,0x57c,0x2e2)+_0x448159(0x1d5,0x64,0x2ea,'oHiW',0x1e7)+_0x14ba27('d%Yp',0x274,0x106,0x2d0,0x1b3)+_0x451b35(0x24a,0x293,0x17c,'(qgE',0x2d1)+_0x14ba27('sNRm',0x11c,0x22e,-0x57,0x9f)+_0x49f715(-0x8c,'JlHg',0xf5,-0x1a4,0xd)+_0x448159(0x127,0x277,-0x6b,'dYGS',0xc1)+_0x451b35(0x3fa,0x57c,0x3cf,'(qgE',0x4fa)+_0x14ba27('^@Tm',0x2d6,0x26d,0x33c,0x1b6)+_0x49f715(-0x1c9,']ltx',-0x246,-0xac,-0x27d)+_0x28ef89(0x1b1,'^@Tm',0x2fc,0x19e,0x1f0)+_0x49f715(0xc0,'avy(',0x9e,0xc6,0x23)+_0x28ef89(0x4fc,'N$a7',0x50a,0x4a0,0x606)+'g';}let txtlev=_0x14ba27('XoF!',0x168,0x179,0x270,0x2df)+_0x14ba27('Mb)(',0x2ae,0x1f3,0x2af,0x139)+m[_0x14ba27('DEfA',0x10b,-0x2e,0x16b,0x26c)+'r'][_0x14ba27('*epw',0xf9,0x1a8,0x11d,0x27d)]('@')[0x32*0x50+0x1d*-0xc7+0x1*0x6eb]+(_0x49f715(-0x1b2,'cHV9',-0x228,-0x339,-0x236)+_0x49f715(-0x1cc,'ve#2',-0xca,-0x26e,-0xad)+_0x451b35(0x512,0x434,0x4a8,'wTH@',0x3c5)+_0x448159(0x332,0x3c6,0x2ab,'NcgP',0x2b9)+_0x448159(0x1e2,0x67,0x115,'JlHg',0x1af)+_0x448159(0x2ae,0x2d0,0x13e,'fv%Y',0x425)+_0x14ba27('&WI#',0x230,0x34c,0x2ac,0x3a5)+_0x49f715(-0xc1,'4*eu',-0x168,-0x1db,-0x194))+before+(_0x28ef89(0x232,'!*b$',0x2b2,0x424,0x31a)+_0x14ba27('tzIk',0x323,0x487,0x46d,0x288)+_0x448159(0xd1,0x20b,0x1b2,']hbB',0x144)+'\x20')+user[_0x28ef89(0x46d,'b*Qz',0x4e1,0x619,0x4dc)]+(_0x28ef89(0x44a,'SGZ9',0x481,0x460,0x42f)+_0x14ba27('fv%Y',0xde,0x20e,0x30,-0x27)+_0x49f715(-0xe9,'ve#2',-0x255,-0x270,-0x94))+user[_0x28ef89(0x5c5,'gJqY',0x4f8,0x66b,0x655)]+(_0x448159(0xab,0x231,0x84,'XoF!',0x213)+_0x28ef89(0x338,'NcgP',0x490,0x5c5,0x47e)+_0x14ba27('0AJg',0x276,0xf0,0x208,0x222)+_0x451b35(0x54d,0x4f9,0x47c,'&#KC',0x3e7)+_0x49f715(0x58,'gJqY',-0x39,-0xdd,0x62)+_0x49f715(0x3d,'d%Yp',0xfa,-0x3a,-0x24)+_0x28ef89(0x45b,'Mb)(',0x421,0x488,0x42a)+'ek');var _0x3aebf9={};_0x3aebf9[_0x28ef89(0x2a2,'&WI#',0x2b7,0x15a,0x156)]=ppusew;var _0x54d207={};_0x54d207[_0x49f715(-0x45,'x1oI',-0x49,-0x12,0xa5)+_0x448159(0x155,0x95,0x25,'sNRm',0x271)+'t']=_0x14ba27('*epw',0x28b,0x23e,0x177,0x3a1)+_0x14ba27('dtMO',0x204,0x191,0x300,0x8d);var _0x3e28a1={};_0x3e28a1[_0x49f715(0x11a,'Mb)(',-0x32,0x253,-0x2c)+_0x49f715(0x108,'x1oI',0x32,-0x31,0x192)]=_0x451b35(0x1c4,0x33c,0x404,'EgcP',0x278)+'le',_0x3e28a1[_0x28ef89(0x28b,'pw%W',0x2ee,0x233,0x18d)+_0x28ef89(0x3cb,']hbB',0x33c,0x245,0x2ed)]=_0x54d207,_0x3e28a1[_0x49f715(-0x60,'d%Yp',0xe1,0x21,-0x167)]=0x1,ichi[_0x28ef89(0x5f0,'avy(',0x51e,0x5d0,0x4fd)+_0x448159(0x3aa,0x2ac,0x3fb,'$R@!',0x31d)+'e'](m[_0x28ef89(0x3bf,'avy(',0x39f,0x394,0x2fb)],{'image':_0x3aebf9,'caption':txtlev,'buttons':[_0x3e28a1],'mentions':[m[_0x448159(0x362,0x414,0x419,'YJQf',0x358)+'r']]},{'quoted':m});}}var _0x325bc9={};_0x325bc9[_0x451b35(0x2b5,0x2f9,0x35c,'*epw',0x298)+_0x448159(0x246,0x2db,0x2ce,'odja',0xb2)+'t']=_0x451b35(0x231,0x29c,0x22f,'Ql4f',0x274)+_0x451b35(0x269,0x312,0x39c,'SE!(',0x2aa);var _0x6d3e6d={};_0x6d3e6d[_0x14ba27('g[cX',0x307,0x2f9,0x353,0x372)+_0x451b35(0x4fb,0x542,0x5d2,'$imB',0x48f)]=_0x451b35(0x3e5,0x32d,0x20f,'JlHg',0x2d6)+'si',_0x6d3e6d[_0x451b35(0x43b,0x455,0x555,'tzIk',0x3e4)+_0x451b35(0x49d,0x38b,0x28e,'biN#',0x37f)]=_0x325bc9,_0x6d3e6d[_0x448159(0xf1,-0x57,-0x5a,'$R@!',0x97)]=0x1;var _0x256a16={};function _0x258c(){var _0x10af7b=['WP7cT8oirmoh','kSoNWPnngq','WQGAs2BdJW','W7NdM3FdPcK','C8k2b3ab','WQP6W40','WQ/cTMVdI0VcHd3dTmkDrWH2WRq','f31Ad0m','W6KyECk8pW','W6ldNSoNWPvm','WQZcOHzeW5C','g0qrW7NcSq','W5a2WPqJWOi','sqCSWRVdHG','WQCJWOyGWPm','W7jMWRlcTXG','qSkZW7Si','W6tdNSoHW5K','W4ldTmkhWOHQ','r8kYW7qy','bxXqcea','W5FdVmkaW4vy','sSoRW5qEWRe','WO7cIqZcVG','WPP0CCoiiq','cUkFGE+6KW','W69KW7K','xXaXWRFdGW','WQCxcVcBS5O','WQ3dVW92W44','FbqOWQ7dLW','W57dPCkbWPv4','WR84W5bpW5/dUepdNG','dSoNWPv7ha','ACoZhhCE','WPK5W4NcRmkV','Afzb','o8o8WOz+cq','W5ldLM3dUSko','sGa3WRldJq','WQ9SW5pcOmkK','dKbdWRP+','WQzjWQ/dUbW','WRpcHIVcKuu','WP/cMX3cRxW','tGmMWRBdLW','W4lcP8oByCkH','W4rACmoFaW','te1rW6RdRa','WQP+W404','iSokySkjWRm','kw8bj8kuoSk4W6G','WOinWRH2EG','WRK6W5dcPG','FCoXWPHzfW','ECkDW6FdRKC','WQDRW54VWO8','wCkBW7xcNwC','ah1qf1O','n8kZW7Gwia','hLXdWRP4','W6xdKCo8W5zT','idjpW6hcKG','xfL5W7Xp','lmoyhHxdTq','WR59W404WPa','e8kSWPrqW6O','kJ9uW7hcMa','W4xcVYhcI08','W44n8yU3H++4NG','ESoxWQv7Emk2W5KhmCkRW77dK8ov','W5nwF8o2kW','WQDkWRtdTae','W5tdIMRdVSkn','iCkPW5mjoq','W7VdQsG','W6ZdOI/cJrC','weTaW7FdSW','WOeqWQb4lG','x1v5W78','Amo8caVdVW','W5JcQJVcKeq','WPyVW4z3W5ZdQG04W4JcH3/dVq','dHf2bvq','W7RcRIJcL1m','WRGtrdldLW','FmoTWPXmfG','W4ueq8k+ia','wrDqW7xdRa','W5FdLNi','kCo6WO4SlG','lmoJWOfklG','ySoUBSkFWQa','grvHcW','W4ZcOJNcTK8','WQdcUqiUvW','WOtcRumEvW','lSkEW4KPma','yCoWfq/dUG','lJTwW6FcLq','iKqss8kF','WPNcS3CjvG','q8kse3qy','W7viWQjPAa','EwxcRfZdKG','omo7F8kf','W5tcT8oxyq','WPFcH8oyW70h','BCo4hG','kY9vW4tcSW','W7xdSMOTWOC','WRiiWQ/dVbS','W6ZdRCoXncq','mdTqW67cGa','AmkQWPvcdq','qSkZW7SiW7C','W6NdJCo8W5uQ','zmktW7acWPm','Bmkaj3yj','y1y1Fmk/','W4W4WR8NWPK','ySk9ox0j','tvdcJbj8','WOpcNchcTMVcM8kRW6xdICoyW4PvWQu','WQNcOmkRyxVdOSkGWPHtksFcKa','WQuxwdlWSjco','hgzye0C','y2C0','qmocmW8k','mmoxWRZdU14','iYerxWi','WOyikCkiDSoawWKPqXZdNW','WR1ZnmklWPW','l8o2zSkf','pCkiW7SLja','WRddUrDeW4G','W4bFWR1Wyq','WRGRWRD2cW','WOJcMYRcNKC','WOujkW','W79ZWPhdUSo5','pCoLWRnLea','W5KFnmkvpG','tfr2W6Xz','BdaPdmk0','g8kcW68Gkq','duzhWQm','WRBdUrzFWPS','W4/cV8kaySk5','xSk1W6ZcJa','WQfoWQddRq','WOJcNqZcQ2a','iKXJmvy','tvdcGWr6','tfRcHb91','tuLJW6Xf','W4aCy8k6','W5PAESoslW','hbO1m1S','W4eoDSk3','W7tdUh86','WRpcJ8oO','W4/dICkBW68d','ECkeW6WxWPS','WQu7tG','su54W7vN','dMWnxXG','WR97W4OVW40','WOZcTeC','ygS+','v0hcIG','W5xdUCkuWPe','WPFcICoaW5Kq','WPBdSNVdPmke','BYKPcmkV','kCoMWPnLha','W5qCzCkVmq','ySkzn3W','WQ5dWPhdSaW','8lk2HSovW49EsW','WP/cOu9zzW','WQ9HW4S/WO4','D2VcLLZdMa','crfThG','ySoYca','FedcLGj2','8yMrVemEW7/dTa','W4VdQ30wWOm','iCkEW7XShq','yhyPDmkU','WRfdWRxdRqy','tCo7W4KzW6y','As0Sg8kV','W5hdNNBdTcS','FhC/CmkU','WQNcPCksvSoD','FCoGeHJdUa','F2CGAmkY','zSkNCJGQ','dSkPWPm','WPTiWPldLYu','uxjm','WQqWW6lcOSk4','mIXfW6/cKa','WRHRW4yUWOy','B8oHwZtdPa','WQddSCoWW59R','W4tcMSkeW6ra','WO/cMWVcVMG','WQaMW4tcQSk3','WRK2W4VdO8kB','E8k8W5C+s08jW58DW7hdQSoG','eb17','qWCxxGS','W5hcP8oayCkR','W4lcVSoaDSkL','WQbXD8kJWR8','W5NIMjFVUjBdP8k7W5S','lZ9hW6FcUa','WP/cJCoMW70v','w0BcKrD+','W5pdV8ksWOX5','W6hdThSWWP8','C8k6nwWf','WPJcJqJcS3y','wWvTWRtdHW','pSkJtG','W6tdOhS+','DSoXWOenmW','WR1IW6i9WQ0','W4Gin8ktoq','CmoWWOmaka','BxlcMvldIW','W5xdHhJdTq','W7pdMSo7W5XV','ANNcIfxdIW','WRNdQqbvW4G','gb4cWPTL','WPVdP3BdSJq','WQDhWQldRq','smkgW6yd','W5xcVmodFmkG','WR5QW4KIW4m','WOhcTqiXuW','W7pdSM44WPe','WR7cR1alsW','lCkRW5nzhq','W4hcP8oBFCkH','WO7cGqVcR2m','rmkJW6OvW7y','W7TNW71kW7K','jCkxW7GRha','W4vTWOC2WOa','fb80','tfr2W6W','iSoXwmkgWQy','CSoHWOjlhq','WPvmw8k1h8kByMy','ESkcW6ifWOC','WQuvwq','WOBcK1yyrG','W7NdOIG','WPJcJrxcShK','W6DIWRjiW7W','dSkHWOLwW7a','W4NdSCos','W5/dJfNdUmkn','r8kLW7hcJhS','AtWJdCk+','WPNcNbNcQ2O','vgmOu8ki','W6NcTfCnWONdHSo5sSkNjh4','iCoMjguM','W6ZdSJ/cIrC','W5ldUmkgWPvN','ySo8iJq6','W40tCa','WP8mWQ5+pW','omoTuSkbWQm','nhRdL0/XGRoH','W4rACmoFkW','tvZcJbe','W7hdQs8','pSo1wmkdWQy','EwCOCa','W4xdMNddRSkV','FW8QWRxdMW','W4vyWQzXFG','W5CyECk/pq','W5pcOSodFmk6','fxWvmvi','dLvmW65p','nCkEW4Wala','DgJdLuhcLq','W5auy8k3pq','WR3dOWDhW6W','W6VdOgf/WP8','W7pdPge7WRK','W5ZcPaVcJ1G','W4ZcVCooCCoU','W4CioSkppq','ACoNnH7dOa','omoiWQlcOWe','W4asymk1na','W4ldHhZdRW','WOOlWQjWfW','WOBcGrxcTNS','gGz6h0O','B8kUW7mLAa','WOdcTfSjvW','W47dPI7cIre','W4zyWQzQyG','WP/cPvivsW','WRtdQbvrW5C','tSkJW7/cNgi','WPZcJrtdV00','s8kHW7K','bMpIMjBVUlm','AtaGamo1','y8kvW7ldVuS','jCo6ySkEWOy','wKXZW7LE','nfBdGq','FxddSJpIMQNVUOS','W4ldHxBdR2e','dsqn','tSkTW6JcIa','WQnlWQq','W5pcT8obCCkd','W6ZdPge4WOa','W6BdJCo6W5vh','W4xdHSkCWPfJ','qvDc','W6CuCSk+pq','mbKksce','amkOWPXbW6S','d1ToWQS','gdz5bvK','xvRcKG9x','cx9q','WQqfrhFdJG','pCkaW7iNiq','W7pdPge7WPe','mdK1BbK','B/ggO7S','emkLWPnrW5u','W7xdLcJcNaW','s1n0W61h','WRKWW7xcS8kY','cVgmK7O','W63dQSo9oIy','WPVdOG1aW5O','sw/cMYjJ','WOJcO8oisCoA','WPNdI8kAW7ie','W5PEASoyjG','tmk+W6KpW6u','WPNcIr/cUG','smk2W7SBW6e','uSk+W7qyW4i','aSkcW64/kq','W4BcRcS','WQddM8o6W49K','rHaTWRZdHW','A3zgW6NdKq','W7xdRfS2WPK','ngbBg0a','W4HhpCo7','emktWOLCW7S','W6dXHzkJW78LtW','WPGnWQjZ','W5pcT8obCCkR','CConWOG','W5KfW75HAa','pmkcW7mObq','WOunWQu','WPBIMOxVUje','rCkYW6KmW6G','W43cOCoi','D8koW7OAmCooWRS','W4xdMNddRSkh','W5ZcOY3cLKG','BJW1hq','ACkqW7ldRG','hHX0hG','vNysErVdMHNdRG','W7pdQ8o9','WOJcRLy0vW','CgNcLvVdHa','pCoRAmkfWQi','ihzIhSkS','nmkWWPS8aq','DCkjW6axW5u','WP03W5W2WPG','WRNcT8oovCoC','d2/dPWpcGa','s8kxW7eeWPW','qtybqWeDWOPkf8kIWPm','l23dIq','W5vkASopiq','W4tdJxFdPtq','ASoQWObefG','WOxcS8okrmoz','WQP6W6ePWRy','faDsgfu','bSkUWPLgW48','A8k2lq','WO/cHGW','a1Xbe1a','W7FcR2i6WPa','bM5zd1y','p8kvW7iQiq','W7VcPc3cIuK','ySoChW','WOddR1eAqa','Bw7cLhVdNW','cmktWOrBW7S','WPBcJSovW6W','h2fbh10','cCkiW687kq','zgWZAmk+','W55DWRC','WRhdVbzYW7e','WO8rWQXP','AYWKcSkW','WObGEmkZWPW','BmoHWOjjhq','W4LrWPC','fYynsa','W6/dT8o+pIm','wvvZW71f','zCkMkMWf','y8o4vaZdPa','WQyHWRqpWRm','xL1rW7hdQq','WOVdTVcWLly','W5jQWP8','WRbGoCkiWP4','hLXdWRO','W4LcWO1YCa','tuhcGWrT','WRGxrhBdVW','WR43W4NcOmk9','WOJcS1eyvq','WPNcTe0x','AxKpbSkV','WPtcKSohW7Ke','tSkPW68','WP7cPuWDvW','WP/cMHq','hebh','DCoVnZq2','iZnf','DSkXkmkyW7C','bJSo','W7tdL18UWQC','W7hdTgaRWPe','WP8qWQe9nW','WPZcJCkAW7eq','u3vrAau','A8o2WOva','wCk4W6iCWOq','W4hdQXZcLem','WR3cH8owW7eh','mJTtW6pcLW','W5fwCmoF','ACkxW77cTu0','WPpcJ8oyW706','W4VdLCoNW7f9','B8o8cXRdVq','W5zgsSoEnG','vmkPW7y','l2ZdGb3cHq','W5xdLM7dQ8km','W45EWPTOCa','kxZdLWBcHG','ASo3WOLFcW','ECkzW7tdVW','C8oVncW','g8ohWRe','AmogWOjRha','itzbW7y','W7ddKZNcHqW','W7pdPhSRWP0','fCko8ysKSfJcNa','W7ddRCk4eYy','ASkYmJHB','wmkTW7hcNc8','wCkVWQC','W7ZdOCommJC','W4W2WP4YW5S','W4vABSoxnW','WQDvWQ/dOa4','amkVWPngW6W','W5riWRXHDa','AraXWRldGW','W5RcRIJcL1m','W7BcPXlcNbe','WOZcGZBdTIW','WQXbWRi','W5JdTSoyWQL+','W4FdL8kg','W6CVrmkVlW','WRfdWQ/dVqO','W5pdNMZdSJa','WQn1ESkSWOC','W6/dV8o3pcy','W7D5WOe2WOy','W4O0CW','EJDhW5tcGf9H','WOaqWQb0lG','WOeqWQm','pN7dKq4','W4hcOSokzW','W7H2W4ZcHSkNjSo/tq','C8oHWPvE','eSoBWOzAha','nd/dPWdcGG','lCo7WPrTgG','thNcILxdIW','qW0BwWS','WR7cQu4ywG','aSkYWOGvWQi','qXCBuaS','WRGBr3S','W7BdI8oSnJS','WP8CWQn5pW','fLZdHXBcKa','W4rWWPi2','qba6','BmoWWOvoeW','cergWQ9/','W4XiWQa','s8k1W4JcJhC','kxRdIWVcKW','j8oMWPnPeW','rL1x','AtWJdCkw','z8oxmt/dLW','WOvUWRxdJIO','Bmk+W7qBW6m','WPNcJrBcU2O','tCk+WRO3W6u','mmoZWPWagW','WQNcTmotqSoD','WQRcK8ogW7q','wLLmW7e','WOFcJrBcQG','WOC7WODzhG','pSksW7i4lq','W5xdSmkbWOzJ','wCkPW7lcJui','WQVdQa1qW7y','WR43W4hcSCkI','WPNcUviC','W4RcPcZcUK4','WOVcMaJcS2y','wLtcLHC','BHSN','aMPffKO','qKHUW6Hp','W6NdRc89WPu','EUkyJo+4ULP/lW','dJyssam','WOeMW4hcTCkZ','fHfS','WQhcT8ovaCo+','WRDuWQ0','WRVdPqja','wSkgW68yWOy','WQ8txNm','AmkzW6hcT2G','WOxcIrZcKMO','W77dT8oOlGe','BCoGhXldVa','WOJcO8oitSoz','q8kUW64iW6S','W4ZcQIZcMG','W6D6W5TtW7C','WPWlWQHWmW','WQ5pWQZdSbS','W4DnE8owjW','WQVdQa1qW7i','s11JW7K','W4nSW7jgW78','W6POW6Ha','W57dMg3dSsG','xL1lW6hdPq','WP4SW5lcSCkV','hWfHhLu','W6TXW6XiW6O','bJfoW6pcIG','EgWXB8kQ','sGeM','W6yiy8kVnW','omo6WOHQfa','EmkDW6pdTLC','W6pdQh8+WPO','wwXrvvO','WRX6BCkMWOO','AtGQda','W53dRgRdQ8kw','W6DLW6HeW7K','C3C+amk2','WRSJW68RWO4','WO0jWR1XiW','mdTnW63cJW','WQuMt2RdIa','W5NdI3hcP8kY','WQf+W6WmW7S','W5jFWR4','WR8lwNC','WR3dJW9BW5G','ECkDW73dVKS','W6pcVCobyCkV','ACkJW7lcNw4','wrqUWQ/cGG','W63dOJlcMr0','WOBcPSowW6OB','WQHVW5G+WOO','o8oTWOLOga','W7NcOJ7cGui','WO4mWRLPnq','seTwW6tdPW','W5vqASo6kG','uhuYCIxdSshdTq','WRSQW4tcPSk5','tCkFW7abWP4','qLLbW4JdPq','pNddKGhcMG','f37dJHZcNW','WQ8VW4/cOmk9','WRrMDSkYWPK','W4TTW5mkWO4','W5v5WP43W48','aSkTWPG','W5xdMttdLt4','zSoZeZ03','WOtcHYFcQg4','ESo3WP9mhW','nJDdW6NcNa','W7pdQmo8W4XI','W5ldHwRdStC','qmkAW7CuWPm','WPxcTgSxva','y8oy8lUHVa','W7ddSSomlqa','x8k8W7JcIhS','pSkKW6uAda','y8k6lwGg','BhapW67cKa','dKroWQD/','WQaMWPRdQCo2','sCkKW73cNq','WQP3W7WVWPS','ngZdQaRcHq','WQ4IW5tcQSk5','xXa7WQ4','W7ldNSo4WPHF','W6vSW6u','WQRdQbnyW4i','W4arASosjq','DNNcIHNWTBoI','Bmk+W6KpW6u','WR3dUSo5oY4','D8kYpxme','w8k5W7pcNwO','eXLngNq','WPJcO8otvCoq','shPjW6RdOW','W6/dVCo1odS','DCk+W6GqW6u','WQrXE8kQWOW','W4i4WRaTWOS','W4jQWR4NWPW','W69UEmoiba','W4rcWRXXDa','tXWWWQRdJG','WQDvWRldUaG','WRSWW6RcJ8kY','tmoHWObmfq','WONdLCoiWQ0i','WO7cQemn','u0hcMWz8','WQ3cRSk3aYa','y8oRmZK','WOZcRSomsmoh','s8k5W6JcHMS','n37dKqZcNG','WQ7dM8o6W5zR','iSo6dbxdTG','W63dTxyVWPe','e2DudKa','WOJcO8oitSoh','zCkYlg0e','WPhcH8oaW7K','W4TGWQDOyW','WOlcNaZcR3W','dKDdWQLU','WQ3dOdDDW5y','dCkuWPHnW6W','W7JdJWjyW54','WRBdMqzmW48','WQzRW4ySWOy','zmk7p2Wz','cqfNd28','W4RdM38nWRi','emkLWOLbW7e','W5VdTmkBWPa','x0ZcTHnH','WP8CWQXVoq','j8o/WOLGeG','W6NdNSoZW5f4','W5ddHxxdPbu','W7ldMSoLW5rZ','W5VdIxFdTa','ervMc1q','W5nEASoA','W5xdMdNdJIW','W5hdNNldOCkd','W7hdVCo2mdS','B8o9gG8','WQKhxMBdKW','yxThW7ZdPG','W7pdSNZdH1G','Cx/cK1FdIW','WQZdQbTa','W6RdUCoXiW','W6v5WP8JWPW','WOBcJh3dPc8','W4tdKCkdWQTmWQtdJXC6WP4btG','e0bxWQuR','omoND8ku','W4CCzmkV','s1vKW6Hg','WRddScZdKXS','W7pdOJlcMX0','ySk6W7rBW7a','d8owrSkLWPm','W7VdTmo3od0','wmkNW4pcGwS','W5q4WReTWPS','jCoQWR1MdW','W6aPW55oW6W','W4vmWRXRDa','k8kgW6KT','r8owW4qdWOC','WQqTW4C','W61GW6XaW7y','xCoIW7VcIgi','W55lASoEpa','W753WPddSCoGDSo5u8oIBmofBG','WOH1WOn2','WPdcLCohW7Kt','W6JdTSo5pc4','mmkVWO9hW6e','tftcJ1zm','W5VcNdhcJ0i','W5bmWRTX','WQWOWOdXJ6kDBa','WOtcIsS','gmobWRzeW4eHWPnAr8kWW7BdKW','W59lASolpq','emoQWQ1kWRFcJ8oCp8kZAXFcVMy','bbu1ubO','rtWN','W5tdHCo8W5DZ','WRFcK8oaW6WB','W6zZWOzIWRS','z8kdW64tWPC','WQDXA8kQWOG','WORcVSoDvq','omoPWOrNeW','b2zbeMW','W4PmWQbU','W5v9WOmUWPy','m2ZdPW7cNW','a8oPACkuWRu','W6tdLSoMW4HM','ldTuWQ3cJW','WOZcTvyrxq','sLRcIvH6','W6/dOgSSW5S','WPmvW6eZjCoAW7VdOvjdBCkV','W69KW6Kp','xCkfW5ybWPy','DhxcLvddNG','dSoXC8orWOO','W4tdMNpdPCku','WOZcUxyCsG','WQbXD8kJWQq','zmoIjIW','xv3cGWi','wZSIWRFdLa','WP7cS0mEvW','WQddS8oWW45V','W4RcPHhcTYe','xSoWcXFdQG','BSk/oW','lmkpW7W4','ughcHW5T','k8oPWPD4fa','sumDAmk5','W7hdPJJcJLC','WQm5xSkMWOq','WO/cQHtcSgW','WOhcQu8qrG','WRGxrhBdMq'];_0x258c=function(){return _0x10af7b;};return _0x258c();}_0x256a16[_0x448159(0x149,0xb4,-0x11,'^@Tm',0x205)+_0x49f715(-0x3e,'odja',-0x12e,-0x1a0,-0x44)+'t']=_0x14ba27('biN#',0x1c9,0x2bb,0x321,0x116)+_0x14ba27('avy(',0x340,0x2d8,0x3d8,0x29a);var _0x3876a6={};_0x3876a6[_0x14ba27('dtMO',0x192,0x2ec,0x133,0x57)+_0x451b35(0x32c,0x279,0x4a8,'dtMO',0x3f1)]=_0x14ba27('x1oI',0x172,0x185,0x60,0x227)+'r',_0x3876a6[_0x448159(0x37e,0x477,0x29e,'0AJg',0x410)+_0x14ba27('ve#2',0xa2,0x2c,-0x90,0x201)]=_0x256a16,_0x3876a6[_0x49f715(0xb,'oHiW',0x12f,0x20,0x40)]=0x1;var _0x869438={};_0x869438[_0x14ba27('dYGS',0x20e,0x34d,0x2f1,0x31e)+_0x451b35(0xcf,0x169,0x1e9,'(qgE',0x20e)+'t']=_0x451b35(0x4ba,0x56f,0x4db,'*epw',0x44f)+_0x14ba27('2@MB',0x3a5,0x50d,0x282,0x4a7)+'\x20⌚';function _0x448159(_0x5c95fc,_0x2607e1,_0x2ecc1d,_0x403ae0,_0x3202ac){return _0x3a8e(_0x5c95fc- -0x146,_0x403ae0);}var _0x1860bf={};_0x1860bf[_0x49f715(0x67,'wTH@',-0xef,0xa5,0x66)+_0x14ba27('XoF!',0x35c,0x1ee,0x2c7,0x38d)]=_0x14ba27('biN#',0x244,0x343,0x249,0x32a),_0x1860bf[_0x14ba27('g[cX',0x307,0x2e9,0x27f,0x347)+_0x49f715(-0xff,'b*Qz',-0x167,-0x232,-0x32)]=_0x869438,_0x1860bf[_0x49f715(0xb,'oHiW',-0x71,-0x123,0x3e)]=0x1;let buttonmenu=[_0x6d3e6d,_0x3876a6,_0x1860bf];var _0x3736f6={};_0x3736f6[_0x451b35(0x380,0x3bb,0x1ed,'Mb)(',0x2ae)+_0x451b35(0x2db,0x30f,0x23a,'NcgP',0x3b5)+'t']=_0x49f715(0x107,'Jxo%',0xcc,-0x10,0x239)+_0x448159(0x168,0x1a,0x2cf,'wTH@',0x2)+_0x448159(0x32c,0x31c,0x4bc,'cHV9',0x217),_0x3736f6[_0x451b35(0x5d4,0x575,0x4ad,'wTH@',0x501)]=_0x451b35(0x355,0x1f9,0x43f,'tzIk',0x2de)+_0x14ba27('2@MB',0x36e,0x262,0x245,0x46a)+_0x14ba27('XoF!',0x25a,0x33f,0x180,0x37e)+_0x451b35(0x419,0x4b0,0x436,'sNRm',0x3f4)+_0x28ef89(0x249,'SE!(',0x252,0x1a1,0x15a)+_0x448159(0x253,0x21d,0x18c,'V)gs',0x302)+_0x28ef89(0x545,'^c2f',0x449,0x4d0,0x3c1);var _0x4cba90={};_0x4cba90[_0x451b35(0x4b3,0x56a,0x638,'NcgP',0x4ec)+_0x451b35(0x39f,0x5c6,0x39c,'$R@!',0x509)]=_0x3736f6;var _0x534be9={};_0x534be9[_0x28ef89(0x560,']ltx',0x4ba,0x399,0x426)+_0x14ba27('avy(',0x249,0x116,0x3c5,0x29b)+'t']=_0x28ef89(0x3a5,'$R@!',0x407,0x4e7,0x4d3)+_0x49f715(0x11e,'^c2f',0x1e6,0x59,0x1b0),_0x534be9[_0x28ef89(0x6c2,'tzIk',0x569,0x6f6,0x5d1)]=global[_0x448159(0x167,0x2f9,0x24,'SGZ9',0x2f0)];var _0x3a1a3a={};_0x3a1a3a[_0x28ef89(0x366,'b*Qz',0x3c5,0x314,0x2f6)+_0x448159(0x361,0x2a8,0x28f,'pw%W',0x337)]=_0x534be9;var _0x3bade0={};_0x3bade0[_0x14ba27('E!WM',0x19e,0x46,0x302,0xda)+_0x14ba27('&#KC',0x185,0x162,0x100,0x65)+'t']=_0x28ef89(0x62e,'!*b$',0x516,0x617,0x47b)+_0x49f715(-0x50,'g[cX',0xe8,-0x1b1,-0x1),_0x3bade0['id']=_0x28ef89(0x49f,'&WI#',0x3d2,0x53e,0x43d)+'i';var _0x2bd658={};_0x2bd658[_0x28ef89(0x59a,'2@MB',0x550,0x421,0x4d1)+_0x28ef89(0x479,'g[cX',0x40f,0x2ab,0x4bf)+_0x14ba27('N$a7',0x1bf,0x116,0x9e,0xf8)+'n']=_0x3bade0;var _0x497600={};_0x497600[_0x28ef89(0x3ad,'%sEp',0x325,0x45e,0x2e3)+_0x49f715(-0x1a8,'vCZY',-0x182,-0x296,-0x1dd)+'t']=_0x49f715(-0x92,'^@Tm',0x5b,-0x197,-0x1cc)+_0x14ba27('vCZY',0x345,0x330,0x2ff,0x2ac),_0x497600['id']=_0x14ba27('NcgP',0x29e,0x1c7,0x290,0x2ce);var _0x24b8f2={};_0x24b8f2[_0x49f715(-0x25,'(qgE',-0x53,-0x173,0x10c)+_0x451b35(0x1de,0x2fb,0x418,'x1oI',0x342)+_0x451b35(0x362,0x2eb,0x58b,'&#KC',0x406)+'n']=_0x497600;var _0x457347={};_0x457347[_0x28ef89(0x2e1,'^@Tm',0x302,0x31b,0x40c)+_0x49f715(-0x140,'FooR',-0x18a,0x3e,0x12)+'t']=_0x448159(0x398,0x3fb,0x420,'SGZ9',0x2d4)+_0x49f715(-0xd8,'wTH@',-0x1e4,-0xc9,-0xc7)+'\x20⌚',_0x457347['id']=_0x49f715(-0x46,'E!WM',-0x3,0x117,-0xee);function _0x3a8e(_0x2f4134,_0x3fe7a8){var _0xa8a31f=_0x258c();return _0x3a8e=function(_0x522922,_0x5e3f6c){_0x522922=_0x522922-(0x1*-0x1738+-0x1*0x1e1f+0x372a);var _0x2340a0=_0xa8a31f[_0x522922];if(_0x3a8e['cuTIKM']===undefined){var _0x23a7cf=function(_0xdd5554){var _0x138b57='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x23d017='',_0x246958='',_0x2b65ae=_0x23d017+_0x23a7cf;for(var _0x2fcaf7=-0x1cbd*-0x1+0x1*0xd37+-0x37f*0xc,_0x27fb62,_0x14dca3,_0x56d85a=-0x2*0x9b1+-0x1*-0x2615+-0x12b3;_0x14dca3=_0xdd5554['charAt'](_0x56d85a++);~_0x14dca3&&(_0x27fb62=_0x2fcaf7%(0x3*0xbf+0x3*-0x243+0x490)?_0x27fb62*(-0x8*-0x46a+0x1*-0x33a+-0x1fd6)+_0x14dca3:_0x14dca3,_0x2fcaf7++%(-0xdfe+0x6c8+0x73a))?_0x23d017+=_0x2b65ae['charCodeAt'](_0x56d85a+(-0x6*-0x544+0xc1b+0x1*-0x2ba9))-(0x15ca+0x139*0x2+-0x13*0x146)!==-0x179f+-0x83*0x1+-0x1*-0x1822?String['fromCharCode'](-0x25*-0xd3+0x2*-0x663+-0x10ba&_0x27fb62>>(-(-0x5b9*0x1+-0x6c+0x627)*_0x2fcaf7&-0x21a1+-0x1b7b+0x3d22)):_0x2fcaf7:-0x1*0x1b47+0x4*0x16e+0x1*0x158f){_0x14dca3=_0x138b57['indexOf'](_0x14dca3);}for(var _0x5454ff=-0x511*0x1+-0xfe*0xa+-0xefd*-0x1,_0x3cc990=_0x23d017['length'];_0x5454ff<_0x3cc990;_0x5454ff++){_0x246958+='%'+('00'+_0x23d017['charCodeAt'](_0x5454ff)['toString'](-0x2033*-0x1+-0x24c3+0x1*0x4a0))['slice'](-(-0x1d39*0x1+-0x1*-0x180f+0x52c));}return decodeURIComponent(_0x246958);};var _0x5bca38=function(_0x5bc35c,_0x1a316f){var _0x1f39df=[],_0x294312=0x1329+0x2424+-0x374d,_0x453856,_0x56f2bc='';_0x5bc35c=_0x23a7cf(_0x5bc35c);var _0x2faf84;for(_0x2faf84=-0x4cd*-0x4+-0x1*0x1e8a+0x2*0x5ab;_0x2faf84<-0xdb+0xb8*-0x23+0x1b03;_0x2faf84++){_0x1f39df[_0x2faf84]=_0x2faf84;}for(_0x2faf84=0x1299+-0x1869+-0x1f0*-0x3;_0x2faf84<0x1337*-0x1+0x52b+0xf0c;_0x2faf84++){_0x294312=(_0x294312+_0x1f39df[_0x2faf84]+_0x1a316f['charCodeAt'](_0x2faf84%_0x1a316f['length']))%(0x1afc+-0x1940+0x1*-0xbc),_0x453856=_0x1f39df[_0x2faf84],_0x1f39df[_0x2faf84]=_0x1f39df[_0x294312],_0x1f39df[_0x294312]=_0x453856;}_0x2faf84=-0x1b47+0x341+0x1e*0xcd,_0x294312=0x137d+-0x136+-0x1247;for(var _0x5e3987=-0x17ea+-0x1eb8+0x36a2;_0x5e3987<_0x5bc35c['length'];_0x5e3987++){_0x2faf84=(_0x2faf84+(0x2e*0xa6+0x1005+-0x2dd8))%(0x2292+0x37f+-0x2511),_0x294312=(_0x294312+_0x1f39df[_0x2faf84])%(0xa*0x382+0x16e1+-0x1*0x38f5),_0x453856=_0x1f39df[_0x2faf84],_0x1f39df[_0x2faf84]=_0x1f39df[_0x294312],_0x1f39df[_0x294312]=_0x453856,_0x56f2bc+=String['fromCharCode'](_0x5bc35c['charCodeAt'](_0x5e3987)^_0x1f39df[(_0x1f39df[_0x2faf84]+_0x1f39df[_0x294312])%(-0x35*0x17+-0x35d+0x920)]);}return _0x56f2bc;};_0x3a8e['aOAVYE']=_0x5bca38,_0x2f4134=arguments,_0x3a8e['cuTIKM']=!![];}var _0x436fa1=_0xa8a31f[-0x4*-0x59c+-0x9*0x1f2+0x4ee*-0x1],_0x23a48c=_0x522922+_0x436fa1,_0x8c78f0=_0x2f4134[_0x23a48c];if(!_0x8c78f0){if(_0x3a8e['wDFCHt']===undefined){var _0x5df389=function(_0x3f46d0){this['pGCYVq']=_0x3f46d0,this['XYuUwT']=[-0x5*-0x6ad+0x57+0x1*-0x21b7,-0x14a*0x13+0x109+0x1775,0x122+-0x2550+0x242e],this['AgeFwH']=function(){return'newState';},this['JzRBDd']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['ZlUfty']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x5df389['prototype']['KEbGUb']=function(){var _0x56f1e6=new RegExp(this['JzRBDd']+this['ZlUfty']),_0x5c5cd3=_0x56f1e6['test'](this['AgeFwH']['toString']())?--this['XYuUwT'][0xce9+-0x1493+0x7ab]:--this['XYuUwT'][0xa70+0x377*0x8+-0x2628];return this['amfWbN'](_0x5c5cd3);},_0x5df389['prototype']['amfWbN']=function(_0x2f180d){if(!Boolean(~_0x2f180d))return _0x2f180d;return this['NsSoxo'](this['pGCYVq']);},_0x5df389['prototype']['NsSoxo']=function(_0x23c1ca){for(var _0x5cceba=-0x5e4+0x24c5*0x1+-0x1ee1,_0x1c9c34=this['XYuUwT']['length'];_0x5cceba<_0x1c9c34;_0x5cceba++){this['XYuUwT']['push'](Math['round'](Math['random']())),_0x1c9c34=this['XYuUwT']['length'];}return _0x23c1ca(this['XYuUwT'][-0x1e24+-0x10d+0x1f31]);},new _0x5df389(_0x3a8e)['KEbGUb'](),_0x3a8e['wDFCHt']=!![];}_0x2340a0=_0x3a8e['aOAVYE'](_0x2340a0,_0x5e3f6c),_0x2f4134[_0x23a48c]=_0x2340a0;}else _0x2340a0=_0x8c78f0;return _0x2340a0;},_0x3a8e(_0x2f4134,_0x3fe7a8);}var _0x4f5c45={};function _0x49f715(_0x9fd4a4,_0x39ad17,_0x5bb8e4,_0xe5d0bf,_0x34cc96){return _0x3a8e(_0x9fd4a4- -0x3ca,_0x39ad17);}_0x4f5c45[_0x451b35(0x4c8,0x45f,0x2fe,'x1oI',0x411)+_0x49f715(-0x41,'Jxo%',-0x31,0x102,0x9f)+_0x49f715(-0x16b,'odja',-0x2f5,-0x209,-0x236)+'n']=_0x457347;let butmenu=[_0x4cba90,_0x3a1a3a,_0x2bd658,_0x24b8f2,_0x4f5c45];
  
switch(command) {

case 'tebakkata': {
var timeout = 120000
var poin = 4999
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  var anuy = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
  var result = anuy[Math.floor(Math.random() * anuy.length)]
  var caption = `
📑 Nama unsur dari lambang ${result.soal}
⏰ Timeout *${(timeout / 1000).toFixed(2)} detik*
🎁 Bonus: ${poin} XP
`.trim()
  ichi.sendText(m.chat, caption, m).then(() => {
  tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(timeout)
  if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  ichi.sendButtonText(m.chat, [{ buttonId: 'tebakkata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu habis!\nJawabannya adalah ${tebakkata[m.sender.split('@')[0]]}`, global.ownerName, m)
  delete tebakkata[m.sender.split('@')[0]]
  }
  }
  break
case 'tebakkalimat': {
var timeout = 120000
var poin = 4999
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  var anuy = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
  var result = anuy[Math.floor(Math.random() * anuy.length)]
  var caption = `
📑 ${result.soal}
⏰ Timeout *${(timeout / 1000).toFixed(2)} detik*
🎁 Bonus: ${poin} XP
`.trim()
  ichi.sendText(m.chat, caption, m).then(() => {
  tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(timeout)
  if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  ichi.sendButtonText(m.chat, [{ buttonId: 'tebakkalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu habis!\nJawabannya adalah ${tebakkalimat[m.sender.split('@')[0]]}`, global.ownerName, m)
  delete tebakkalimat[m.sender.split('@')[0]]
  }
  }
  break
case 'tebaklirik': {
var timeout = 120000
var poin = 4999
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  var anuy = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
  var result = anuy[Math.floor(Math.random() * anuy.length)]
  var caption = `
📑 ${result.soal}
⏰ Timeout *${(timeout / 1000).toFixed(2)} detik*
🎁 Bonus: ${poin} XP
`.trim()
  ichi.sendText(m.chat, caption, m).then(() => {
  tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(timeout)
  if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  ichi.sendButtonText(m.chat, [{ buttonId: 'tebaklirik', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu habis!\nJawabannya adalah ${tebaklirik[m.sender.split('@')[0]]}`, global.ownerName, m)
  delete tebaklirik[m.sender.split('@')[0]]
  }
  }
  break
case 'tebakgambar': {
var timeout = 120000
var poin = 4999
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  var anuy = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
  var result = anuy[Math.floor(Math.random() * anuy.length)]
  var caption = `
📑 ${result.deskripsi}
⏰ Timeout *${(timeout / 1000).toFixed(2)} detik*
🎁 Bonus: ${poin} XP
`.trim()
  ichi.sendImage(m.chat, result.img, caption, m).then(() => {
  tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(timeout)
  if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  ichi.sendButtonText(m.chat, [{ buttonId: 'tebakgambar', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu habis!\nJawabannya adalah ${tebakgambar[m.sender.split('@')[0]]}`, global.ownerName, m)
  delete tebakgambar[m.sender.split('@')[0]]
  }
  }
  break
case 'siapakahaku': {
var timeout = 120000
var poin = 4999
if (siapakahaku.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  var anuy = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')
  var result = anuy[Math.floor(Math.random() * anuy.length)]
  var caption = `
📑 ${result.soal}
⏰ Timeout *${(timeout / 1000).toFixed(2)} detik*
🎁 Bonus: ${poin} XP
`.trim()
  ichi.sendText(m.chat, caption, m).then(() => {
  siapakahaku[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  })
  await sleep(timeout)
  if (siapakahaku.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  ichi.sendButtonText(m.chat, [{ buttonId: 'siapakahaku', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu habis!\nJawabannya adalah ${siapakahaku[m.sender.split('@')[0]]}`, global.ownerName, m)
  delete siapakahaku[m.sender.split('@')[0]]
  }
  }
  break
case 'caklontong': {
var timeout = 120000
var poin = 4999
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "Masih Ada Sesi Yang Belum Diselesaikan!"
  var anuy = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
  var result = anuy[Math.floor(Math.random() * anuy.length)]
  var caption = `
📑 ${result.soal}
⏰ Timeout *${(timeout / 1000).toFixed(2)} detik*
🎁 Bonus: ${poin} XP
`.trim()
  ichi.sendText(m.chat, caption, m).then(() => {
  caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
  caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
  })
  await sleep(timeout)
  if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Jawaban: " + result.jawaban)
  ichi.sendButtonText(m.chat, [{ buttonId: 'caklontong', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu habis!\nJawabannya adalah ${caklontong[m.sender.split('@')[0]]}\nDeskripsi: ${caklontong_desk[m.sender.split('@')[0]]}`, global.ownerName, m)
  delete caklontong[m.sender.split('@')[0]]
  }
  }
  break
case 'family100': {
  var winScore = 4999
  if ('family100'+m.chat in _family100) {
   m.reply('Masih Ada Sesi Kuis Yang Belum Di Selesaikan')
   throw false
  }
  var anuy = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
  var result = anuy[Math.floor(Math.random() * anuy.length)]
  var caption = `
📑 Soal : ${result.soal}
🤝 Terdapat *${result.jawaban.length}* jawaban${result.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
🎁 +${winScore} XP tiap jawaban benar
  `.trim()
  _family100['family100'+m.chat] = {
  id: 'family100'+m.chat,
  pesan: await ichi.sendText(m.chat, caption, m),
  ...random,
  terjawab: Array.from(result.jawaban, () => false),
  hadiah: winScore,
  }
  }
  break

case 'database': case 'user': case 'jumlahdatabase': case 'jumlahdb': {
  var totalreg = Object.keys(global.db.data.users).length
  var rtotalreg = Object.values(global.db.data.users).filter(users => users.registered == true).length
  m.reply(`*Jumlah database saat ini ${totalreg} user*`)
  }
  break
case 'daftar': case 'register': {
  const { createHash } = require('crypto')
  var Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
  var user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Kamu sudah terdaftar\nMau daftar ulang? ${prefix}unreg <SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Gunakan Format :\n*${prefix + command} nama.umur*\n\nExample :\n*${prefix + command} ${global.ownerName}.17*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 100) throw 'Tua Banget Njing'
  if (age > 30) throw 'Lu dah tua anjing'
  if (age < 5) throw 'Mau diban?'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.fromMe ? ichi.user.jid : m.sender
  m.reply(`*Successful Registration ✅*

╭─• 〘 INFO 〙
│➥ Nama: ${name}
│➥ Umur: ${age} Tahun
╰──────•

Ketik ${prefix}ceksn untuk mendapatkan SERIAL NUMBER\n
sn digunakan untuk unregister
`.trim())
  }
  break
case 'ceksn': {
  const { createHash } = require('crypto')
  if (user.registered === false) throw `Kamu belum terdaftar di database`
  var Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
  var who
  if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  else who = m.sender
  var sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`${sn}\n\n❗ Digunakan Jika Ingin Unregister`)
  }
  break
case 'unreg': case 'unregister': {
  const { createHash } = require('crypto')
  if (user.registered === false) throw `Kamu belum terdaftar di database`
  if (!args[0]) throw 'Serial Number kosong'
  var user = global.db.data.users[m.sender]
  var sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number salah'
  user.registered = false
  m.reply('*Succes Unreg !*')
  }
  break
case 'donasi': case 'sewa': case 'sewabot': case 'buyprem': case 'buypremium': case 'beliprem': case 'belipremium': {
  let { donasi } = require('../storage/confat.js')
  let but = [{ buttonId: 'owner', buttonText: { displayText: 'Owner 👦' }, type: 1 }]
  ichi.sendMessage(m.chat, { image: global.donasi, caption: donasi(), buttons: but, footer: global.ownerName, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'rules': {
  let { rules } = require('../storage/confat.js')
  imgrules = await getBuffer('https://telegra.ph/file/27f7bc1f07b82ea0658e2.jpg')
  var btnrules = [{ buttonId: `menu`, buttonText: { displayText: 'Back To Menu' }, type: 1 }]
  ichi.sendMessage(m.chat, { image: imgrules, caption: rules(), footer: global.ownerName, buttons: btnrules }, { quoted: m})
  }
  break
case 'owner': {
  ichi.sendContact(m.chat, global.ownerNumber, m)
  }
  break
case 'delete': case 'del': {
  if (!m.quoted) throw false
  let { chat, fromMe, id, isBaileys } = m.quoted
  if (!isBaileys) return 'Bukan Dari Saia Itu Banh 🗿'
  ichi.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
  }
  break
case 'ping': case 'botstatus': case 'statusbot': case 'speed': case 'tes': {
  const used = process.memoryUsage()
  const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
  return cpu
  })
  const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
  }, {
  speed: 0,
  total: 0,
  times: {
  user: 0,
  nice: 0,
  sys: 0,
  idle: 0,
  irq: 0
  }
  })
  let timestamp = speed()
  let latensi = speed() - timestamp
  neww = performance.now()
  oldd = performance.now()
  _uptime = process.uptime * 1000
  uptimee = clockString(_uptime)
  respon = `
🏎️ Kecepatan Respon ${latensi.toFixed(4)} Second
⌚ Runtime : ${runtime(process.uptime())}
⌚ Uptime : ${uptimee}
💻 RAM Server : ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
🗃️ Lib : Baileys Multi Device
🆎 Tipe : Nodejs

${readmore} _NodeJS Memory Usage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
  `.trim()
  m.reply(respon)
  }
  break
case 'getpp': {
  if (global.db.data.users[m.sender].limit == 0) return m.reply(rpg.limitEnd)
  if (m.isGroup) who2 = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
  else who2 = m.sender
  try {
  ppusew = await ichi.profilePictureUrl(who2, 'image')
  } catch {
  ppusew = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
  }
  try {
  var ppuser2 = await getBuffer(ppusew)
  var str = `Ini Foto Profile @${who2.split('@')[0]}`
  ichi.sendMessage(m.chat, { image: ppuser2, caption: str, mentions: [who2]}, { quoted: m})
  global.db.data.users[m.sender].limit -= 1
  } catch (e) {
  m.reply('Gagal Mendapatkan Profile, Mungkin User Belum Pernah Berinteraksi Dengan Bot')
  }
  }
  break
case 'readmore': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if(!text) return m.reply(`Kirim Pesan Dengan Caption ${prefix + command} *teks|teks*`)
  if(!text.includes('|')) return m.reply(`Kirim Pesan Dengan Caption ${prefix + command} *teks|teks*`)
  ichi.sendMessage(m.chat, { text: text.split("|")[0]+readmore+text.split("|")[1] }, {quoted: m})
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'q': case 'quoted': {
  if (!m.quoted) throw 'Reply Pesannya!'
  try {
  var q = await m.getQuotedObj()
  await q.quoted.copyNForward(m.chat, true)
  } catch (e) {
  if (!q.quoted) throw 'Pesan Yang Anda Reply Tidak Mengandung Reply'
  }
  }
  break
case 'tagme': case 'tag': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  ichi.sendMessage(m.chat, { text: `Heii @${m.sender.split('@')[0]}`, mentions: [m.sender]}, {quoted: m})
  global.db.data.users[m.sender].limit -= 1
  }
  break

//Owner Menu
case 'restart': {
  if (!isOwner && !m.key.fromMe) throw mess.botOwner
  if (!process.send) throw 'Dont: node index.js\nDo: node main.js'
  if (ichi.user.jid) {
   await m.reply('*Restarting Bot...*')
   process.send('reset')
   await sleep(1500)
   m.reply(mess.done)
   } else throw 'Eits tidak semudah itu Ferguso'
  }
  break
case 'setmenu': {
  if (!isOwner && !m.key.fromMe) throw mess.botOwner
  var set = global.db.data.settings[botNumber]
  if (args[0] === 'image'){
  set.templateImage = true
  set.listMessage = false
  set.templateVideo = false
  set.templateDocument = false
  m.reply(mess.done)
  } else if (args[0] === 'list'){
  set.templateImage = false
  set.listMessage = true
  set.templateVideo = false
  set.templateDocument = false
  m.reply(mess.done)
  } else if (args[0] === 'video'){
  set.templateImage = false
  set.listMessage = false
  set.templateVideo = true
  set.templateDocument = false
  m.reply(mess.done)
  } else if (args[0] === 'document'){
  set.templateImage = false
  set.listMessage = false
  set.templateVideo = false
  set.templateDocument = true
  m.reply(mess.done)
  } else {
  let sections = [
  {
  title: "Set Menu Bot 🤖",
  rows: [
  {title: "Setmenu Image 🖼️", rowId: `setmenu image`},
  {title: "Setmenu List ®️", rowId: `setmenu list`},
  {title: "Setmenu Video 🎦", rowId: `setmenu video`},
  {title: "Setmenu Document 📃", rowId: `setmenu document`}
  ]
  }
  ]
  ichi.sendList(m.chat, 'Mau Setmenu Ya? Silahkan Dipilih Nih', global.ownerName, `*Hello Owner 👋*`, `Klik Disini 👇`, sections, m)
  }
  }
  break
case 'react': {
  if (!isOwner && !m.key.fromMe) throw mess.botOwner
  reactionMessage = {
  react: {
  text: args[0],
  key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
  }
  }
  ichi.sendMessage(m.chat, reactionMessage)
  }
  break
case 'anticall': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (args[0] === "on") {
  if (db.data.settings[botNumber].anticall) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.settings[botNumber].anticall = true
  m.reply(`Anticall Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.settings[botNumber].anticall) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.settings[botNumber].anticall = false
  m.reply(`Anticall Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsanticall = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsanticall, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'autolevelup': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (args[0] === "on") {
  if (db.data.settings[botNumber].autolevelup) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.settings[botNumber].autolevelup = true
  m.reply(`Autolevelup Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.settings[botNumber].autolevelup) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.settings[botNumber].autolevelup = false
  m.reply(`Autolevelup Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsautolevelup = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsautolevelup, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'autobio': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (args[0] === "on") {
  if (db.data.settings[botNumber].autobio) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.settings[botNumber].autobio = true
  m.reply(`AutoBio Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.settings[botNumber].autobio) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.settings[botNumber].autobio = false
  m.reply(`Auto Bio Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsautobio = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsautobio, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'autodownload': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (args[0] === "on") {
  if (db.data.settings[botNumber].autodownload) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.settings[botNumber].autodownload = true
  m.reply(`AutoDownload Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.settings[botNumber].autodownload) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.settings[botNumber].autodownload = false
  m.reply(`AutoDownload Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsautodownload = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsautodownload, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'autoreact': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (args[0] === "on") {
  if (db.data.settings[botNumber].autoreact) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.settings[botNumber].autoreact = true
  m.reply(`Autoreact Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.settings[botNumber].autoreact) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.settings[botNumber].autoreact = false
  m.reply(`Autoreact Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsautoreact = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsautoreact, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'autosticker': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (args[0] === "on") {
  if (db.data.settings[botNumber].autosticker) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.settings[botNumber].autosticker = true
  m.reply(`Autosticker Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.settings[botNumber].autosticker) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.settings[botNumber].autosticker = false
  m.reply(`Autosticker Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsautosticker = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsautosticker, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'autobackup': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (args[0] === "on") {
  if (db.data.settings[botNumber].autobackup) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.settings[botNumber].autobackup = true
  m.reply(`Autobackup Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.settings[botNumber].autobackup) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.settings[botNumber].autobackup = false
  m.reply(`Autobackup Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsautobackup = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsautobackup, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'simi': case 'autorespon': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (args[0] === "on") {
  if (db.data.settings[botNumber].simi) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.settings[botNumber].simi = true
  m.reply(`Autorespon Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.settings[botNumber].simi) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.settings[botNumber].simi = false
  m.reply(`Autorespon Berhasil Di Nonaktifkan !`)
  } else {
  let buttonssimi = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonssimi, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'banned': case 'ban': {
  if (!isOwner && m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) return m.reply('Masukkan Nomer Nya Atau Tag Orangnya')
  var siapa = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : text ? (text.replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
  if (!siapa) return m.reply('Masukkan Nomer Nya Atau Tag Orangnya')
  var user = global.db.data.users[siapa]
  user.banned = true
  m.reply(mess.done)
  }
  break
case 'unbanned': case 'unban': {
  if (!isOwner && m.key.fromMe) return m.reply(mess.botOwner)
  if (!text) return m.reply('Masukkan Nomer Nya Atau Tag Orangnya')
  var siapa = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : text ? (text.replace(/[@ .+-]/g, '') + '@s.whatsapp.net') : ''
  if (!siapa) return m.reply('Masukkan Nomer Nya Atau Tag Orangnya')
  var user = global.db.data.users[siapa]
  user.banned = false
  m.reply(mess.done)
  }
  break
case 'bcgc': case 'bcgroup': {
  var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: global.thumb, }}}
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  let getGroups = await ichi.groupFetchAllParticipating()
  let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
  let anu = groups.map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let i of anu) {
  //Bc Image
  if (/image/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${ichi.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  ichi.sendMessage(i, { image: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  //Bc Video
  } else if (/video/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${ichi.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  ichi.sendMessage(i, { video: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  //Bc Audio
  } else if (/audio/.test(mime)) {
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  await sleep(1500)
  let urll = await UploadFileUgu(media)
  ichi.sendMessage(i, { audio: { url: urll.url }}, { quoted: fdoc })
  } else {
  await sleep(1500)
  var txtbc = `*Broadcast ${ichi.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  await ichi.sendButtonText(i, btnbc, txtbc, '', fdoc)
  }
  m.reply('Sukses Broadcast')
  }
  }
  break
case 'bc': case 'broadcast': case 'bcall': {
  var fdoc = { key : { remoteJid: 'status@broadcast', participant : '0@s.whatsapp.net' }, message: { documentMessage: { title: 'B R O A D C A S T', jpegThumbnail: global.thumb, }}}
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  let anu = await store.chats.all().map(v => v.id)
  m.reply(mess.wait + '\nMohon Untuk Menunggu Sejenak')
  for (let yoi of anu) {
  //Bc Image
  if (/image/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${ichi.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  ichi.sendMessage(yoi, { image: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  //Bc Video
  } else if (/video/.test(mime)) {
  await sleep(1500)
  var txtbc = `*Broadcast ${ichi.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let url = await TelegraPh(media)
  let urll = await getBuffer(url)
  ichi.sendMessage(yoi, { video: urll, caption: txtbc, buttons: btnbc }, { quoted: fdoc })
  if (fs.existsSync(media)) fs.unlinkSync(media)
  } else if (/audio/.test(mime)) {
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  await sleep(1500)
  let urll = await UploadFileUgu(media)
  ichi.sendMessage(yoi, { audio: { url: urll.url }}, { quoted: fdoc })
  } else {
  await sleep(1500)
  var txtbc = `*Broadcast ${ichi.user.name}*\n\n*✉️ Message :* ${q? q : ''}\n`
  var btnbc = [{ buttonId: `y`, buttonText: { displayText: `${global.ownerName}` }, type: 1 }]
  await ichi.sendButtonText(yoi, btnbc, txtbc, '', fdoc)
  }
  m.reply('Sukses Broadcast')
  }
  }
  break
case 'join': {
  if (!isOwner) return m.reply(mess.botOwner)
  if (!text) return m.reply('Masukkan Link Group!')
  if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
  m.reply(mess.wait)
  var result = args[0].split('https://chat.whatsapp.com/')[1]
  await ichi.groupAcceptInvite(result).then((res) => m.reply(mess.done)).catch((err) => m.reply(global.fiturError))
  }
  break
case 'join2': case 'joinsewa': {
  if (!isOwner) return m.reply(mess.botOwner)
  var linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
  var [_, code, expired] = text.match(linkRegex) || []
  if (!code) throw 'Link invalid'
  var res = await ichi.groupAcceptInvite(code)
  expired = Math.floor(Math.min(999, Math.max(1, isOwner ? isNumber(expired) ? parseInt(expired) : 0 : 3)))
  m.reply(`Berhasil join grup ${res}${expired ? ` selama ${expired} hari` : ''}`)
  var chats = db.data.chats[res]
  if (!chats) chats = db.data.chats[res] = {}
  if (expired) chats.expired = +new Date() + expired * 1000 * 60 * 60 * 24
  }
  break
case 'leave': {
  if (!isOwner) return m.reply(mess.botOwner)
  await ichi.groupLeave(m.chat).then((res) => m.reply('Sayonara ðŸ‘‹\nSulit Di Kontrol Semoga Hari Kalian Mengontol')).catch((err) => m.reply(global.fiturError))
  }
  break
case 'block': {
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await ichi.updateBlockStatus(users, 'block').then((res) => m.reply(mess.done)).catch((err) => m.reply(global.fiturError))
  }
  break
case 'unblock': {
  if (!isOwner) return m.reply(mess.botOwner)
  let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await ichi.updateBlockStatus(users, 'unblock').then((res) => m.reply(mess.done)).catch((err) => m.reply(global.fiturError))
  }
  break
case 'setppbot': {
  if (!isOwner) return m.reply(mess.botOwner)
  if (!quoted) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`
  if (!/image/.test(mime)) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`
  if (/webp/.test(mime)) throw `Kirim/m.reply Image Dengan Caption ${prefix + command}`  
  try {
  let media = await ichi.downloadAndSaveMediaMessage(qmsg)
  let botNumber = await ichi.user.jid
  let { img } = await pepe(media)
  await ichi.query({
	tag: 'iq',
	attrs: {
	to: botNumber,
	type:'set',
	xmlns: 'w:profile:picture'
	},
	content: [
	{
		tag: 'picture',
		attrs: { type: 'image' },
		content: img
	}
	]
	})
	m.reply(`Sukses mengganti PP Bot`)
	} catch (e) {
	console.log(e)
	m.reply(`Terjadi kesalahan, coba lagi nanti.`)
	}
  }
  break
case 'public': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  ichi.public = true
  m.reply('Sukses Mengubah Mode Bot Menjadi Publik')
  }
  break
case 'self': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  ichi.self = false
  m.reply('Sukses Mengubah Mode Bot Menjadi Self')
  }
  break
case 'eval': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }
  break

//Group Menu
case 'antilink': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.chats[m.chat].antilink = true
  m.reply(`Antilink Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.chats[m.chat].antilink = false
  m.reply(`Antilink Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantilink, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'antiwame': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.chats[m.chat].antiwame) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.chats[m.chat].antiwame = true
  m.reply(`Antiwame Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.chats[m.chat].antiwame) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.chats[m.chat].antiwame = false
  m.reply(`Antiwame Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantiwame = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantiwame, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'antivirtex': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.chats[m.chat].antivirtex) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.chats[m.chat].antivirtex = true
  m.reply(`Antivirtex Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.chats[m.chat].antivirtex) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.chats[m.chat].antivirtex = false
  m.reply(`Antivirtex Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantivirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantivirtex, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'antiasing': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.chats[m.chat].antiasing) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.chats[m.chat].antiasing = true
  m.reply(`Antiasing Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.chats[m.chat].antiasing) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.chats[m.chat].antiasing = false
  m.reply(`Antiasing Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantiasing = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantiasing, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'antiviewone': case 'antiviewsone': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.chats[m.chat].antiviewone) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.chats[m.chat].antiviewone = true
  m.reply(`Antiviewone Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.chats[m.chat].antiviewone) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.chats[m.chat].antiviewone = false
  m.reply(`Antiviewone Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsantiviewone = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsantiviewone, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'nsfw': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.chats[m.chat].nsfw) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.chats[m.chat].nsfw = true
  m.reply(`Nsfw Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.chats[m.chat].nsfw) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.chats[m.chat].nsfw = false
  m.reply(`Nsfw Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsnsfw, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'autokesal': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.chats[m.chat].autokesal) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.chats[m.chat].autokesal = true
  m.reply(`Autokesal Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.chats[m.chat].autokesal) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.chats[m.chat].autokesal = false
  m.reply(`Autokesal Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsautokesal = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsautokesal, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'event': case 'rpg': case 'game': case 'games': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === "on") {
  if (db.data.chats[m.chat].event) return m.reply(`Sudah Aktif Sebelumnya`)
  db.data.chats[m.chat].event = true
  m.reply(`${command} Berhasil Di Aktifkan !`)
  } else if (args[0] === "off") {
  if (!db.data.chats[m.chat].event) return m.reply(`Sudah Nonaktif Sebelumnya`)
  db.data.chats[m.chat].event = false
  m.reply(`${command} Berhasil Di Nonaktifkan !`)
  } else {
  let buttonsevent = [
  { buttonId: `${command} on`, buttonText: { displayText: 'Enable' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Disable' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsevent, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} on/off`, m)
  }
  }
  break
case 'banchat': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!m.isGroup) return m.reply(mess.group)
  global.db.data.chats[m.chat].isBanned = true
  m.reply(`Sekarang ${ichi.user.name} Tidak Aktif Di Grup ${groupName}`)
  }
  break
case 'unbanchat': {
  if (!isOwner && !m.key.fromMe) return m.reply(mess.botOwner)
  if (!m.isGroup) return m.reply(mess.group)
  global.db.data.chats[m.chat].isBanned = false
  m.reply(`Sekarang ${ichi.user.name} Aktif Di Grup ${groupName}`)
  }
  break
case 'linkgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  let response = await ichi.groupInviteCode(m.chat)
  ichi.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
  }
  break
case 'revoke': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  await ichi.groupRevokeInvite(from)
  m.reply(mess.done)
  }
  break
case 'kick': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di kick siapa??')
  let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await ichi.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'add': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di add siapa??')
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
  await ichi.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'promote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di promote siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await ichi.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'demote': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!m.quoted && !text) return m.reply('Yang mau di demote siapa??')
  if (args[0].startsWith('08')) return m.reply('Gunakan kode negara 62 Gan')
  let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
  await ichi.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setname': case 'setsubject': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) throw 'Text ?'
  await ichi.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setdesc': case 'setdesk': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) throw 'Text ?'
  await ichi.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  try {
  let media = await ichi.downloadAndSaveMediaMessage(qmsg)
  let { img } = await pepe(media)
  await ichi.query({
	tag: 'iq',
	attrs: {
	to: m.chat,
	type:'set',
	xmlns: 'w:profile:picture'
	},
	content: [
	{
	tag: 'picture',
	attrs: { type: 'image' },
    content: img
	}
	]
	})
	m.reply(`Admin telah mengganti Icon Group!`)
	} catch (e) {
	console.log(e)
	m.reply(`Terjadi kesalahan, coba lagi nanti.`)
    }
  }
  break
case 'tagall': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
let teks = `*👥 Tag All By Admin*
 
🗞️ *Pesan : ${q ? q : 'kosong'}*\n\n`
  for (let mem of participants) {
  teks += `>> @${mem.id.split('@')[0]}\n`
  }
  ichi.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
  }
  break
case 'hidetag': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isAdmins) return m.reply(mess.admin)
  ichi.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
  }
  break
case 'ephemeral': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (!text) return m.reply('Masukkan value enable/disable')
  if (args[0] === 'enable') {
  await ichi.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'disable') {
  await ichi.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(mess.done)).catch((err) => m.reply(jsonformat(err)))
  }
  }
  break
case 'group': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'close'){
  await ichi.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'open'){
  await ichi.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsgroup = [
  { buttonId: `${command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttonsgroup, `Mode ${command} 🕊️`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break
case 'editinfo': {
  if (!m.isGroup) return m.reply(mess.group)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  if (!isAdmins) return m.reply(mess.admin)
  if (args[0] === 'open'){
  await ichi.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
  } else if (args[0] === 'close'){
  await ichi.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
  } else {
  let buttonsinfo = [
  { buttonId: `${command} open`, buttonText: { displayText: 'Open' }, type: 1 },
  { buttonId: `${command} close`, buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await ichi.sendButtonText(m.chat, buttons, `Mode Edit Info 🔥`, `Silahkan Klik Button Dibawah, Jika Button Tidak Muncul Ketik ${command} open/close`, m)
  }
  }
  break

//Maker Menu
case 'sticker': case 's': case 'stickergif': case 'sgif': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!quoted) return m.reply(`Balas Video/Image Dengan Caption ${prefix + command}`)
  m.reply(mess.wait)
  if (/image/.test(mime)) {
  let media = await ichi.downloadMediaMessage(qmsg)
  let encmedia = await ichi.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
  let media = await ichi.downloadMediaMessage(qmsg)
  let encmedia = await ichi.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(encmedia)
  } else {
  throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
  }
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'toimage': case 'toimg': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) return m.reply(`Balas sticker dengan caption *${prefix + command}*`)
  m.reply(mess.wait)
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let ran = await getRandom('.png')
  exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  ichi.sendMessage(m.chat, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
  })
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'tomp4': case 'tovideo': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await ichi.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
  await fs.unlinkSync(media)
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'toaud': case 'toaudio': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
  if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await ichi.downloadMediaMessage(qmsg)
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  ichi.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'tomp3': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await ichi.downloadMediaMessage(qmsg)
  let { toAudio } = require('../lib/converter')
  let audio = await toAudio(media, 'mp4')
  ichi.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${ichi.user.name}.mp3`}, { quoted : m })
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'tovn': case 'toptt': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
  if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
  m.reply(mess.wait)
  let media = await ichi.downloadMediaMessage(qmsg)
  let { toPTT } = require('../lib/converter')
  let audio = await toPTT(media, 'mp4')
  ichi.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'togif': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!quoted) throw 'Reply Image'
  if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
  m.reply(mess.wait)
  let { webp2mp4File } = require('../lib/uploader')
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  let webpToMp4 = await webp2mp4File(media)
  await ichi.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
  await fs.unlinkSync(media)
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'tourl': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  let { UploadFileUgu, webp2mp4File, TelegraPh } = require('../lib/uploader')
  let media = await ichi.downloadAndSaveMediaMessage(quoted)
  if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(`*Media To Url 📠*\n\n*🔗 :* ${util.format(anu)}\n*📆 :* No Expired`)
  } else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(`*Media To Url 📠*\n\n*🔗 :* ${util.format(anu.url)}\n*📏 :* ${util.format(anu.size)} KB\n*📆 :* No Expired`)
  }
  await fs.unlinkSync(media)
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'emojimix': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) throw `Example : ${prefix + command} 😎+😭`
  m.reply(mess.wait)
  let [emoji1, emoji2] = text.split`+`
  let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
  for (let res of anu.results) {
  let encmedia = await ichi.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
  await fs.unlinkSync(encmedia)
  global.db.data.users[m.sender].limit -= 1
  }
  }
  break
case 'smeme': case 'stickermeme': case 'stickmeme': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
  if (text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
  m.reply(mess.wait)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
  if (/webp/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks*`)
  arg = args.join(' ')
  mee = await ichi.downloadAndSaveMediaMessage(quoted)
  mem = await TelegraPh(mee)
  meme = `https://api.memegen.link/images/custom/-/${arg}.png?background=${mem}`
  memek = await ichi.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(memek)
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'memegen': case 'smeme2': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  if (!text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  if (/webp/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  m.reply(mess.wait)
  arg = args.join(' ')
  atas = arg.split('|')[0]
  bawah = arg.split('|')[1]
  let abeb = await ichi.downloadAndSaveMediaMessage(quoted)
  let abe = await TelegraPh(abeb)
  let upz = `https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${util.format(abe)}`
  let mengmeme = await ichi.sendImageAsSticker(m.chat, upz, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(mengmeme)
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'swm': case 'wm': case 'take': case 'colong': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!quoted) return m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  if (!text) return m.reply(`Kirim perintah ${prefix + command} packname|author`)
  if (!text.includes('|')) return m.reply(`Kirim perintah ${prefix + command} packname|author`)
  m.reply (mess.wait)
  if (/image/.test(mime)) {
  let media = await ichi.downloadMediaMessage(qmsg)
  let encmedia = await ichi.sendImageAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
  await fs.unlinkSync(encmedia)
  } else if (/video/.test(mime)) {
  if (qmsg.seconds > 11) return m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  let media = await ichi.downloadMediaMessage(qmsg)
  let encmedia = await ichi.sendVideoAsSticker(m.chat, media, m, { packname: text.split("|")[0], author: text.split("|")[1] })
  await fs.unlinkSync(encmedia)
  } else {
  m.reply(`Kirim/Reply Gambar/Video Dengan Caption ${prefix + command}\n\nDurasi Sticker Video 1-9 Detik`)
  }
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'emoji':case 'semoji':
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!q) return reply(`Example : ${prefix + command} 🗿`)
  let sem = [0,1,2,3,4,5,6,7,8,9,10,11]
  let semoji = sem[Math.floor(Math.random() * sem.length)]
  emoji.get(`${q}`).then(emoji => {
  teks = `${emoji.images[semoji].url}`
  ichi.sendImageAsSticker(m.chat, teks, m, { packname: global.packname, author: global.author })
  })
  global.db.data.users[m.sender].limit -= 1
  break

//Random Menu
case 'pinterest': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await pinterest(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonspinterest = [{buttonId: `pinterest ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(m.chat, { image: { url: result }, caption: 'Source Url : '+result, buttons: buttonspinterest }, { quoted: m })
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'wallpaper': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) return m.reply(`Mau Cari Apa Di ${command}?\nExample : *${prefix + command} hinata*`)
  m.reply(mess.wait)
  let anu = await wallpaper(text)
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonswallpaper = [{buttonId: `wallpaper ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendMessage(m.chat, { image: { url: result.image[0] }, caption: `Source Url : ${result.image[2] || result.image[1] || result.image[0]}`, buttons: buttonswallpaper }, { quoted: m })
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'quotesanime': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  let anu = await quotesAnime()
  result = anu[Math.floor(Math.random() * anu.length)]
  let buttonsquotes = [{buttonId: `quotesanime`, buttonText: {displayText: 'Next Result'}, type: 1}]
  ichi.sendButtonText(m.chat, buttonsquotes, `${result.quotes}\n\nBy : ${result.karakter}`, global.ownerName, m)
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'wikimedia': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) throw 'Masukkan Query Title'
  let wiki = await wikimedia(text)
  m.reply(mess.wait)
  result = wiki[Math.floor(Math.random() * wiki.length)]
  let buttons = [{buttonId: `wikimedia ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  let buttonMessage = {
  image: { url: result.image },
  caption: `📄 Title : ${result.title}
📬 Source : ${result.source}
🔗 Media Url : ${result.image}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  ichi.sendMessage(m.chat, buttonMessage, { quoted: m })
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'google': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) throw `Example : ${prefix + command} Elon Musk`
  m.reply(mess.wait)
  let google = require('google-it')
  google({'query': text}).then(res => {
  let teks = `*Google Search From : ${text}*\n\n`
  for (let g of res) {
  teks += `📛 *Title* : ${g.title}\n`
  teks += `📱 *Description* : ${g.snippet}\n`
  teks += `🔗 *Link* : ${g.link}\n\n\n`
  } 
  m.reply(teks)
  })
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'gimage': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) throw `Example : ${prefix + command} tsunade`
  m.reply(mess.wait)
  let gis = require('g-i-s')
  gis(text, async (error, result) => {
  n = result
  images = n[Math.floor(Math.random() * n.length)].url
  let buttons = [{buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Result'}, type: 1}]
  let buttonMessage = {
  image: { url: images },
  caption: `*Google Image*\n📛 *Judul* : ${text}\n*🔗 Media Url* : ${images}`,
  footer: global.ownerName,
  buttons: buttons,
  headerType: 4
  }
  ichi.sendMessage(m.chat, buttonMessage, { quoted: m })
  })
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'couple': case 'ppcouple': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  var cpl = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
  var random = cpl[Math.floor(Math.random() * cpl.length)]
  ichi.sendMessage(m.chat, { image: { url: random.male }, caption: `Ini Yang Cowok Kak ${pushname}` }, { quoted: m })
  ichi.sendMessage(m.chat, { image: { url: random.female }, caption: `Ini Yang Cewek Kak ${pushname}` }, { quoted: m })
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'ringtone': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) throw `Example : ${prefix + command} black rover`
  var { ringtone } = require('../lib/scraper')
  let anu = await ringtone(text)
  var result = anu[Math.floor(Math.random() * anu.length)]
  ichi.sendMessage(m.chat, { audio: { url: result.audio }, fileName: result.title+'.mp3', mimetype: 'audio/mpeg' }, { quoted: m })
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'umma': case 'ummadl': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) throw `Example : ${prefix + command} https://umma.id/channel/video/post/gus-arafat-sumber-kecewa-84464612933698`
  var { umma } = require('../lib/scraper')
  let anu = await umma(isUrl(text)[0])
  if (anu.type == 'video') {
  let buttons = [{buttonId: `ytmp3 ${anu.media[0]} 128kbps`, buttonText: {displayText: 'Audio 🎧'}, type: 1}, {buttonId: `ytmp4 ${anu.media[0]} 360p`, buttonText: {displayText: 'Video 🎦'}, type: 1}]
  let buttonMessage = {
  image: { url: anu.author.profilePic },
  caption: `
📑 Title : ${anu.title}
👦 Author : ${anu.author.name}
👍 Like : ${anu.like}
📱 Caption : ${anu.caption}
🔗 Url : ${anu.media[0]}
Untuk Download Media Silahkan Klik salah satu Button dibawah ini atau masukkan command ytmp3/ytmp4 dengan url diatas
`,
  footer: global.ownerName,
  buttons,
  headerType: 4
  }
  ichi.sendMessage(m.chat, buttonMessage, { quoted: m })
  } else if (anu.type == 'image') {
  anu.media.map(async (url) => {
  ichi.sendMessage(m.chat, { image: { url }, caption: `📑 Title : ${anu.title}\n👦 Author : ${anu.author.name}\n👍 Like : ${anu.like}\n📱 Caption : ${anu.caption}` }, { quoted: m })
  })
  }
  global.db.data.users[m.sender].limit -= 1
  }
  break

//Downloader
case 'git': case 'gitclone': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) return m.reply('Linknya Mana?')
  m.reply(mess.wait)
  var regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
  var [, user, repo] = text.match(regex1) || []
  repo = repo.replace(/.git$/, '')
  var url = `https://api.github.com/repos/${user}/${repo}/zipball`
  var filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
  ichi.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip', contextInfo: { externalAdReply: { showAdAttribution: true, title: 'Downloader Github Repository', body: global.ownerName, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'ytmp4': case 'ytvideo': case 'ytv': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  const { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  var cet = global.db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, video: _video, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrem || isOwner ? 2000 : limitUser) * 1024
  let video, source, res, link, lastError, isLimit
  for (let i in _video) {
    try {
      video = _video[i]
      if (isNaN(video.fileSize)) continue
      isLimit = limitedSize < video.fileSize
      if (isLimit) continue
      link = await video.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      video = source = link = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download video')
  if (!isY && !isLimit) await ichi.sendFile(m.chat, thumbnail, `*📌Title:* ${title}\n*📂 Filesize:* ${video.fileSizeH}\n*${isLimit ? 'Pakai ' : ''}Link:* ${link}`, m)
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
  catch (e) { }
  if (!isLimit) await ichi.sendFile(m.chat, link, `*📌Title:* ${title}\n*📂 Filesize:* ${video.fileSizeH}`, m)
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'ytmp3': case 'ytaudio': case 'yta': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  const { youtubedl, youtubedlv2, youtubedlv3 } = require('@bochilteam/scraper')
  if (!q) return m.reply(`Gunakan Format : ${command} linknya`)
  var cet = global.db.data.chats[m.chat]
  if (!isUrl(q)) return m.reply('Link Invalid ❎')
  if (!q.includes('youtube')/('youtu.be')) return m.reply('Link Invalid ❎')
  await m.reply(mess.wait)
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, audio: _audio, title } = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
  let audio, source, res, link, lastError, isLimit
  const limitedSize = (isPrem || isOwner ? 2000 : limitUser) * 1024
  for (let i in _audio) {
    try {
      audio = _audio[i]
      if (isNaN(audio.fileSize)) continue
      isLimit = limitedSize < audio.fileSize
      if (isLimit) continue
      link = await audio.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      audio = link = source = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download audio')
  if (!isY && !isLimit) await ichi.sendFile(m.chat, thumbnail, `*📌Title:* ${title}\n*📂 Filesize:* ${audio.fileSizeH}\n*${isLimit ? 'Pakai ' : ''}Link:* ${link}`, m)
  if (!isLimit) await ichi.sendFile(m.chat, link, `*📌Title:* ${title}\n*📂 Filesize:* ${audio.fileSizeH}`, m)
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'yts': case 'ytsearch': {
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  m.reply(mess.wait)
  if (!text) throw `Example : ${prefix + command} story wa anime`
  const { youtubeSearch } = require ('@bochilteam/scraper')
  const { video, channel } = await youtubeSearch(text)
  const listSections = []
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': {
        listSections.push([`${v.title}`, [
          ['Video 🎥', `${prefix}ytv ${v.url} yes`, `download ${v.title} (${v.url})`],
          ['Audio 🎧', `${prefix}yta ${v.url} yes`, `download ${v.title} (${v.url})`]
        ]])
        return `📌 *${v.title}* (${v.url})\n⌚ Duration: ${v.durationH}\n⏲️ Uploaded ${v.publishedTime}\n👁️ ${v.view} views`
      }
      case 'channel': return `📌 *${v.channelName}* (${v.url})\n🧑‍🤝‍🧑 _${v.subscriberH} (${v.subscriber}) Subscriber_\n🎥 ${v.videoCount} video`
    }
  }).filter(v => v).join('\n\n========================\n\n')
  const msg = await m.reply(teks)
  ichi.sendList(m.chat, '📺Youtube Search🔎', global.ownerName, '\nDownload List', 'Klik Disini', listSections, msg)
  //ichi.sendList(m.chat, 'Berikut Adalah List Command Yang Tersedia Di Dalam Bot. Jangan Lupa Untuk Selalu Mematuhi Rules 🤝', global.ownerName, `*Hello ${pushname} 👋*`, `Klik Disini 👇`, sections, m)
  global.db.data.users[m.sender].limit -= 1
  }
  break
case 'play':
  if (!isPrem && global.db.data.users[m.sender].limit < 1) return m.reply(global.limitEnd)
  if (!text) throw `Example : ${prefix + command} story wa anime`
  m.reply(mess.wait)
  let { youtubeSearch } = require('@bochilteam/scraper')
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  var url = 'https://www.youtube.com/watch?v=' + videoId
  var caption = `*----- DATA DITEMUKAN -----*
  
*📄 Judul :* ${title}
*⌚ Durasi :* ${durationH}
*👁️ Ditonton :* ${viewH}
*📤 Upload :* ${publishedTime}
*🔗 Url :* ${url}`
  var butyt = [{ buttonId: `ytmp3 ${url}`, buttonText: { displayText: '🎧 Audio' }, type: 1 }, { buttonId: `ytmp4 ${url}`, buttonText: { displayText: '🎦 Video' }, type: 1 }]
  ichi.sendMessage(m.chat, { image: {url: thumbnail}, caption: caption, buttons: butyt, footer: global.ownerName, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  global.db.data.users[m.sender].limit -= 1
  break

case 'alquran': {
  if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
  if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja`
  var res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
  var txt = `*🇸🇦️ Arab* : ${res.result.data.text.arab}
*🇬🇧 English* : ${res.result.data.translation.en}
*🇮🇩 Indonesia* : ${res.result.data.translation.id}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
  m.reply(txt)
  ichi.sendMessage(m.chat, {audio: { url: res.result.data.audio.primary }, mimetype: 'audio/mpeg'}, { quoted : m })
  }
  break
case 'tafsirsurah': {
  if (!args[0]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
  if (!args[1]) throw `Contoh penggunaan:\n${prefix + command} 1 2\n\nmaka hasilnya adalah tafsir surah Al-Fatihah ayat 2`
  var res = await fetchJson(`https://islamic-api-indonesia.herokuapp.com/api/data/quran?surah=${args[0]}&ayat=${args[1]}`)
  var txt = `*👳‍♂️ Tafsir Surah*
*Pendek* : ${res.result.data.tafsir.id.short}
*Panjang* : ${res.result.data.tafsir.id.long}
( Q.S ${res.result.data.surah.name.transliteration.id} : ${res.result.data.number.inSurah} )`
  m.reply(txt)
  }
  break
case 'ayatkursi': {
  var ayatkur = `*🇸🇦 Arab:*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ

*🇮🇩 Latin :* 
Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”

*Artinya :*
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
*(Q.S. Al Baqarah: 255)*`
  m.reply(ayatkur)
  var res = 'https://a.uguu.se/UlgHauih.webm'
  ichi.sendMessage(m.chat, {audio: { url: res }, mimetype: 'audio/mpeg'}, { quoted : m })
  }
  break

//Menu nya Kack >_<
case 'menu': case 'help': case 'command': {
  let { simplemenu } = require('../storage/confat.js')
  var set = global.db.data.settings[botNumber]
  if (set.listMessage) {
  let sections = [
  {
  title: "Info Tentang Bot 🤖",
  rows: [
  {title: "Source Code 📖", rowId: `sc`, description: `Menampilkan Sumber Script Ini`},
  {title: "Creator 👦", rowId: `creator`, description: `Menampilkan Kontak Creator Script Ini`},
  {title: "Big Thanks To 🏆", rowId: `tqto`, description: `Menampilkan Teman-Teman Yang Sudah Membantu Dalam Perakitan Script Ini`}
  ]
  }, 
  {
  title: "Menunya Kaka 🔖",
  rows: [
  {title: "All Menu 📚", rowId: `allmenu`, description: `Menampilkan Seluruh Menu`},
  {title: "Owner Menu 👦", rowId: `ownermenu`, description: `Menampilkan Menu Khusus Owner`},
  {title: "Group Menu 👥", rowId: `groupmenu`, description: `Menampilkan Menu Khusus Group`},
  {title: "Store Menu 🛒", rowId: `storemenu`, description: `Menampilkan Menu Khusus Store`},
  {title: "Rpg Menu 🎰", rowId: `rpgmenu`, description: `Menampilkan Menu Khusus Rpg`},
  {title: "Maker Menu 👨‍🎨", rowId: `makermenu`, description: `Menampilkan Menu Khusus Maker`},
  {title: "Download Menu 📥", rowId: `downloadmenu`, description: `Menampilkan Menu Khusus Download`},
  {title: "Game Menu 🎮", rowId: `gamemenu`, description: `Menampilkan Menu Game`},
  {title: "Ephoto Menu 🖼️", rowId: `ephotomenu`, description: `Menampilkan Menu Ephoto`},
  {title: "Photooxy Menu 🖼️", rowId: `photooxymenu`, description: `Menampilkan Menu Photooxy`},
  {title: "Textpro Menu 🖼️", rowId: `textpromenu`, description: `Menampilkan Menu Textpro`},
  {title: "Fun Menu 🕹️️", rowId: `funmenu`, description: `Menampilkan Menu Fun`},
  {title: "Islami Menu 🕋", rowId: `islamimenu`, description: `Menampilkan Menu Islami`},
  {title: "Random Menu 😵", rowId: `randommenu`, description: `Menampilkan Menu Random`},
  {title: "Search Menu 🔎", rowId: `searchmenu`, description: `Menampilkan Menu Khusus Search`},
  {title: "Gacha Menu 🌀", rowId: `gachamenu`, description: `Menampilkan Menu Khusus Gacha`},
  {title: "Asupan Menu ♀️", rowId: `asupanmenu`, description: `Menampilkan Menu Khusus Asupan`},
  {title: "Random Image Menu 📱", rowId: `randomimagemenu`, description: `Menampilkan Menu Random Image`},
  {title: "Randlm Anime Menu 📱", rowId: `randomanimemenu`, description: `Menampilkan Menu Random Anime`},
  {title: "Wallpaper Menu 📱", rowId: `wallpapermenu`, description: `Menampilkan Menu Wallpaper`},
  {title: "Nsfw Menu 🔞", rowId: `nsfwmenu`, description: `Menampilkan Menu Khusus Nsfw`},
  {title: "Other Menu 🕵️‍♂️", rowId: `othermenu`, description: `Menampilkan Menu Lainnya`}
  ]
  },
  ]
  ichi.sendList(m.chat, 'Berikut Adalah List Command Yang Tersedia Di Dalam Bot. Jangan Lupa Untuk Selalu Mematuhi Rules 🤝', global.ownerName, `*Hello ${pushname} 👋*`, `Klik Disini 👇`, sections, m)
  } else if (set.templateImage) {
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+simplemenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  } else if (set.templateVideo) {
  ichi.sendMessage(m.chat, { video: global.thumbnail, caption: menu+simplemenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  } else if (set.templateDocument) {
  ichi.sendMessage(m.chat, { document: global.doc, mimetype: 'application/pdf', fileName: 'Whatsapp Bot By '+global.ownerName, caption: menu+simplemenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  }
  break
case 'ownermenu': case 'ownercmd': {
  let { ownermenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+ownermenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'groupmenu': case 'groupcmd': {
  var { groupmenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+groupmenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'storemenu': case 'storecmd': {
  var { storemenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+storemenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'rpgmenu': case 'rpgcmd': {
  var { rpgmenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+rpgmenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'makermenu': case 'makercmd': {
  var { makermenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+makermenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'downloadmenu': case 'downloadcmd': {
  var { downloadmenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+downloadmenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'ephotomenu': case 'ephotocmd': {
  var { ephotomenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+ephotomenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'photooxymenu': case 'photooxycmd': {
  var { photooxymenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+photooxymenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'islamimenu': case 'islamicmd': {
  var { islamimenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+islamimenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'randommenu': case 'randomcmd': {
  var { randommenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+randommenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'searchmenu': case 'searchcmd': {
  var { searchmenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+searchmenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'gachamenu': case 'gachacmd': {
  var { gachamenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+gachamenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'asupanmenu': case 'asupancmd': {
  var { asupanmenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+asupanmenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'randomimagemenu': case 'randomimagecmd': {
  var { randomimagemenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+randomimagemenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'randomanimemenu': case 'randomanimecmd': {
  var { randomanimemenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+randomanimemenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'wallpapermenu': case 'wallpapercmd': {
  var { wallpapermenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+wallpapermenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'nsfwmenu': case 'nsfwcmd': {
  var { nsfwmenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+nsfwmenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'othermenu': case 'othercmd': {
  var { othermenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+othermenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'gamemenu': case 'gamecmd': {
  var { gamemenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+gamemenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'textpromenu': case 'textprocmd': {
  var { textpromenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+textpromenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'funmenu': case 'funcmd': {
  var { funmenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { image: global.thumb, caption: menu+funmenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break
case 'allmenu': case 'allcmd': {
  let { funmenu, textpromenu, gamemenu, ownermenu, groupmenu, storemenu, rpgmenu, makermenu, downloadmenu, ephotomenu, photooxymenu, islamimenu, randommenu, searchmenu, gachamenu, asupanmenu, randomimagemenu, randomanimemenu, wallpapermenu, nsfwmenu, othermenu } = require('../storage/confat.js')
  ichi.sendMessage(m.chat, { video: global.thumbnail, caption: menuu+ownermenu(prefix)+'\n'+groupmenu(prefix)+'\n'+storemenu(prefix)+'\n'+rpgmenu(prefix)+'\n'+gamemenu(prefix)+'\n'+makermenu(prefix)+'\n'+downloadmenu(prefix)+'\n'+textpromenu(prefix)+'\n'+ephotomenu(prefix)+'\n'+photooxymenu(prefix)+'\n'+funmenu(prefix)+'\n'+islamimenu(prefix)+'\n'+randommenu(prefix)+'\n'+searchmenu(prefix)+'\n'+gachamenu(prefix)+'\n'+asupanmenu(prefix)+'\n'+randomimagemenu(prefix)+'\n'+randomanimemenu(prefix)+'\n'+wallpapermenu(prefix)+'\n'+nsfwmenu(prefix)+'\n'+othermenu(prefix), buttons: buttonmenu, contextInfo: { externalAdReply: { showAdAttribution: true, title: global.packname, body: global.author, description: 'Made With ❤️ '+global.ownerName, mediaType: 2, thumbnail: global.thumb, mediaUrl: global.sosmed}}}, { quoted: m })
  }
  break

//Eval
default:
if (budy.startsWith('=>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  function Return(sul) {
  sat = JSON.stringify(sul, null, 2)
  bang = util.format(sat)
  if (sat == undefined) {
  bang = util.format(sul)
  }
  return m.reply(bang)
  }
  try {
  m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
  m.reply(String(e))
  }
  }  
if (budy.startsWith('>')) {
  if (!isOwner) return m.reply(mess.botOwner)
  try {
  let evaled = await eval(budy.slice(2))
  if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
  await m.reply(evaled)
  } catch (err) {
  m = String(err)
  await m.reply(m)
  }
  }
if (budy.startsWith('$')) {
  if (!isOwner) return m.reply(mess.botOwner)
  exec(budy.slice(2), (err, stdout) => {
  if(err) return m.reply(`${err}`)
  if (stdout) return m.reply(stdout)
  })
  }
  }
  } catch (err) {
  m.reply(util.format(err))
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})