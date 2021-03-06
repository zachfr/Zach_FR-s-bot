const Discord = require("discord.js");
const node = require('nodeactyl');
const application = node.Client;
const fs = require("fs");
const bot = new Discord.Client();
const config = require("./config.json");
const colors = require("./colors.json");
const auth = require("./auth.json");
const { Console } = require("console");
//const io = require("@pm2/io");
console.log("Zach loading");
console.log(config);

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

bot.login(auth.token);

application.login(auth.HOST, auth.API, (logged_in, msg) => {
    console.log(logged_in);
});

/*const botname = io.metric({
    name: 'Discord bot name',
});*/

fs.readdir("./commands/", (err, files) => {
    if (err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js");
    if (jsfile.length <= 0) {
        console.log("No commands found!");
        return;
    }

    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        console.log(`${f} Ok!`);
        bot.commands.set(props.help.name, props);
        if (!props.aliases) return
        props.aliases.forEach(alias => {
            bot.aliases.set(alias, props.help.name);
        });
    })
})

bot.on("ready", async () => {
    //botname.set("Zach_FR Bot");
    console.log("Zach it's start");
    bot.user.setActivity("with Zach");
});
bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === 'dm') return;
    let prefix = config.prefix;

    if(!message.content.startsWith(prefix)) return;

    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.splice(1);

    if (bot.aliases.has(command.slice(prefix.length).toLowerCase())) bot.commands.get(bot.aliases.get(command.slice(prefix.length).toLowerCase())).run(bot, message, args, prefix)
    if (bot.commands.has(command.slice(prefix.length).toLowerCase())) bot.commands.get(command.slice(prefix.length).toLowerCase()).run(bot, message, args, prefix)

});

bot.on('voiceStateUpdate', (oldMember, newMember) => {
    //let newUserChannel = newMember.voiceChannel
    //let oldUserChannel = oldMember.voiceChannel

    //console.log(newMember);
    /*if(oldUserChannel === undefined && newUserChannel !== undefined) {
  
       // User Joins a voice channel
       console.log("Someone join channel");
  
    } else if(newUserChannel === undefined){
  
      // User leaves a voice channel
      console.log("Someone leave channel");
  
    }*/
});