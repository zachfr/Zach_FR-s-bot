const node = require('nodeactyl');
const Discord = require('discord.js');
const client = new Discord.Client();
const application = node.Client;

module.exports.run = async (bot, message, args) => {
    var STAFF = message.member.roles.cache.has('725913350755844106');
    const cmd = message.content.split(" ").slice(2).join(" ");
    if (!STAFF) return message.channel.send(`You don't have the permision to do that, ${message.author}!`);
    if (args[0] === '1.8') {
        application.sendCommand('2ccad1d1', cmd).then(response => {
            message.channel.send(`You have successfully send a command to server ${args[0]}, ${cmd}, ${message.author}!`);
        });
    } else if (args[0] === '1.12') {
        application.sendCommand('70c69bbf', cmd).then(response => {
            message.channel.send(`You have successfully send a command to server ${args[0]}, ${cmd}, ${message.author}!`);
        });
    } else if (args[0] === '1.15') {
        application.sendCommand('e5fd5083', cmd).then(response => {
            message.channel.send(`You have successfully send a command to server ${args[0]}, ${cmd}, ${message.author}!`);
        });
    } else if (args[0] === '1.16') {
        application.sendCommand('38491b8e', cmd).then(response => {
            message.channel.send(`You have successfully send a command to server ${args[0]}, ${cmd}, ${message.author}!`);
        });
    } else if (args[0] === 'bot') {
        application.sendCommand('0c0d5997', cmd).then(response => {
            message.channel.send(`You have successfully send a command to server ${args[0]}, ${cmd}, ${message.author}!`);
        });
    } else if (args[0] === 'factorio') {
        application.sendCommand('165e1270', cmd).then(response => {
            message.channel.send(`You have successfully send a command to server ${args[0]}, ${cmd}, ${message.author}!`);
        });
    } else message.channel.send(`You didn't provide server, ${message.author}!`);
    setTimeout(() => {
        message.delete();
    }, 1000)
    
}

module.exports.help = {
    name: "exe"
}