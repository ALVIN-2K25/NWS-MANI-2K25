const config = require('../config')
const { cmd, commands } = require('../command')
const { getBuffer, getGroupAdmins, getRandom, h2k, isUrl, Json, runtime, sleep, fetchJson} = require('../lib/functions')
 function genMsgId() {
  const prefix = "3EB";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomText = prefix;

  for (let i = prefix.length; i < 22; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomText += characters.charAt(randomIndex);
  }

  return randomText;
} 
cmd({
    pattern: "alive",
    react: "👋",
    alias: ["online","test","bot"],
    desc: "Check bot online or no.",
    category: "main",
    use: '.alive',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
const tes = `${config.ALIVE}

⦁ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀɴɪ ᴛᴇᴀᴍ⦁`
await conn.sendMessage(from, { image: { url:"https://telegra.ph/file/23374348d68294eabe6fa.jpg"}, caption: tes }, { quoted: mek  ,messageId:genMsgId() })

} catch (e) {
reply('*Error !!*\n\n' + e)
l(e)
}
})
cmd({
        pattern: "restart",
        react: "🔄",
        desc: "To restart bot",
        category: "owner",
        filename: __filename
    },
  async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner && !isSachintha && !isSavi && !isSadas && !isMani && !isMe)return;
    try{    const { exec } = require("child_process")
            const txt = await conn.sendMessage(from, { text: '🌟 𝗦𝗧𝗢𝗣𝗣𝗜𝗡𝗚 𝗔𝗟𝗟 𝗙𝗨𝗡𝗖𝗧𝗜𝗢𝗡𝗦 𝗔𝗡𝗗 𝗡𝗢𝗪 𝗠𝗔𝗡𝗜 𝗢𝗙𝗙𝗜𝗖𝗔𝗟 𝗡𝗘𝗪𝗦 𝗕𝗢𝗧 𝗜𝗦 𝗥𝗘𝗦𝗧𝗔𝗥𝗧𝗜𝗡𝗚...♻' }, { quoted: mek, messageId:genMsgId() });
            await conn.sendMessage(from, { react: { text: "🔄", key: txt.key }})
            exec('pm2 restart all')
} catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
            pattern: "join",
            react: "🔗",
            desc: "joins group by link",
            category: "group",
            use: '<group link.>',
        },
       async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
if(!isOwner && !isSachintha && !isSavi && !isSadas && !isMani && !isMe)return;
    try{  if (!q) return reply(`Please give me Query`);
            if (!q.split(" ")[0] && !q.split(" ")[0].includes("whatsapp.com"))
               reply("Link Invalid, Please Send a valid whatsapp Group Link!");
            let result = q.split(" ")[0].split("https://chat.whatsapp.com/")[1];
            await conn.groupAcceptInvite(result)
                .then((res) => reply("Join Successfuly✅"))
                .catch((err) => reply("Error in Joining Group"));
} catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
            pattern: "promote",
            desc: 'promote the person',
            react: ("🔝"),
            category: "group",
            filename: __filename,
            use: '<quote|reply>',
        },
              async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
                 try {    
                 if (!isGroup) { await reply(`only for groups`);
                 return await conn.sendMessage(from, { react: { text: "❌", key: mek.key }}) }
                 if (!isBotAdmins) { await reply(`*I can't do that. give group admin*`);
                 return await conn.sendMessage(from, { react: { text: "❌", key: mek.key }}) }

            if (isOwner || isSachintha || isSavi || isSadas || isMani || isMe) {
            let users;
                if (m.quoted === null) {
                if (!q) { await reply(`*Please give me a quoted user or number ❗*`);
                 return await conn.sendMessage(from, { react: { text: "❌", key: mek.key }}) }
                users = m.body.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
                } else {
                users = m.quoted.sender;
                }

                const alreadyAdmin = groupAdmins?.includes(users)

                if (alreadyAdmin) { await reply("*Already, This user is an Admin*")
                return await conn.sendMessage(from, { react: { text: "❌", key: mek.key }}) }

                await conn.groupParticipantsUpdate(m.chat, [users], "promote");
                await reply(`@${users.replace(/[^0-9]/g, "")} *has been promoted as an admin of the group!*`);
                await conn.sendMessage(from, { react: { text: "✅", key: mek.key }})
                
                } else { 
                await reply('This Only For Admins')
                return await conn.sendMessage(from, { react: { text: "❌", key: mek.key }}) }
} catch (e) {
        await reply(`*❌ Errored :-* ` + e);
return await conn.sendMessage(from, { react: { text: "❌", key: mek.key }}) 
l(e)
}
})

