const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    setTimeout(() => {
        message.delete();
    }, 5000)
    const reason = message.content.split(" ").slice(1).join(" ");
    let SupportCategory = message.guild.channels.cache.find(category => category.name === "Tickets");
    
    if (message.guild.me.hasPermission('MANAGE_CHANNELS') && !SupportCategory) {
        SupportCategory = await message.guild.channels.create('Tickets', {
            type: 'category',
        });
    }

    if (!message.guild.me.hasPermission('MANAGE_CHANNELS') && !SupportCategory) {
        message.channel.send('Errors!');
    }

    if (!message.guild.roles.cache.find(role => role.name === "Staff")) {
        await (message.guild.roles.create({
            name: "Staff",
            color: "BLUE",
        }));
    }

    let supportrole = message.guild.roles.cache.find(role => role.name === "Staff")

    if (!supportrole) {
        return message.channel.send("You are not in the staff.")
    }

    if (!reason) {
        return message.channel.send("Please enter a reason of ticket \n \`!new <reason>`")
    }

    const channelName = `ticket-${message.author.username}`
    if (message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.username.toLowerCase()}`)) {
        return message.channel.send("Sorry, you already have a ticket open.")
    }

    message.guild.channels.create(channelName, { parent: SupportCategory.id, topic: `Ticket Owner: ${message.author.id}`}).then(c => {
        const sr = message.guild.roles.cache.get("725913350755844106");
        const everyone = message.guild.roles.cache.get("724769262736244827");
        c.updateOverwrite(sr, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
        });
        c.updateOverwrite(everyone, {
            SEND_MESSAGES: false,
            VIEW_CHANNEL: false,
        });
        c.updateOverwrite(message.author.id, {
            SEND_MESSAGES: true,
            VIEW_CHANNEL: true,
        });
        let CreatedTicketEmbed = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("New Support Ticket")
            .setDescription(`<@${message.author.id}> Your support ticket channel is <#${c.id}>`)
            .setTimestamp()
            .setFooter("Zach_FR's plugin");
        message.channel.send(CreatedTicketEmbed)
        let aembed = new Discord.MessageEmbed()
            .setColor("RED")
            .addField("New Support Ticket", `<@${message.author.id}> Thanks for submitting a support ticket. Wait patiently and one of support will coming.`)
            .addField('Issue:', reason)
            .setTimestamp()
            .setFooter("Zach_FR's plugin");
        c.send(aembed)
    }).catch(console.error);
    message.channel.bulkDelete(1);
}

module.exports.help = {
    name: "new"
}
