const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb://uzihukfyedijiohhql4c:BBKGMwCF7ZUQ8DLR9CGh@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bv7rlyzlktwmxs3?replicaSet=rs0"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/SamPandey001/Secktor-Md'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '919628516236'
global.devs = '919628516236';
global.website = 'https://github.com/' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname: process.env.BOT_NAME || 'ᴅᴀʀᴋ ᴀɴɢᴇʟ',
  ownername:process.env.OWNER_NAME || 'ᴄʏʙᴇʀ ʏᴀᴋᴜᴢᴀ ᴛᴇᴀᴍ',
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUFzMDg3VExLb2ZCVUcrdmNhOG5JbFpsR2luTUZCTjN0QVhtWVFBUEExcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0xFZTRjTVBFVWlLem1uNVFKcGU0NWJTZEFrbXRzdUdZbjlpN2NGdmgxTT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyRlgvaVc3Y3JLV3JIOFZlUFc4ckREb2hsb3VYblNYTDk2V3hza1MzN1hvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJibjVXZmtnQmNNMHo2TS95dGRvcUpXYjgzTTlGZkowcTVCQmxkaFBhNnlBPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllFVWxJTFVRSyt3aHc5SWJxWWluMnFQR1JWcVBpS2EwdWZ0RGxaWC9ObkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlMxbnlONUtQeE1LcjBWTkFDNjN2dS9mUzF3Mk1SRHFyS2pod29qRk9UZzA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKN1ZPSDBRRHhGSUxYcHJlaGZiWCtsbnk5M2FaS0ZXZHJ0eTlxMStMbnRPZXlPeEx4QXUvYW1IMzBmQXN6UXI1WkxSRmhOVndzSWZ2dElqWjNVTkdBUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjYsImFkdlNlY3JldEtleSI6IitFWjkvdE9SblFjODUvOHh3WHNyTTQyOFZpWWpVM3JWTUVBVHZLeGpEb2s9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0k2SS83OEhFTVBBN2FJR0dBVT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicDNkMTQ0em5GVHlVZXIrRzhzN1MvbnJ3UlBQRHdmTWNjd3JvZDVVb3gwST0iLCJhY2NvdW50U2lnbmF0dXJlIjoicS94SDgwQldXV1BUYkFpRHNGWkYvNEs4ZjdmdGZlYXN4Y3Y0bVZDMUIxZXJBY2FOeWhOczhoRnVGY256WjduN1R6UkovOXVtbWkwZ2tNU1VsWkx6RHc9PSIsImRldmljZVNpZ25hdHVyZSI6ImIyc3ZadHZlVTIvMVlleHY5RnV5MU0raXRHTlBtM1JTVUpnMmhCTmxQaFRmM2taV0F0bDI5YVlxNmRUcFJVMmtuUGR3Q2NZNUdPQU1YcWt5UXNLaUJnPT0ifSwibWUiOnsiaWQiOiI5NDc3MDExMTMxMTo3OUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc3MDExMTMxMTo3OUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhZDNkZU9NNXhVOGxIcS9odkxPMHY1NjhFVHp3OEh6SEhNSzZIZVZLTWRDIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNjgzNzEwMDIyfQ==',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'OPENAI_KEY',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
