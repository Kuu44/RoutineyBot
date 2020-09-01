module.exports = {
	name: 'embed',
	args: false,
	description: 'Sample embed',
	execute(message, args) {
		const Discord = require('discord.js');
		const info = require('../info.json');
		var today = new Date();
		const day=today.getDay();

		const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#0099ff')
  .setTitle(`${info.days[day]}`)
  .setURL('https://discord.js.org/')
  .setAuthor('075 BCT AB', 'https://i.imgur.com/OQwR8CB.png', 'https://teams.microsoft.com/_?culture=en-us&country=US&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn#/school//?ctx=teamsGrid')
  .setDescription('Today\'s Classes:')
  .setThumbnail('https://i.imgur.com/cuLTlNe.png')
  .addFields({
    name: 'Regular field title',
    value: 'Some value here'
  })
  .setTimestamp()
  .setFooter('Have a boring day studying!:sob: ', 'https://i.imgur.com/cuLTlNe.png');

	message.channel.send(exampleEmbed);
	},
};
