const {
default: makeWASocket,
useMultiFileAuthState,
DisconnectReason,
getDevice,
fetchLatestBaileysVersion,
jidNormalizedUser,
getContentType,
generateWAMessageFromContent,
generateForwardMessageContent,
prepareWAMessageMedia,
proto
} = require('@whiskeysockets/baileys')

const fs = require('fs')
const P = require('pino')
//const config = require('./config')
const qrcode = require('qrcode-terminal')
const NodeCache = require('node-cache')
const util = require('util')
const envv2 = require('./configv2');
var { updateCMDStore,isbtnID,getCMDStore,getCmdForCmdId,connectdb,input,get,updb,updfb } = require("./lib/database")
const config = require('./config')

const {
getBuffer,
getGroupAdmins,
getRandom,
h2k,
isUrl,
Json,
runtime,
sleep,
fetchJson,
fetchBuffer,
getFile
} = require('./lib/functions')
const {
sms,
downloadMediaMessage
} = require('./lib/msg')
const axios = require('axios')
const {
File
} = require('megajs')
const path = require('path')

const msgRetryCounterCache = new NodeCache()
//const ownerNumber = ['94705940887']
//const prefix = '.'
//===================SESSION============================
if (!fs.existsSync(__dirname + '/auth_info_baileys/creds.json')) {
if (config.SESSION_ID) {
const sessdata = config.SESSION_ID.replace("BLACK-PANTHER=", "")
const filer = File.fromURL(`https://mega.nz/file/${sessdata}`)
filer.download((err, data) => {
if (err) throw err
fs.writeFile(__dirname + '/auth_info_baileys/creds.json', data, () => {
console.log("Session download completed !!")
})        
})
}
}
// <<==========PORTS===========>>
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;
//====================================
async function connectToWA() {
//==========================================

await connectdb()

//------------------------------------------------
const env2 = await updb();
//const config = require('./config');
const ownerNumber = config.OWNER;
const prefix = config.PREFIX;
//------------------------------------------------  
    
const {
version,
isLatest
} = await fetchLatestBaileysVersion()
console.log(`using WA v${version.join('.')}, isLatest: ${isLatest}`)
const {
state,
saveCreds
} = await useMultiFileAuthState(__dirname + '/auth_info_baileys/')
const conn = makeWASocket({
logger: P({
level: "fatal"
}).child({
level: "fatal"
}),
printQRInTerminal: false,
generateHighQualityLinkPreview: true,
auth: state,
defaultQueryTimeoutMs: undefined,
msgRetryCounterCache
})
    
conn.ev.on('connection.update', async (update) => {
const {
connection,
lastDisconnect
} = update
if (connection === 'close') {
if (lastDisconnect.error.output.statusCode !== DisconnectReason.loggedOut) {
connectToWA()
}
} else if (connection === 'open') {

console.log('Installing plugins 🔌... ')
const path = require('path');
fs.readdirSync("./plugins/").forEach((plugin) => {
if (path.extname(plugin).toLowerCase() == ".js") {
require("./plugins/" + plugin);
}
});
console.log('Plugins installed ✅')
console.log('Bot connected ✅')
console.log('Dark Yash MD connected to whatsapp ✅')

//=============================================START MSG=======================================================================================================

let up = `❍⚯──────────────────────⚯❍
   *⚡ DARK-YASH-MD CONNECTED ✅*
❍⚯──────────────────────⚯❍

*⚙️ DARK-YASH-MD CURRENT SETTINGS* ⚙️

*┏──────────────────────┓*
├ *\`➤ PREFIX:\`* ${prefix}
├ *\`➤ POWER:\`* ${config.POWER}
├ *\`➤ LANGUAGE:\`* ${config.LANG}
├ *\`➤ BUTTONS:\`* ${envv2.NON_BTN}
├ *\`➤ WORK_TYPE:\`* ${config.MODE}
├ *\`➤ AUTO_VOICE:\`* ${config.AUTO_VOICE}
├ *\`➤ AUTO_REACT:\`* ${config.AUTO_REACT}
├ *\`➤ COMPOSING:\`* ${config.AUTO_TYPING}
├ *\`➤ AUTO_STICKER:\`* ${config.AUTO_STICKER}
├ *\`➤ AUTO_RESTART:\`* false
├ *\`➤ READ_MESSAGE:\`* ${config.CMD_MSG_READ}
├ *\`➤ ALWAYS_ONLINE:\`* ${config.ALWAYS_ONLINE}
├ *\`➤ ANTI_BAD:\`* false
├ *\`➤ ANTI_BAD_ACTION:\`* false
├ *\`➤ ANTI_LINK:\`* false
├ *\`➤ ANTI_LINK_VALUE:\`* false
├ *\`➤ ANTI_LINK_ACTION:\`* false
├ *\`➤ ANTI_BOT:\`* false 
├ *\`➤ AUTO_READ_STATUS:\`* ${config.AUTO_READ_STATUS}
├ *\`➤ MAX_SIZE:\`* 100
├ *\`➤ SUDO:\`* ${config.OWNER}
├ *\`➤ AUTO_INBOX_BLOCK:\`* 
├ *\`➤ BLOCKED_GROUPS:\`*
├ *\`➤ LOGO:\`* ${config.LOGO}
├ *\`➤ ALIVE_MESSAGE:\`* ${config.ALIVE}
*┗──────────────────────┛*

*📂 GITHUB_AUTH_TOKEN Rate limit remaining:-* \`4074\`	
  
📖 Use the *(.apply)*  *(.settings)* and *(.remove)* commands to change these settings.

*🌟 Thank You Fro Using DARK YASH MD...*
`;
conn.sendMessage(ownerNumber + "@s.whatsapp.net", { image: { url: config.LOGO }, caption: up })
//await sleep('4000')
//conn.sendMessage(ownerNumber + "@s.whatsapp.net", { text: dft })

}
})
//========================================================================//================================================================================================
    

conn.ev.on('creds.update', saveCreds)
conn.ev.on('messages.upsert', async (mek) => {
try {
mek = mek.messages[0]
if (!mek.message) return
            
//=====================================STATUS SEEN INDEX CMD=====================================

mek.message = (getContentType(mek.message) === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUS === "true"){
await conn.readMessages([mek.key])
}
//===============================================================================================

if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUSS === "random"){
const emojis = ['🧩', '🍉', '💜', '🌸', '🪴', '💊', '💫', '🍂', '🌟', '🎋', '😶‍🌫️', '🫀', '🧿', '👀', '🤖', '🚩', '🥰', '🗿', '💜', '💙', '🌝', '🖤', '💚'];
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
await conn.sendMessage(mek.key.remoteJid, {
react: {
text: randomEmoji,
key: mek.key,
} 
}, { statusJidList: [mek.key.participant] });
}

if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUSS === "green"){
const emojis = ['💚'];
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
await conn.sendMessage(mek.key.remoteJid, {react: { text: randomEmoji, key: mek.key,} 
}, { statusJidList: [mek.key.participant] });
}

if (mek.key && mek.key.remoteJid === 'status@broadcast' && config.AUTO_READ_STATUSS === "true"){
const emojis = ['💚'];
const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
await conn.sendMessage(mek.key.remoteJid, {react: { text: randomEmoji, key: mek.key,} 
}, { statusJidList: [mek.key.participant] });
}

//======================================================================================================

//-------------------------------------------------------
fs.writeFileSync('isMe.txt', conn.user.id.split(':')[0]);
//-------------------------------------------------------           
           
const m = sms(conn, mek)
const type = getContentType(mek.message)
const content = JSON.stringify(mek.message)
const from = mek.key.remoteJid
const quoted = type == 'extendedTextMessage' && mek.message.extendedTextMessage.contextInfo != null ? mek.message.extendedTextMessage.contextInfo.quotedMessage || [] : []
const body = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text :(type == 'interactiveResponseMessage' ) ? mek.message.interactiveResponseMessage  && mek.message.interactiveResponseMessage.nativeFlowResponseMessage && JSON.parse(mek.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson) && JSON.parse(mek.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id :(type == 'templateButtonReplyMessage' )? mek.message.templateButtonReplyMessage && mek.message.templateButtonReplyMessage.selectedId  : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : ''
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? (conn.user.id.split(':')[0] + '@s.whatsapp.net' || conn.user.id) : (mek.key.participant || mek.key.remoteJid)
const senderNumber = sender.split('@')[0]
const botNumber = conn.user.id.split(':')[0]
const pushname = mek.pushName || 'USER'
const developers = ['94742614390', '94743218422'];
const isDeveloper = developers.includes(senderNumber);
const isbot = botNumber.includes(senderNumber)
const ismani = developers.includes(senderNumber)
const isMe = botNumber.includes(senderNumber)
const Mani = '94742614390,94743218422'
const isMani = Mani?.includes(senderNumber)
const isOwner = ownerNumber.includes(senderNumber) || isMe || isDeveloper
const botNumber2 = await jidNormalizedUser(conn.user.id); 
const groupMetadata = isGroup ? await conn.groupMetadata(from).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber2) : false
const isreaction = m.message.reactionMessage ? true : false
            
const isAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAnti = (teks) => {
let getdata = teks
for (let i = 0; i < getdata.length; i++) {
if (getdata[i] === from) return true
}
return false
}
const reply = async (teks) => {
return await conn.sendMessage(from, {
text: teks
}, {
quoted: mek
})
}


        
//forward
conn.forwardMessage = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete (message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message
}
}

let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo
}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo
}
} : {})
} : {})
await conn.relayMessage(jid, waMessage.message, { messageId: waMessage.key.id })
return waMessage
}
//-----------------------------------------------------------------------------------------------------            
          
