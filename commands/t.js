const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    let a = new Discord.MessageEmbed()
        .setColor(colors.john_deere_green)
        .setTitle("John Deere");
    message.channel.send(a);
}

module.exports.help = {
    name: "t"
}