module.exports = {
	name: 'args',
	description: 'Sends a list of inputted arguments',
	execute(message, args) {
	  message.channel.send(`Argument list: ${args}\nCount: ${args.length}`);
	},
};