conn.edit = async (mek, newmg) => {
await conn.relayMessage(from, {
protocolMessage: {
key: mek.key,
type: 14,
editedMessage: {
conversation: newmg
}
}
}, {})
}
conn.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
let mime = '';
let res = await axios.head(url)
mime = res.headers['content-type']
if (mime.split("/")[1] === "gif") {
return conn.sendMessage(jid, {
video: await getBuffer(url),
caption: caption,
gifPlayback: true,
...options
}, {
quoted: quoted,
...options
})
}
let type = mime.split("/")[0] + "Message"
if (mime === "application/pdf") {
return conn.sendMessage(jid, {
document: await getBuffer(url),
mimetype: 'application/pdf',
caption: caption,
...options
}, {
quoted: quoted,
...options
})
}
if (mime.split("/")[0] === "image") {
return conn.sendMessage(jid, {
image: await getBuffer(url),
caption: caption,
...options
}, {
quoted: quoted,
...options
})
}
if (mime.split("/")[0] === "video") {
return conn.sendMessage(jid, {
video: await getBuffer(url),
caption: caption,
mimetype: 'video/mp4',
...options
}, {
quoted: quoted,
...options
})
}
if (mime.split("/")[0] === "audio") {
return conn.sendMessage(jid, {
audio: await getBuffer(url),
caption: caption,
mimetype: 'audio/mpeg',
...options
}, {
quoted: quoted,
...options
})
}
}

