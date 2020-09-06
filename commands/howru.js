module.exports = {
	name: 'howru',
	args: false,
	description: 'Tells us how the bot is feeling today',
	execute(message, args, today) {
		const info = require('../info.js');
		var today = new Date();

	  switch (today.getDay()) {
	    case 1:
	      message.channel.send(`Feeling real depressed, what did you expect, ${message.author.username}? Its a Monday :unamused:`)
	      break;
	    default:
	      message.channel.send(`I'm feeling particularly routine-ly this ${info.days[today.getDay()]}, ${message.author.username} :stuck_out_tongue_winking_eye:!\n Now go f yourself.`);
	  }
	},
};
