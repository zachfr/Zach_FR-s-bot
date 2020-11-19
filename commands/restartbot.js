const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.channel.send("I restart");
    setTimeout(() => {
        if (message.author.id === '277242592801062913') {
            process.exit();
        }
    }, 1000)
}

module.exports.help = {
    name: "restartbot"
}
module.exports.aliases = ["restart"]