/*const banbn = await fetchJson(`https://raw.githubusercontent.com/NEW-GITHHUB/DARK-YASH-BAN-UAER/refs/heads/main/public/ban_user.json`)
const plynYnna = banbn.split(",")
const isBanUser = [ ...plynYnna ]
.map((v) => v.replace(/[^0-9]/g, "") + "@s.whatsapp.net")
.includes(sender)*/
let epaneda = `${config.SUDO}`;
const epada = epaneda.split(",")
const isSudo = [ ...epada ]
.includes(sender)
    
//===================================OWNER REACT==============================================================
 if(isMani){
 if(!isreaction){
 await conn.sendMessage(from, { react: { text: '👨🏻‍💻', key: mek.key } });
 }
 }
//============================================================================================================
 

//===========================WORK TYPE CMD====================================================================
if (isCmd && config.CMD_MSG_READ === 'cmd' ){
await conn.readMessages([mek.key]);
}
if (config.CMD_MSG_READ === 'all' ){
await conn.readMessages([mek.key]);
}
if (config.CMD_MSG_READ === 'true' ){
await conn.readMessages([mek.key]);
}   
//<<<<<<<<<<<<<<==========ALWAYS ONLINE==========>>>>>>>>>>>>>> 

if (config.ALWAYS_ONLINE === 'true' ){
conn.sendPresenceUpdate('available', mek.chat)
}
if (config.ALWAYS_ONLINE === 'false'){
conn.sendPresenceUpdate('unavailable', mek.chat)
}

