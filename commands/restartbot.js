const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    setTimeout(() => {
        if (message.author.id === '277242592801062913') {
            message.channel.send("I restart");
            process.exit();
        }
    }, 1000)
}

module.exports.help = {
    name: "restartbot"
}
module.exports.aliases = ["restart"]