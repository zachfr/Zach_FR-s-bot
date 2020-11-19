const Discord = require("discord.js");
const simpleGit = require('simple-git');
const git = simpleGit();

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "277242592801062913") return;
    console.log(git.status);
}

module.exports.help = {
    name: "gitstatus"
}
module.exports.aliases = []