cmd({
  pattern: "kick",
  react: "⛔",
  alias: [".."],
  desc: "Kicks replied/quoted user from group.",
  category: "group",
  filename: __filename,
  use: '<quote|reply|number>',
},           
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
   try {
       if (!m.isGroup) return reply(`only for groups`);
  if (!isBotAdmins) return reply(`I can't do that. give group admin`);


    const user = m.quoted.sender;
    if (!user) return reply(`*Please give me a user to kick ❗*`);
    await conn.groupParticipantsUpdate(m.chat, [user], "remove");
   reply(`${user} *has been kicked out of the group!*`);
  } catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
            pattern: "hidetag",
            react: "📌",
            alias: ["htag"],
            desc: "Tags everyperson of group without mentioning their numbers",
            category: "group",
            filename: __filename,
            use: '<text>',
        },
      async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isSachintha, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
   try { if (!m.isGroup) return reply(tlang().group);
       if (!m.isGroup) return reply(`only for groups`);
            conn.sendMessage(m.chat, {
                text: q ? text : "",
                mentions: participants.map((a) => a.id),
            }, {
                quoted: mek ,messageId:genMsgId() 
            });
     } catch (e) {
reply('*Error !!*')
l(e)
}
})
cmd({
            pattern: "add",
            react: "👥",
            desc: "Add that person in group",
            fromMe: true,
            category: "group",
            filename: __filename,
            use: '<number>',
        },
         async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
   try {
      
       if (!m.isGroup) return reply(`only for groups`);
            if (!q) return reply("Please provide me number.");
        
            let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
            await conn.groupParticipantsUpdate(m.chat, [users], "add");
} catch (e) {
reply('*Error !!*')
l(e)
}
})
        
    
cmd({
    pattern: "ping",
    react: "",
    alias: ["speed"],
    desc: "Check bot\'s ping",
    category: "main",
    use: '.ping',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
var inital = new Date().getTime();
let ping = await conn.sendMessage(from , { text: '```Pinging!!!```'  }, { quoted: mek, messageId:genMsgId() } )
var final = new Date().getTime();
await conn.sendMessage(from, { delete: ping.key })
let reactmsg = await conn.sendMessage(from , { text: '*📍Pong-:* *' + (final - inital) + ' ms* '  }, { quoted: mek ,messageId:genMsgId()} )
return await conn.sendMessage(from, { react: { text: "✅", key: reactmsg.key } });

} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "del",
    react: "✅",
    alias: [","],
    desc: "delete message",
    category: "main",
    use: '.del',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isSachintha, isSavi, isSadas, isMani, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    const key = {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: m.quoted.id,
                    participant: m.quoted.sender
                }
                await conn.sendMessage(m.chat, { delete: key })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "menu",
    react: "📂",
    alias: ["panel","list","commands"],
    desc: "Get bot\'s command list.",
    category: "main",
    use: '.menu',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,  isSachintha, isSavi, isSadas, isMani, isMe,isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
    let menuc1 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'group'){
if(!commands[i].dontAddCommandList){
menuc1 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc2 = ``
for (let i=0;i<commands.length;i++) { 
  if(commands[i].category === 'main'){
  if(!commands[i].dontAddCommandList){
  menuc2 += `*│⩥* .${commands[i].pattern}\n`
  }}};

let menuc3 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'convert'){
  if(!commands[i].dontAddCommandList){
    menuc3 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc4 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'search'){
  if(!commands[i].dontAddCommandList){
menuc4 += `*│►* .${commands[i].pattern}\n`
}}};

let menuc = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'download'){
  if(!commands[i].dontAddCommandList){
menuc += `*│►* .${commands[i].pattern}\n`
}}};

let menuc6 = ``
for (let i=0;i<commands.length;i++) { 
if(commands[i].category === 'owner'){
if(!commands[i].dontAddCommandList){
  menuc6 += `*│⩥* .${commands[i].pattern}\n`
}}};
let menumg = `*HELLO 👋*  ${pushname}

*╭─「💦ꜱʀɪ ʟᴀɴᴋᴀɴ ɴᴇᴡꜱ ʙᴏᴛ💦」*
┃ *➩⚙️ ʀᴜɴ ᴛɪᴍᴇ -* ${runtime(process.uptime())}
┃ *➩⚙️ ʀᴀᴍ ᴜꜱᴀɢᴇ -* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*╰───────────●●►*

     *⚡News Bot Command Panel*
     *⦁──────────────────⦁*
              
*🕵️‍♂️Main Commands*

${menuc2}

*🕵️‍♂️Group Commands*

${menuc1}
*╰────────────●●►*

*💥 Reply The Number you want to Select.*`
     
