module.exports = {
	name: 'time',
	args: false,
	description: 'Gives today\'s date and time',
	execute(message, args) {
		const info = require('../info.json');

		var today = new Date();
		var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ", " + info.days[today.getDay()];
		var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

		message.channel.send(date + '\n' + time);
	},
};
