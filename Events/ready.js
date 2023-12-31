const Discord = require('discord.js')
const loadSlashCommands = require('../Loaders/loadSlashCommands')

module.exports = async bot => {

    await loadSlashCommands(bot)
    console.log(" ")
    console.log("==========================")
    console.log(" ")
    console.log(`Logged at ${bot.user.tag}`)
    console.log(" ")
    console.log("==========================")
    console.log(" ")
}