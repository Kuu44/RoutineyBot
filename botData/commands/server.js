module.exports = {
	name: 'server',
	name: 'server',
	description: 'Gives info on server',
	execute(message, args) {
		message.channel.send(`This server\'s name is: ${message.guild.name}\nMember Count: ${message.guild.memberCount}`);
	},
};
