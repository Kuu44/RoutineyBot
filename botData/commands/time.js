module.exports = {
	name: 'time',
	description: 'Gives today\'s date and time',
	execute(message, args) {
		message.channel.send(date + '\n' + time);
	},
};
