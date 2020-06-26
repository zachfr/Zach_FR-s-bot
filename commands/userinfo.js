const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    let zEmbed = new Discord.MessageEmbed()
        .setColor(colors.cyan)
        .setTitle("User Info")
        .setThumbnail(message.guild.iconURL)
        .setAuthor(`${message.author.username} Info`, message.author.displayAvatarURL)
        .addField("**Username**", `${message.author.username}`, true)
        .addField("**Discriminator**", `${message.author.discriminator}`, true)
        .addField("**ID**", `${message.author.id}`)
        .addField("**Status**", `${message.author.presence.status}`, true)
        .addField("**Created At**", bot.user.createdAt)
        .setFooter("Zach_FR's", bot.user.displayAvatarURL);
    message.channel.send(zEmbed);
}

module.exports.help = {
    name: "userinfo"
}