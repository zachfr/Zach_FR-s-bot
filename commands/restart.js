const node = require('nodeactyl');
const Discord = require('discord.js');
const client = new Discord.Client();
const application = node.Client;

module.exports.run = async (bot, message, args) => {
    var STAFF = message.member.roles.cache.has('725913350755844106');
    if (!STAFF) return message.channel.send(`You don't have the permision to do that, ${message.author}!`);
    if (args[0] === '1.8') {
        application.restartServer('2ccad1d1').then(response => {
            message.channel.send(`You have successfully restart server ${args[0]}, ${message.author}!`);
        });
    } else if (args[0] === '1.12') {
        application.restartServer('70c69bbf').then(response => {
            message.channel.send(`You have successfully restart server ${args[0]}, ${message.author}!`);
        });
    } else if (args[0] === '1.15') {
        application.restartServer('e5fd5083').then(response => {
            message.channel.send(`You have successfully restart server ${args[0]}, ${message.author}!`);
        });
    } else if (args[0] === '1.16') {
        application.restartServer('38491b8e').then(response => {
            message.channel.send(`You have successfully restart server ${args[0]}, ${message.author}!`);
        });
    } else if (args[0] === 'bot') {
        application.restartServer('0c0d5997').then(response => {
            message.channel.send(`You have successfully restart server ${args[0]}, ${message.author}!`);
        });
    } else if (args[0] === 'factorio') {
        application.restartServer('165e1270').then(response => {
            message.channel.send(`You have successfully restart server ${args[0]}, ${message.author}!`);
        });
    } else message.channel.send(`You didn't provide server, ${message.author}!`);
    setTimeout(() => {
        message.delete();
    }, 1000)
    
}

module.exports.help = {
    name: "restartserver"
}