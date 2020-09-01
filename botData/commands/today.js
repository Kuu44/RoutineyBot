module.exports = {
	name: 'today',
	description: 'The bread and butter of Routiney!',
	execute(message, args) {
		const info = require('../info.json');
		var today = new Date();

		var msg;
		const day=today.getDay();
		msg = '> Day:' + info.days[day] + '\n> Today\'s Classes\n```\n';
		periods = info.routine[day]._periods;
		teachers = info.routine[day]._teachers;

		var i = 0;
		while (periods[i] != "end") {
			msg += periods[i] + '\t' + '|' + teachers[i] + '\n';
			i++;
		}
		msg += '```';

		message.channel.send(msg);
	},
};
