const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID === undefined ? 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ0FVVE9tZVhhYnh2Zm9uaVNtREpEaGdGYkpSdmNUQkdySG43NzNHYlUwWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN3I4aTdvSUcxUEJwVHFxaklhbHhrM0lxckExZnFGeDd3MGNiSXc0Ull4RT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TkdUaC9rcThNcEhEaGQ0aEdwaTMrelpXZGUxWnlRVWFHdk1vbUQ2RkZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUTEt0YW9nc1JENnVxYUFvTXRCQ3E0b2xEMmJBZk1PbFFrc3p4VFpYRVNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLOEJROWNid3Z5Q05kcm1VdkhNdC81UmJGbFV4L0Q4TkdvK3YvSlRlbDg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxkSlJvd21BUHJzSjNBSEtIdDFtcUs1QlBnM1FKQ1haYk5pdVNjYUllWGc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUtRSytEelJZdlFzU3Y2WDFXTXpHVE5XMElZWDRKSHdSVUxzdnNrUWFrdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVnRMbTlyQ0tBZzh3Q1h0a3ZWNWFpeUZmemxwV1V5TGU1OVZVcEFMTWp4WT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQ5cGtIbnRKRjRIQW1jeG0zMHlVWGJoNjgzcTlxNGxkd01mcUpmOXU4aGEyOC8wWWJoVzJBOVhraFdaeUlEL1ZBajlqV052cWVlbFVxbW5yMGhNdURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NDYsImFkdlNlY3JldEtleSI6Ijlvdi9SbytpWktweE1lNmZZaFBKU256Z2J5V29wUHdLVmtLU3BLaFpjS2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkJBVjlKR1kxIiwibWUiOnsiaWQiOiI5NDcwNTk0MDg4Nzo1OUBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE0NTIzODc4MTg1Mzc3Mjo1OUBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lQZXRLc0JFSURtMGIwR0dBY2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjBPcUgzYjJ2b1BLWS9rd2FmTU5TQWRwZHFmcWdPWkVZUzY3ckVkbTVJUjA9IiwiYWNjb3VudFNpZ25hdHVyZSI6InJuU0hTdkJDNUZIdlFpbEhCcDRDeURPbVl0R2o3S2tiSzFjMHgzNjFzZlc1bTQ5S2o5Nm1wSVkrbEJxZzJOWXpaZmdiVDhGYi9XeHhISU0rbXhxSENnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJQcEk0bEdPNHVQQVdHdlZuYzJCeFBRcXYzN2JLWDcvRUpPaUtjb0h1R0hYUTl4cXdFdldEdmkxbWlIMTYyTk9TNFRCeDZXUlJPRWdXNktLTU9BYXpDUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzA1OTQwODg3OjU5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmREcWg5MjlyNkR5bVA1TUduekRVZ0hhWGFuNm9EbVJHRXV1NnhIWnVTRWQifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBVUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczOTg3OTE4MSwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZyYSJ9' : process.env.SESSION_ID,
ONLY_GROUP: process.env.ONLY_GROUP === undefined ? 'true' : process.env.ONLY_GROUP,
ONLY_ME: process.env.ONLY_ME === undefined ? 'false' : process.env.ONLY_ME,
ADDRESSES: process.env.ADDRESSES === undefined ? '120363345007221870@g.us' : process.env.ADDRESSES,
ALIVE: process.env.ALIVE === undefined ? `Hello im alive now !!` : process.env.ALIVE,
OWNER: process.env.OWNER === undefined ? `94742614390` : process.env.OWNER,
PREFIX: process.env.PREFIX === undefined ? '@' : process.env.PREFIX,
FOOTER: process.env.FOOTER=== undefined ? '‌': process.env.FOOTER,
LOGO: process.env.LOGO === undefined ? `https://telegra.ph/file/f25fa1b13e9962f2c2271.jpg` : process.env.LOGO
};
