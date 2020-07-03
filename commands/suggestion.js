const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    const suggest = message.content.split(" ").slice(1).join(" ");
    if (!args.length) {
        message.delete();
        message.channel.send(`You didn't provide any suggestions, ${message.author}!`).then(sent => {
            setTimeout(() => {
                sent.delete();
            }, 2000)
        });
        return;
    }
    const suggestion = new Discord.MessageEmbed()
        .setTitle(`New suggestion`)
        .addField(`Suggestion from:`, `<@${message.author.id}>`)
        .addField(`Suggestion:`, suggest)
        .setFooter("Zach_FR's plugin");
    const channel_suggestion = bot.channels.cache.get('728372732059844619');
    channel_suggestion.send(suggestion).then(sentMessage => {
        sentMessage.react('\✅');
        sentMessage.react('\❌');
    });
    setTimeout(() => {
        message.delete();
    }, 1000)
}

module.exports.help = {
    name: "suggest"
}