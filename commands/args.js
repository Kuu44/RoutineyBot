module.exports = {
	name: 'args',
	args: true,
	usage: 'rt!args <arg_list>',
	description: 'Sends a list of inputted arguments',
	execute(message, args) {
	  message.channel.send(`Argument list: ${args}\nCount: ${args.length}`);
	},
};
