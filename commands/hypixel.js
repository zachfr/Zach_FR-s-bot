const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {
    fetch("https://api.hypixel.net/player?key=a542ea22-9694-4fe5-8b28-acda8b8fc547&name="+args.join("").toLowerCase())
    .then(res => res.json())
    .then(json => {
        console.log(json.player);
        //fetch("https://api.hypixel.net/skyblock/profiles?key=a542ea22-9694-4fe5-8b28-acda8b8fc547&uuid=b21c60ef52ff469093c64b5fdac0bf71")
    })
}

module.exports.help = {
    name: "hypixel"
}
module.exports.aliases = []