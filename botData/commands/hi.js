module.exports = {
	name: 'hi',
	args: false,
	description: 'Greets the user',
	execute(message, args) {
		message.channel.send(`Hi ${message.author.username}!`);
	},
};