//<<<<<<<<<<<<<<==========AUTO BLOCK==========>>>>>>>>>>>>>> 
if (config.AUTO_BLOCK_CMD === 'true'&& mek.chat.endsWith("@s.whatsapp.net")) {
if(!isMe && !isMani){

await conn.sendMessage(from, { text: `*1*` });
await sleep(1000);
await conn.sendMessage(from, { text: `*2*` });
await sleep(1000);
await conn.sendMessage(from, { text: `*3*` });
await sleep(1000);
await conn.sendMessage(from, { text: `*BLOCKED !!*` });
await conn.updateBlockStatus(mek.sender, "block");
}
}

/*if (config.AUTO_BLOCK_CMDS === 'true' && mek.chat.endsWith("@s.whatsapp.net")) {
if (!isMe && !isMani && isCmd) {
await conn.sendMessage(from, { text: `*1*` });
await sleep(1000);
await conn.sendMessage(from, { text: `*2*` });
await sleep(1000);
await conn.sendMessage(from, { text: `*3*` });
await sleep(1000);
await conn.sendMessage(from, { text: `*BLOCKED !!*` });
await conn.updateBlockStatus(mek.sender, "block");
}
}*/

//<<<<<<<<<<<<<<==========ANTI CALL==========>>>>>>>>>>>>>> 

conn.ev.on("call", async(json) => {
if(config.ANTI_CALL === 'true' ) { 
for(const id of json) {
if(id.status == "offer") {
if(id.isGroup == false) {
await conn.sendMessage(id.from, {
text: `⚠️︱Call rejected automaticaly Because owner is busy`, 
mentions: [id.from]
});
await conn.rejectCall(id.id, id.from);
} else {
await conn.rejectCall(id.id, id.from);
}
}
}}
});
    				

