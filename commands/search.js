const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {
  if(args.length == 0) return message.channel.send("You didn't provide any plugin to search \n \`!author <AuthorName>`");
  fetch("https://api.spiget.org/v2/search/resources/"+args.join("%20")+"?sort=-downloads")
  .then(res => res.json())
  .then(json => {
    objectLength = Object.keys(json).length
    if(objectLength == 0) return message.channel.send("Nothing found with name: " + args[0]);

    json.forEach((objectLength, i) => {
      let premium = false;
      let lastUpdate = new Date(json[i].updateDate * 1000);
      let rating = Math.round(json[i].rating.average);
      let ratingmsg = '';
      for (let i = 0; i < rating; i++) {
        ratingmsg += '⭐';
      }
      if (ratingmsg == '') ratingmsg = 'No ratings';
      if (json[i].premium == true) premium = true;
      let eb = new Discord.MessageEmbed()
      eb.setDescription(json[i].tag);
      eb.setAuthor(json[i].name);
      eb.addField("❯ Downloads", json[i].downloads, true);
      eb.addField("❯ Rating", ratingmsg, true);
      eb.addField("❯ Premium", premium, true);
      eb.addField("❯ Last update", lastUpdate, false);
      eb.addField("❯ URL", `https://www.spigotmc.org/${json[i].links.discussion}`, false);
      message.channel.send(eb);
    });
  })

}

module.exports.help = {
    name: "search",
    description: "Search a plugin from spigot",
    usage: "<PluginName>"
}
//module.exports.aliases = []
