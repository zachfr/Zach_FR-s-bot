const Discord = require("discord.js");
const simpleGit = require('simple-git');
const git = simpleGit();

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "277242592801062913") return;
    git.pull();
    message.channel.send("I succesfull update my file to last commit.");
    setTimeout(() => {
        if(args === "yes"){
            message.channel.send("I restart");
            process.exit();
        }
    }, 1000)
}

module.exports.help = {
    name: "pull",
    description: "Update bot to last file on github"
}
module.exports.aliases = []