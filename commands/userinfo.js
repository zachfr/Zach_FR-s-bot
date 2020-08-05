const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    if (args[0] == null) {
        f = message.author;
    } else {
        f = message.mentions.users.first();
    }
    let zEmbed = new Discord.MessageEmbed()
        .setTitle(`${f.username} Info`)
        .addField("**Username**", `${f.username}`, true)
        .addField("**Discriminator**", `${f.discriminator}`, true)
        .addField("**ID**", `${f.id}`)
        .addField("**Status**", `${f.presence.status}`)
        .addField("**Created At**", f.createdAt)
        .setColor(colors.john_deere_green)
        .setFooter("Zach_FR's plugin");
    message.channel.send(zEmbed);
    setTimeout(() => {
        message.delete();
    }, 1000)
}

module.exports.help = {
    name: "userinfo",
    description: "Show information on user",
    usage: "<user>"
}