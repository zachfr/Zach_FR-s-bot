const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    let aEmbed = new Discord.MessageEmbed()
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .addField("**Guild Name**", `${message.guild.name}`, true)
        .addField("**Guild Owner**", `${message.guild.owner}`, true)
        .addField("**Member Count**", `${message.guild.memberCount}`)
        .addField("**Channel Count**", `${message.guild.channels.cache.size}`, true)
        .addField("**Role Count**", `${message.guild.roles.cache.size}`, true)
        .setColor(colors.john_deere_green)
        .setFooter("Zach_FR's plugin");
    message.channel.send(aEmbed);
    setTimeout(() => {
        message.delete();
    }, 1000)
}

module.exports.help = {
    name: "serverinfo"
}