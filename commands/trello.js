const Discord = require("discord.js");
var Trello = require("trello");
var trello = new Trello("22655417d943732ca472bdb83144ec4a509f47451ff8937d086ad8df6e817f48", "62c3103105403c03af033835b753c603");

module.exports.run = async (bot, message, args) => {
    trello.addCard('Clean car', 'Wax on, wax off',
    function (error, trelloCard) {
        if (error) {
            console.log('Could not add card:', error);
        }
        else {
            console.log('Added card:', trelloCard);
        }
    });
}

module.exports.help = {
    name: "trello",
    description: "",
    usage: ""
}
//module.exports.aliases = []