const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    setTimeout(() => {
        if (message.author.id === '277242592801062913') {
            process.exit();
        }
    }, 1000)
}

module.exports.help = {
    name: "restartbot"
}
module.exports.aliases = []