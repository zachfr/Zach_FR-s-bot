const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let supportrole = message.member.roles.cache.has('725913350755844106');
    if (!supportrole) return message.channel.send("You don't have permission to do that");
    if (message.channel.parent.name === 'Tickets') {
        const sr = message.guild.roles.cache.get("725913350755844106");
        const everyone = message.guild.roles.cache.get("724769262736244827");
        let ArchiveCategory = message.guild.channels.cache.find(category => category.name === "Archives");

        const member = message.channel.permissionOverwrites.filter(over => over.type === 'member').first().id;
        const membername = message.guild.members.cache.get(member).user;

        console.log(membername)
        message.channel.setParent(ArchiveCategory.id);
        setTimeout(() => {
            message.channel.updateOverwrite(membername, {
                SEND_MESSAGES: false,
                VIEW_CHANNEL: true,
            });
        }, 500)
    } else {
        message.channel.send("You need do this command in ticket channel");
    }
    return setTimeout(() => {
        message.delete();
    }, 1000)
}

module.exports.help = {
    name: "archive"
}
module.exports.aliases = ["arch"]