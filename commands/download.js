const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    fetch("https://serverjars.com/api/fetchJar/"+args.join("/").toLowerCase()).then(te => {
        let embed = new Discord.MessageEmbed()
            .setTitle(`Download ${args[0]} ${args[1]}`)
            .addField('Here the link:', te.url)
            .setFooter("Zach_FR's plugin");
        message.channel.send(embed);
    })
    setTimeout(() => {
        message.delete();
    }, 1000)
}

module.exports.help = {
    name: "download",
    description: "Download a Minecraft version",
    usage: "<Version> <VersionNumber>"
}
module.exports.aliases = ["dl"]