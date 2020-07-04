const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("Hey!");
    setTimeout(() => {
        message.delete();
    }, 1000)
}

module.exports.help = {
    name: "hi",
    description: 'Hey'
}