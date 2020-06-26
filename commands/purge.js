const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const amount = parseInt(args[0]) + 1;
    if (isNaN(amount)) {
        return message.reply('That doesn\'t seem to be a valid number.');
    } else if (amount <= 1 || amount > 100) {
        return message.reply('You need to input a number between 1 and 99.');
    }
    message.channel.bulkDelete(amount, true).catch(err => {
        console.error(err);
        message.channel.send('There was an error trying to purge messages in this channel!');
    });
}

module.exports.help = {
    name: "purge"
}