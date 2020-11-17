const Discord = require("discord.js");
const fetch = require("node-fetch");
const Auth = require("../auth.json");

module.exports.run = async (bot, message, args) => {
    fetch(`https://api.trello.com/1/boards/5f0690344d7be95f1f539340?key=${Auth.TrelloKey}&token=${Auth.TrelloToken}`)
    .then(res => res.json())
    .then(json => {
        console.log(json);
    })
}

module.exports.help = {
    name: "trello",
    description: "",
    usage: ""
}
//module.exports.aliases = []