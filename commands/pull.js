const Discord = require("discord.js");
const simpleGit = require('simple-git');
const git = simpleGit();

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "277242592801062913") return;
    try {
        git.pull();
        message.channel.send("I succesfull update my file to last commit. You problably need restart me to apply change.");
    } catch (error) {
        message.channel.send("Errors check in log.");
        console.log(error);
    }
}

module.exports.help = {
    name: "pull",
    description: "Update bot to last file on github"
}
module.exports.aliases = []