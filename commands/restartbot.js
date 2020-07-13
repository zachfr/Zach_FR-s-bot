const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (message.author.id === '277242592801062913') {
        process.exit();
    }
}

module.exports.help = {
    name: "restartbot"
}
module.exports.aliases = []