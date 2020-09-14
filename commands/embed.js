const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const filter = m => message.author.id === m.author.id;
    message.channel.send("Enter a title.")
    message.channel.awaitMessages(filter, {time: 10000, max: 1, errors: ['time']})
        .then(messages => {
            const title = messages.first().content.split(" ").slice(0).join(" ");
            console.log(`Title => ${title}`);

            message.channel.send("Enter a description.")
            message.channel.awaitMessages(filter, {time: 10000, max: 1, errors: ['time']})
            .then(messages => {
                const description = messages.first().content.split(" ").slice(0).join(" ");
                console.log(`Description => ${description}`);

                message.channel.send("Enter a channel id.")
                message.channel.awaitMessages(filter, {time: 10000, max: 1, errors: ['time']})
                .then(messages => {
                    const channelid = messages.first().content.split(" ").slice(0).join(" ");
                    const channelname = bot.channels.cache.get(channelid);
                    console.log(`Channel ID => ${channelid}`);
                    console.log(channelname.name);

                    let ab = new Discord.MessageEmbed()
                        ab.setTitle(title)
                        ab.setDescription(description)
                        ab.setTimestamp();

                    channelname.send(ab);
                })
                .catch(errors => {
                    console.log(errors);
                });
            })
            .catch(errors => {
                console.log(errors);
            });
        })
        .catch(errors => {
            console.log(errors);
        });
    
}
module.exports.help = {
    name: "embed",
    description: "Create a good embed message",
    usage: ""
}
//module.exports.aliases = []