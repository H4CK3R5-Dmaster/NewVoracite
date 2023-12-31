const Discord = require('discord.js')
const config = require("../config.json")

module.exports = async (bot, message) => {
    let prefix = config.prefix

    let messageArray = message.content.split(" ")
    let commandName = messageArray[0].slice(prefix.length)
    let args = messageArray.slice(1)
    if (!message.content.startsWith(prefix)) return;
    let command = require(`../Commandes/${commandName}`)
    if(!command) return message.reply("Command not found !")

    command.run(bot, message, args)
}