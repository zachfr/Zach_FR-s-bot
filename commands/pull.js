const Discord = require("discord.js");
const simpleGit = require('simple-git');
const git = simpleGit();

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "277242592801062913") return;
    git.pull();
}

module.exports.help = {
    name: "pull",
    description: "Update bot to last file on github"
}
module.exports.aliases = []