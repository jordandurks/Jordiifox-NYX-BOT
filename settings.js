//jordiifox
//YouTube: @jordiifox
//Telegram: https://wa.me/message/LHJ4Z5X7ZK7CH1



const fs = require('fs')
const chalk = require('chalk')

//owmner v card
global.ytname = "YT: jordiifox" //ur yt chanel name
global.socialm = "IG :jordiifox" //ur github or insta name
global.location = "south Africa" //ur location

//new
global.botname = 'Qinisobot' //ur bot name
global.ownernumber = '27694698095' //ur owner number
global.ownername = 'jordiiiQiniso' //ur owner name
global.websitex = "https://whatsapp.com/channel/0029VapGHm06hENhBFyvGD2t" //"https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F"
global.wagc ="https://wa.me/message/LHJ4Z5X7ZK7CH1" //"https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F"
global.idch = '120363322892680943@newsletter'
global.themeemoji = '🪀'
global.wm = "NYX👸"
global.botscript = 'https://whatsapp.com/channel/0029VapGHm06hENhBFyvGD2t' //'https://whatsapp.com/channel/0029VaoNzzlJJhzQTJBL5n0F' //script link
global.packname = "jordiix👸"
global.author = "jordiibotQin"
global.creator = "27694698095@s.whatsapp.net"
global.xprefix = '.'
global.antidelete = true
global.premium = ["27694698095"] // Premium User
global.hituet = 0
global.chatModeUsers = {}; // Store chat mode status per user

//bot sett
global.typemenu = 'v8' // menu type 'v1' => 'v8'
global.typereply = 'v4' // reply type 'v1' => 'v3'
global.autoblocknumber = '' //set autoblock country code
global.antiforeignnumber = '' //set anti foreign number country code
global.welcome = false //welcome/left in groups
global.anticall = false //bot blocks user when called
global.autoswview = true //auto status/story view
global.adminevent = false //show promote/demote message
global.groupevent = false //show update messages in group chat
//msg
global.mess = {
	limit: 'Your limit is up <\>',
	nsfw: 'Nsfw is disabled in this group, Please tell the admin to enable',
    done: 'Done ✓',
    error: 'Error !',
    success: 'Succes •'
}
//thumbnail
global.thumb = fs.readFileSync('./PrexzyMedia/theme/nyxpic.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
