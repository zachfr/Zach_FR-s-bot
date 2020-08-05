const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (args[0] === 'server') {
        const helpserver = new Discord.MessageEmbed()
            .setTitle('Help center (Server)')
            .addField("❯ !stats <name>", 'Show information on server', true)
            .addField("❯ !kill <name>", 'Kill server', true)
            .addField("❯ !start <name>", 'Start server', true)
            .addField("❯ !restart <name>", 'Restart server', true)
            .addField("❯ !stop <name>", 'Stop server', true)
            .addField("❯ !exe <name> <command>", 'Send a command on server', true)
            .addField("❯ Name of server", '1.8, 1.12, 1.15, 1.16, bot, factorio', true)
            .setFooter("Zach_FR's plugin");
        message.channel.send(helpserver);
    } else if (args[0] === 'ticket') {
        let help = new Discord.MessageEmbed()
            .setTitle('Help center (Ticket)')
            .addField("❯ !new <reason>", 'Create a ticket', true)
            .addField("❯ !close", 'Close ticket', true)
            .addField("❯ !add <name>", 'Add someone to ticket', true)
            .addField("❯ !remove <name>", 'Remove someone to ticket', true)
            .addField("❯ !archive", 'Archive ticket', true)
            .setFooter("Zach_FR's plugin");
        message.channel.send(help);
    } else {
        let help = new Discord.MessageEmbed()
            .setTitle('Help center')
            .addField("❯ !help", 'Show help center', true)
            .addField("❯ !help server", 'Show help center server', true)
            .addField("❯ !help ticket", 'Show help center ticket', true)
            .addField("❯ !songoda", 'Search plugin on Songoda', true)
            .addField("❯ !status", 'Show currently status of bot', true)
            .addField("❯ !join message", 'Show Join message plugin', true)
            .addField("❯ !info", 'Show information on bot', true)
            .addField("❯ !prefix", 'Show currently prefix of bot', true)
            .addField("❯ !download <type> <version>", 'Download version of minecraft server', true)
            .addField("❯ !purge <number>", 'Delete message', true)
            .addField("❯ !suggest <suggestion>", 'Make your suggestions', true)
            .addField("❯ !userinfo <name>", 'Show information on user', true)
            .addField("❯ !serverinfo", 'Show information on server', true)
            .setFooter("Zach_FR's plugin");
        message.channel.send(help);
    }
    setTimeout(() => {
        message.delete();
    }, 1000)
}

module.exports.help = {
    name: "help3",
    description: 'Show help center'
}
module.exports.aliases = []