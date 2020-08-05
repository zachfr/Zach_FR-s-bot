const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const commandName = args[0].toLowerCase();
	const command = message.client.commands.get(commandName)
		|| message.client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) {
		return message.channel.send(`There is no command with name or alias \`${commandName}\`, ${message.author}!`);
	}

	delete require.cache[require.resolve(`./${command.help.name}.js`)];

	try {
		const newCommand = require(`./${command.help.name}.js`);
		message.client.commands.set(newCommand.help.name, newCommand);
		message.channel.send(`Command \`${command.help.name}\` was reloaded!`);
	} catch (error) {
		console.log(error);
		message.channel.send(`There was an error while reloading a command \`${command.help.name}\`:\n\`${error.message}\``);
	}
	setTimeout(() => {
        message.delete();
    }, 1000)
}

module.exports.help = {
    name: "reload"
}