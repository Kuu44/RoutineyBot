module.exports = {
	name: 'args',	
	args: true,
	description: 'Sends a list of inputted arguments',
	execute(message, args) {
	  message.channel.send(`Argument list: ${args}\nCount: ${args.length}`);
	},
};
