const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const joinmessage = new Discord.MessageEmbed()
        .setTitle('Join Message plugin')
        .setURL('https://songoda.com/marketplace/product/join-message-joinmessage.378')
        .setColor(0xff9800)
        .setDescription('Custom join/leave message')
        .setFooter("Zach_FR's plugin");
    message.channel.send(joinmessage);
}

module.exports.help = {
    name: "joinmessage"
}