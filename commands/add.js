const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let supportrole = message.member.roles.cache.has('725913350755844106');
    if (supportrole) {
        if (message.channel.parent.name === 'Tickets') {
            if (!args.length) {
                message.delete();
                message.channel.send(`You didn't provide any person to add to channel, ${message.author}!`).then(sent => {
                    setTimeout(() => {
                        sent.delete();
                    }, 3000)
                });
                return;
            }
            const person = message.mentions.users.first();
            message.channel.updateOverwrite(person, {
                SEND_MESSAGES: true,
                VIEW_CHANNEL: true,
            });
            message.channel.send(`You have successfully add ${person} from ticket, ${message.author}!`);
            return setTimeout(() => {
                message.delete();
            }, 1000)
        } else {
            message.channel.send("You need do this command in ticket channel");
        }
    } else {
        message.channel.send("You don't have permission to do that");
    }
}

module.exports.help = {
    name: "add"
}