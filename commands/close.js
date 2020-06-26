const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let supportrole = message.member.roles.cache.has('725913350755844106');
    if (supportrole) {
        message.channel.send('Please enter `confirm` to close ticket! You have 10 seconds').then(() => {
            const filter = m => message.author.id === m.author.id;
        
            message.channel.awaitMessages(filter, { time: 10000, max: 1, errors: ['time'] })
                .then(messages => {
                    if (messages.first().content === 'confirm') {
                        message.channel.delete();
                    } else {
                        message.channel.send("You don't enter `confirm` to close ticket! Please retype command `!close`")
                    }
                })
                .catch(() => {
                    message.channel.send("You don't enter `confirm` to close ticket! Please retype command `!close`");
                });
        });
    } else {
        message.channel.send("You don't have permission to do that");
    }
}

module.exports.help = {
    name: "close"
}