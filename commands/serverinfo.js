const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    let aEmbed = new Discord.MessageEmbed()
        .setColor(colors.cyan)
        .setTitle("Server Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
        .addField("**Guild Name**", `${message.guild.name}`, true)
        .addField("**Guild Owner**", `${message.guild.owner}`, true)
        .addField("**Member Count**", `${message.guild.memberCount}`)
        .addField("**Role Count**", `${message.guild.roles.size}`, true)
        .setFooter("Zach_FR's", bot.user.displayAvatarURL);
    message.channel.send(aEmbed);
}

module.exports.help = {
    name: "serverinfo"
}