//<<<<<<<<<<<<<<==========AUTO REACT==========>>>>>>>>>>>>>> 
const emojis = ['❤', '💕', '😻', '🧡', '💛', '💚', '💙', '💜', '🖤', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '🙂', '🤗', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👋']
const emokis = emojis[Math.floor(Math.random() * (emojis.length))]

if (config.AUTO_REACT === 'true' && !isMe) {
await conn.sendMessage(mek.chat, {
react: {
text: emokis,
key: mek.key
}
});
}
//<<<<<<<<<<<<<<===============================>>>>>>>>>>>>>>
if(!isOwner && config.MODE === "private") return
if(!isOwner && isGroup && config.MODE === "inbox") return
if(!isOwner && !isGroup && config.MODE === "groups") return

//======================================================================  

//if ( isCmd && isBanUser ) return reply("❌ *You are banned from using Commands.....*")
//<<<<<<<<<<<<<<============================================>>>>>>>>>>>>>> 
//==================================ANTI DELETE========================================

conn.sendButtonMessage = async (jid, buttons, quoted, opts = {}) => {

let header;
if (opts?.image) {
var image = await prepareWAMessageMedia({
image: {
url: opts && opts.image ? opts.image : ''
}
}, {
upload: conn.waUploadToServer
})
header = {
title: opts && opts.header ? opts.header : '',
hasMediaAttachment: true,
imageMessage: image.imageMessage,
}

} else {
header = {
title: opts && opts.header ? opts.header : '',
hasMediaAttachment: false,
}
}


let message = generateWAMessageFromContent(jid, {
viewOnceMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2,
                            },
interactiveMessage: {
body: {
text: opts && opts.body ? opts.body : ''
},
footer: {
text: opts && opts.footer ? opts.footer : ''
},
header: header,
nativeFlowMessage: {
buttons: buttons,
messageParamsJson: ''
}
}
}
}
}, {
quoted: quoted
})
await conn.sendPresenceUpdate('composing', jid)
return await conn.relayMessage(jid, message["message"], {
messageId: message.key.id
})
}
//==================================plugin map================================
const events = require('./command')
const cmdName = isCmd ? body.slice(1).trim().split(" ")[0].toLowerCase() : false;
if (isCmd) {
const cmd = events.commands.find((cmd) => cmd.pattern === (cmdName)) || events.commands.find((cmd) => cmd.alias && cmd.alias.includes(cmdName))
if (cmd) {
if (cmd.react) conn.sendMessage(from, {
react: {
text: cmd.react,
key: mek.key
}
})

try {
cmd.function(conn, mek, m, {
from,
prefix,
quoted,
body,
isCmd,
command,
args,
q,
isGroup,
sender,
senderNumber,
botNumber2,
botNumber,
pushname,
isMe,
isOwner,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmins,
isAdmins,
reply
});
}catch (e) {
console.error("[PLUGIN ERROR] ", e);
}
}
}
events.commands.map(async (command) => {
if (body && command.on === "body") {
command.function(conn, mek, m, {
from,
prefix,
quoted,
body,
isCmd,
command,
args,
q,
isGroup,
sender,
senderNumber,
botNumber2,
botNumber,
pushname,
isMe,
isOwner,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmins,
isAdmins,
reply
})
} else if (mek.q && command.on === "text") {
command.function(conn, mek, m, {
from,
quoted,
body,
isCmd,
command,
args,
q,
isGroup,
sender,
senderNumber,
botNumber2,
botNumber,
pushname,
isMe,
isOwner,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmins,
isAdmins,
reply
})
} else if (
(command.on === "image" || command.on === "photo") &&
mek.type === "imageMessage"
) {
command.function(conn, mek, m, {
from,
prefix,
quoted,
body,
isCmd,
command,
args,
q,
isGroup,
sender,
senderNumber,
botNumber2,
botNumber,
pushname,
isMe,
isOwner,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmins,
isAdmins,
reply
})
} else if (
command.on === "sticker" &&
mek.type === "stickerMessage"
) {
command.function(conn, mek, m, {
from,
prefix,
quoted,
body,
isCmd,
command,
args,
q,
isGroup,
sender,
senderNumber,
botNumber2,
botNumber,
pushname,
isMe,
isOwner,
groupMetadata,
groupName,
participants,
groupAdmins,
isBotAdmins,
isAdmins,
reply
})
}
});
//============================================================================
if (isAnti(config.ANTI_LINK === 'true') && isBotAdmins) {
if(!isAdmins){
if(!isMe){
if (body.match(`chat.whatsapp.com`)) {
await conn.sendMessage(from, { delete: mek.key })
}
}
}}

//============================================================================
var bad = await fetchJson("https://github.com/vihangayt0/server-/raw/main/xeonsl_bad.json")
if (isAnti(config.ANTI_BAD === 'true') && isBotAdmins) {
if (!isAdmins) {
for (any in bad) {
if (body.toLowerCase().includes(bad[any])) {
if (!body.includes('tent')) {
if (!body.includes('docu')) {
if (!body.includes('http')) {
if (groupAdmins.includes(sender)) return
if (mek.key.fromMe) return
await conn.sendMessage(from, { delete: mek.key })
await conn.sendMessage(from, { text: '*Bad word detected !*' })
//await conn.groupParticipantsUpdate(from, [sender], 'remove')
}
}
}
}
}
}
}
//============================================================================
async function antibot(Void, citel) {
if (isAnti(config.ANTI_BOT === 'true')) return
if (isAdmins) return
if (!isBotAdmins) return
if (isOwner) return
if (isGroup) {
var user = check_id(mek.key.id)
if (user.is_bot) {
try {
await conn.sendMessage(from, { text: `*Other bots are not allowed here !!*` });
return await conn.groupParticipantsUpdate(from, [sender], 'remove')
} catch { }
}
}
}
try {
await antibot(conn, mek)
} catch { }
//============================================================================

switch (command) {
case 'jid':
reply(from)
break
case 'device': {
let deviceq = getDevice(mek.message.extendedTextMessage.contextInfo.stanzaId)

reply("*He Is Using* _*Whatsapp " + deviceq + " version*_")
}
break
default:
}
} catch (e) {
const isError = String(e)
console.log(isError)
}
})
}
app.get("/", (req, res) => {
res.send("📟 black panther working");
});
app.listen(port, () => console.log(`panther Server listening on port http://localhost:${port}`));
setTimeout(async () => {
await connectToWA()
}, 1000);
