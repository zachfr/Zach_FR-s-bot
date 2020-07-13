const Discord = require("discord.js");
const colors = require("../colors.json");

module.exports.run = async (bot, message, args) => {
    let a = new Discord.MessageEmbed()
        .setColor(colors.john_deere_green)
        .setTitle("John Deere color");
    message.channel.send(a);
    setTimeout(() => {
        message.delete();
    }, 1000)
}

module.exports.help = {
    name: "t"
}