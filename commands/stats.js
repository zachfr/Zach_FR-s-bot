const node = require('nodeactyl');
const Discord = require('discord.js');
const client = new Discord.Client();
const application = node.Client;

module.exports.run = async (bot, message, args) => {
    var STAFF = message.member.roles.cache.has('725913350755844106');
    if (!STAFF) return message.channel.send(`You don't have the permision to do that, ${message.author}!`);
    if (args[0] === '1.8') {
        application.getServerInfo('2ccad1d1').then(response => {
            application.getRAMUsage('2ccad1d1').then(ram => {
                application.getDiskUsage('2ccad1d1').then(disk => {
                    application.getCPUUsage('2ccad1d1').then(cpu => {
                        let ab = new Discord.MessageEmbed()
                            ab.setDescription('Minecraft server 1.8.8')
                            ab.addField("❯ Name of server", response.attributes.name, true);
                            ab.addField("❯ Ram usage", `${ram.current}/${response.attributes.limits.memory}GB`, true);
                            ab.addField("❯ Cpu usage", `${disk.current}/${response.attributes.limits.disk}MB`, true);
                            ab.addField("❯ Cpu usage", `${cpu.current}%`, true);
                        message.channel.send(ab);
                    })
                })
            })
        })
    } else if (args[0] === '1.12') {
        application.getServerInfo('70c69bbf').then(response => {
            application.getRAMUsage('70c69bbf').then(ram => {
                application.getDiskUsage('70c69bbf').then(disk => {
                    application.getCPUUsage('70c69bbf').then(cpu => {
                        let ab = new Discord.MessageEmbed()
                            ab.setDescription('Minecraft server 1.8.8')
                            ab.addField("❯ Name of server", response.attributes.name, true);
                            ab.addField("❯ Ram usage", `${ram.current}/${response.attributes.limits.memory}GB`, true);
                            ab.addField("❯ Cpu usage", `${disk.current}/${response.attributes.limits.disk}MB`, true);
                            ab.addField("❯ Cpu usage", `${cpu.current}%`, true);
                        message.channel.send(ab);
                    })
                })
            })
        })
    } else if (args[0] === '1.15') {
        application.getServerInfo('e5fd5083').then(response => {
            application.getRAMUsage('e5fd5083').then(ram => {
                application.getDiskUsage('e5fd5083').then(disk => {
                    application.getCPUUsage('e5fd5083').then(cpu => {
                        let ab = new Discord.MessageEmbed()
                            ab.setDescription('Minecraft server 1.8.8')
                            ab.addField("❯ Name of server", response.attributes.name, true);
                            ab.addField("❯ Ram usage", `${ram.current}/${response.attributes.limits.memory}GB`, true);
                            ab.addField("❯ Cpu usage", `${disk.current}/${response.attributes.limits.disk}MB`, true);
                            ab.addField("❯ Cpu usage", `${cpu.current}%`, true);
                        message.channel.send(ab);
                    })
                })
            })
        })
    } else if (args[0] === '1.16') {
        application.getServerInfo('38491b8e').then(response => {
            application.getRAMUsage('38491b8e').then(ram => {
                application.getDiskUsage('38491b8e').then(disk => {
                    application.getCPUUsage('38491b8e').then(cpu => {
                        let ab = new Discord.MessageEmbed()
                            ab.setDescription('Minecraft server 1.8.8')
                            ab.addField("❯ Name of server", response.attributes.name, true);
                            ab.addField("❯ Ram usage", `${ram.current}/${response.attributes.limits.memory}GB`, true);
                            ab.addField("❯ Cpu usage", `${disk.current}/${response.attributes.limits.disk}MB`, true);
                            ab.addField("❯ Cpu usage", `${cpu.current}%`, true);
                        message.channel.send(ab);
                    })
                })
            })
        })
    } else if (args[0] === 'bot') {
        application.getServerInfo('0c0d5997').then(response => {
            application.getRAMUsage('0c0d5997').then(ram => {
                application.getDiskUsage('0c0d5997').then(disk => {
                    application.getCPUUsage('0c0d5997').then(cpu => {
                        let ab = new Discord.MessageEmbed()
                            ab.setDescription('Minecraft server 1.8.8')
                            ab.addField("❯ Name of server", response.attributes.name, true);
                            ab.addField("❯ Ram usage", `${ram.current}/${response.attributes.limits.memory}GB`, true);
                            ab.addField("❯ Cpu usage", `${disk.current}/${response.attributes.limits.disk}MB`, true);
                            ab.addField("❯ Cpu usage", `${cpu.current}%`, true);
                        message.channel.send(ab);
                    })
                })
            })
        })
    } else if (args[0] === 'factorio') {
        application.getServerInfo('165e1270').then(response => {
            application.getRAMUsage('165e1270').then(ram => {
                application.getDiskUsage('165e1270').then(disk => {
                    application.getCPUUsage('165e1270').then(cpu => {
                        let ab = new Discord.MessageEmbed()
                            ab.setDescription('Minecraft server 1.8.8')
                            ab.addField("❯ Name of server", response.attributes.name, true);
                            ab.addField("❯ Ram usage", `${ram.current}/${response.attributes.limits.memory}GB`, true);
                            ab.addField("❯ Cpu usage", `${disk.current}/${response.attributes.limits.disk}MB`, true);
                            ab.addField("❯ Cpu usage", `${cpu.current}%`, true);
                        message.channel.send(ab);
                    })
                })
            })
        })
    } else message.channel.send(`You didn't provide server, ${message.author}!`);
    setTimeout(() => {
        message.delete();
    }, 1000)
    
}

module.exports.help = {
    name: "stats"
}