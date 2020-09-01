module.exports = {
	name: 'hi',
	description: 'Greets the user',
	execute(message, args) {
		message.channel.send(`Hi ${message.author.username}!`);
	},
};
