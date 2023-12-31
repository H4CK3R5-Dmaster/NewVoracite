const Discord = require('discord.js')
const bot = new Discord.Client({intents: 3276799})
const config = require('./config.json')

bot.on("ready", async () => {
    console.log(`Logged at ${bot.user.tag} !`)
})


bot.login(config.token)