var package = require('../package.json');
const colors = require('../colors.json');
const Discord = require('discord.js');
const client = new Discord.Client();

var VERSION = package.version;
var AUTHOR = package.author;
var DESCRIPTION = package.description;
var UPTIME = client.uptime;

module.exports.run = async (bot, message, args) => {
    const info = new Discord.MessageEmbed()
        .setTitle('Bot information')
        .setDescription(DESCRIPTION)
        .addField('Author', AUTHOR, true)
        .addField('Version', VERSION, true)
        .setColor(colors.john_deere_green)
        .setFooter("Zach_FR's plugin");
    message.channel.send(info);
    setTimeout(() => {
        message.delete();
    }, 1000)
}

module.exports.help = {
    name: "info",
    description: "Show information on bot"
}