await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/9525e0231954ad5e5eef8.jpg" }, caption: menumg }, { quoted: mek, messageId:genMsgId() })
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
    pattern: "system",
    alias: ["device","ofcc","truth"],
    desc: "Get bot\'s system..",
    category: "main",
    use: '.system',
    filename: __filename
},
async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,  isSachintha, isSavi, isSadas, isMani, isMe,isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {

  try{
const tes = `┌───────────────────────
├ ⏰ *\`Uptime :-\`* ${runtime(process.uptime())}
├ 📟 *\`Ram usage :-\`* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
├ ⚙️ *\`Platform :-\`* Workflows
├ 👨‍💻 *\`Owner :-\`* M.G.Manthila
├ 🪢 *\`vershion :-\`* 2.0.1
└───────────────────────`

 
const txt = await conn.sendMessage(from, { image: { url: "https://telegra.ph/file/d00625e5bb5baa9dd5520.jpg" }, caption: tes }, { quoted: mek, messageId:genMsgId() })
await conn.sendMessage(from, { react: { text: "📟", key: txt.key }})
  
} catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
        pattern: "support",
        react: "🪀",
        desc: "Sends official support group link.",
        category: "group",
        filename: __filename,
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,  isSachintha, isSavi, isSadas, isMani, isMe,isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
            const tes = `*🕵️‍♂️ MANI NEWS SUPPORT GROUP🕵️‍♂️*

🪀 *WHATSAPP GROUP LINK:* 
https://chat.whatsapp.com/GW7LiCX9X0P2lJksLuMODs

*🌟 THANK YOU FOR JOINING THE SUPPORT GROUP...*`
        await conn.sendMessage(from, { image: { url: config.LOGO }, caption: tes }, { quoted: mek, messageId:genMsgId() })

  } catch (e) {
reply('*Error !!*')
l(e)
}
})

cmd({
        pattern: "script",
        react: "🎗️",
        desc: "Sends official support group link.",
        category: "group",
        filename: __filename,
    },
    async(conn, mek, m,{from, l, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname,  isSachintha, isSavi, isSadas, isMani, isMe,isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
    try{
            const tes = `✨ 𝗠𝗔𝗡𝗜 𝗢𝗙𝗖 𝗡𝗘𝗪𝗦 𝗕𝗢𝗧 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟𝗬  𝗜𝗡𝗦𝗧𝗔𝗟𝗟𝗘𝗗 ✅

 📢 THE MAIN HOPE OF CREATING THE IS TO PROVIDE CONNECTIONCE TO THE USER OF THIS MANI OFFICIAL NEWS BOT TO GET NEWS EASILY WITHIN THE WHATSAPP APP. 

 📢 THIS BOT IS ABLE TO GET 100% AUTHENTIC LOCAL NEWSWITHIN24 HOURS *(THIS* *NEWS* *OBTAINED* *FROM* *HIRU* *NEWS* *OFFICAL* *WEB* *PAGE* *OD* *HIRU* *MEDIA.)* 

 ⚠️ FURTHERMORE IF YOUR WHATSAPP ACCOUNT GETS DAMAGED OR BANNED BY USING  THIS, WE ARE NOT RESPONSIBLE AND YOU FURTHERMORE, IF YOU SHOULD BEAR THE RESPONSIBILITY.

*🪀 YOU CAN CREATE THE BOT AND SEE THE DEPLOY METHODS FROM THE WEBSITE BELLOW. 👇*


🌏 *WEBSITE:* https://mani-ofc-pair-code.onrender.com

👨‍💻 *OWNER:*  Darkmax Team

🎡 *GITHHUB:*  https://github.com/MANI-OFC-NEWS-BOT-24/MANI-NEWS-24HOURS/.`
        await conn.sendMessage(from, { image: { url: config.LOGO }, caption: tes }, { quoted: mek, messageId:genMsgId() })

  } catch (e) {
reply('*Error !!*')
l(e)
}
})

