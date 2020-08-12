const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {
  if(args.length == 0) return message.channel.send("You didn't provide any author to search \n \`!author <AuthorName>`");
  fetch("https://api.spiget.org/v2/search/authors/"+args.join("").toLowerCase())
  .then(res => res.json())
  .then(json => {
    fetch(`https://api.spiget.org/v2/authors/${json[0].id}/resources`)
    .then(res2 => res2.json())
    .then(json2 => {
      objectLength = Object.keys(json2).length

      json2.forEach((objectLength, i) => {
        let rating = Math.round(json2[i].rating.average);
        let ratingmsg = '';
        for (let i = 0; i < rating; i++) {
          ratingmsg += '⭐';
        }
        if (ratingmsg == '') ratingmsg = 'No ratings';
        let eb = new Discord.MessageEmbed()
        eb.setDescription(json2[i].tag);
        eb.setAuthor(json2[i].name);
        eb.addField("❯ Downloads", json2[i].downloads, true);
        eb.addField("❯ Rating", ratingmsg, true);
        eb.addField("❯ URL", `https://www.spigotmc.org/${json2[i].links.discussion}`, false);
        message.channel.send(eb);
      });
    })
  })

}

module.exports.help = {
    name: "author",
    description: "Search a author ressourse from spigot",
    usage: "<AuthorName>"
}
//module.exports.aliases = []
