var package = require('../package.json');
const Discord = require('discord.js');
const client = new Discord.Client();

var VERSION = package.version;
var AUTHOR = package.author;
var DESCRIPTION = package.description;
var UPTIME = client.uptime;

module.exports.run = async (bot, message, args) => {
    const info = new Discord.MessageEmbed()
        .setTitle('Bot information')
        .setColor(0xff9800)
        .setDescription(DESCRIPTION)
        .addField('Author', AUTHOR, true)
        .addField('Version', VERSION, true)
        .addField('Uptime', UPTIME, true)
        .setFooter("Zach_FR's plugin");
    message.channel.send(info);
}

module.exports.help = {
    name: "info"
}