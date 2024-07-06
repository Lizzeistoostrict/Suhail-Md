const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_27_07_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDM4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg3LFxuICAgICAgICA1NixcbiAgICAgICAgMTk2LFxuICAgICAgICAzNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA5MyxcbiAgICAgICAgMTUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICA5NSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNDAsXG4gICAgICAgIDMyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjE5LFxuICAgICAgICA4OSxcbiAgICAgICAgOTgsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDMyLFxuICAgICAgICA5MixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNixcbiAgICAgICAgOTYsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjU0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTAxLFxuICAgICAgICA5OSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxMSxcbiAgICAgICAgOTUsXG4gICAgICAgIDczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNDksXG4gICAgICAgIDUwLFxuICAgICAgICAzNixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDQxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMSxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDgsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTAyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ2LFxuICAgICAgICA1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0LFxuICAgICAgICA0NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTksXG4gICAgICAgIDEzMixcbiAgICAgICAgMTE0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgsXG4gICAgICAgIDE1LFxuICAgICAgICA0NixcbiAgICAgICAgNDQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICA5OSxcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDYsXG4gICAgICAgIDQsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDY0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgNjksXG4gICAgICAgIDE0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTkxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTg5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAxMjMsXG4gICAgICAgIDMyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTgwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImZQOHdaYTliMWdISXY0azluMnlTVG8rZ0NEb251TnI3VXd3MEV5MkNhbXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxWUVhMZ25rVFdTZ281bFNQc2NZbEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWJlOWI1ZDAtZmJmZi00NTk5LWEwMGQtNWVhMTg3MmU3YjZhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDMsXG4gICAgICAxNzMsXG4gICAgICAxMjUsXG4gICAgICAxNDksXG4gICAgICAxNTksXG4gICAgICAxODQsXG4gICAgICAxMTUsXG4gICAgICA4NSxcbiAgICAgIDY4LFxuICAgICAgMTAzLFxuICAgICAgMTQsXG4gICAgICAxMDksXG4gICAgICAxMjgsXG4gICAgICAxMDIsXG4gICAgICAyMzEsXG4gICAgICA1OCxcbiAgICAgIDE3NSxcbiAgICAgIDIzMCxcbiAgICAgIDY3LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjIyLFxuICAgICAgMTQ0LFxuICAgICAgMjIxLFxuICAgICAgMTYsXG4gICAgICA4LFxuICAgICAgNzYsXG4gICAgICA1OSxcbiAgICAgIDE2MCxcbiAgICAgIDg0LFxuICAgICAgMTg3LFxuICAgICAgOCxcbiAgICAgIDE0OSxcbiAgICAgIDE2OSxcbiAgICAgIDE4OCxcbiAgICAgIDEzNCxcbiAgICAgIDE5NixcbiAgICAgIDIzOSxcbiAgICAgIDI0OCxcbiAgICAgIDI0NSxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkRWQlE3M1RWXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDQ5NzQ4MDY5OjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiQW5vbnltb3VzIEdpcmxcIixcbiAgICBcImxpZFwiOiBcIjEyNjA2MTc2OTY4MzA1NToyOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMS3FvTGtHRVB5YnBMUUdHQVlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjhoL2tJVDZjbEc2cGtrMjFkVlJJTGNxNGNFNGZDNld3TEtFU2R5dW4xME09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiUmMxYlQ0VzhweE1VVTBLb2YvQ3c2VE9oVmdKSVZXZWsvbUZ3NEZXUFpMdTlZOGcwTmx0bFBDREFIUnRvdU1jcEZUR21PcjdqYkpWZDJiQ3VweUZQQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNmNSR2xIOUZWOFlHcnp1dUVYeHpZRm1GbUlmTnVzaHFXNDk4cC9hMzN4VmZZNnJkblpmRW9md0IzRkVVUkh6d2d3TXJCOGZOcXQ2UXJ3UEp4bWp0Qnc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA0OTc0ODA2OToyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDY3XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAyNTgwNDhcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
