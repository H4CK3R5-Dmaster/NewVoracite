const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const loadEvents = require("./Loaders/loadEvents")
const config = require('./config.json')

bot.commands = new Discord.Collection()

loadCommands(bot)
loadEvents(bot)

bot.login(config.token)