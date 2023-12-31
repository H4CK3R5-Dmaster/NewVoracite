const Discord = require("discord.js")

module.exports = {
    name:"ping",
    description: "connaître la latence du bot",
    permission: "Aucune",
    dm: true,
    async run(bot, message){
        await message.reply(`Ping : \`${bot.ws.ping}\``)
    }
}