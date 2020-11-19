const Discord = require("discord.js");
const fetch = require("node-fetch");
var choix1;
var choix2;
var keynumber = 1;
var response_code;

module.exports.run = async (bot, message, args) => {
    var bvalide = false;

    fetch("https://www.openquizzdb.org/api.php?key=" + key(keynumber) + "&choice=2")
    .then(res => res.json())
    .then(json => {
        if(json.response_code === 5){
            message.channel.send("Api is bad sorry. Try again.")
        }else{
            var question = json.results[0].question;
            var theme = json.results[0].theme;
            var difficulte = json.results[0].difficulte;
            var bonne_reponse = json.results[0].reponse_correcte;
            var chiffrerandom = Math.round(Math.random());
            if(chiffrerandom === 1){
                choix1 = json.results[0].autres_choix[0];
                choix2 = json.results[0].autres_choix[1];
            }else{
                choix1 = json.results[0].autres_choix[1];
                choix2 = json.results[0].autres_choix[0];
            }
            let embed = new Discord.MessageEmbed()
                .setAuthor("Thème: " + theme + " Difficulté: " + difficulte)
                .setTitle(question)
                .addField("Choix", `🇦 : ${choix1} \n🇧 : ${choix2}`)
                .setFooter(message.author.username +  " | Tu as 15 secondes pour répondre!");
            message.channel.send(embed).then(sentMessage => {
                sentMessage.react('🇦');
                sentMessage.react('🇧');
                const filter = (reaction, user) => (reaction.emoji.name === '🇦' || reaction.emoji.name === '🇧') && user.id === message.author.id;
                const collector = sentMessage.createReactionCollector(filter, { time: 15000 });
                collector.on('collect', collect => {
                    if(test(collect.emoji.name) === bonne_reponse){
                        collector.stop();
                        let embed = new Discord.MessageEmbed()
                            .setTitle("Bonne réponse")
                            .setDescription("Bravo à toi, tu as trouvé la bonne réponse.")
                            .setColor("#1ba124")
                            .setFooter(message.author.username);
                        sentMessage.reactions.removeAll();
                        sentMessage.edit(embed);
                    }else{
                        collector.stop();
                        let embed = new Discord.MessageEmbed()
                            .setTitle("Mauvaise réponse")
                            .setDescription("Désoler ce n'est pas la bonne réponse. Tu peux réessayer!")
                            .setColor("#ff0800")
                            .setFooter(message.author.username);
                        sentMessage.reactions.removeAll();
                        sentMessage.edit(embed);
                    }
                });
                collector.on('end', end => {
                    if(end.size === 0){
                        let embed = new Discord.MessageEmbed()
                            .setTitle("Temps écoulée")
                            .setDescription("Tu n'as pas réagit attends. Tu peux réessayer!")
                            .setColor("#ff9900");
                        sentMessage.reactions.removeAll();
                        sentMessage.edit(embed);
                    }
                })
            });
        }
    })
    if(keynumber == 6){
        keynumber = 1
    }else
        keynumber += 1;
}

module.exports.help = {
    name: "trivia",
    description: "Jeu Trivia"
}
module.exports.aliases = []

function test(emoji){
    var message;
    switch (emoji) {
        case '🇦':
            message = choix1; 
            break;
        case '🇧':
            message = choix2;
            break; 
        default:
            break;
    }
    return message;
}

function key(number) {
    var key;
    switch (number) {
        case 1:
            key = "29WB5E87NX"
            break;
        case 2:
            key = "34TA9Y5TXB"
            break;
        case 3:
            key = "C632QTXDC4"
            break;
        case 4:
            key = "2X4A352XMU"
            break;
        case 5:
            key = "654N86PBYP"
            break;
        case 6:
            key = "T88MHRDP92"
            break;
        default:
            break;
    }
    return key;
}