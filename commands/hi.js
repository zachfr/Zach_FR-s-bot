const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("Hey!");
}

module.exports.help = {
    name: "hi",
    description: 'Hey'
}