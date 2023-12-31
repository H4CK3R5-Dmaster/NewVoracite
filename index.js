const Discord = require('discord.js')
const intents = new Discord.IntentsBitField(3276799)
const bot = new Discord.Client({intents})
const loadCommands = require("./Loaders/loadCommands")
const config = require('./config.json')

bot.commands = new Discord.Collection()

loadCommands(bot)

bot.on("messageCreate", async message => {
    if(message.content == "-ping") return bot.commands.get("ping").run(bot, message)
})

bot.on("ready", async () => {
    console.log(`Logged at ${bot.user.tag} !`)
})


bot.login(config.token)