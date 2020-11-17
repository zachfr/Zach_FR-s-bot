const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports.run = async (bot, message, args) => {
    var arg = args[0].toLowerCase();
    fetch("https://songoda.com/api/v2/products?per_page=300")
    .then(res => res.json())
    .then(json => {
        for (let index = 0; index < json.meta.total; index++) {
            if(arg == json.data[index].name.toLowerCase()){
                var i = index;
            }
        }
        console.log(json.data[i].name);
        console.log(json.data[i].downloads);
        console.log(json.data[i].views);
    })
}

module.exports.help = {
    name: "s"
}
module.exports.aliases = []