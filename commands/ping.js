const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("Ping!");
    setTimeout(() => {
        message.delete();
    }, 1000)
}

module.exports.help = {
    name: "ping"
}
module.exports.aliases = ["p"]