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
  .setTitle(`info.days[day]`)
  .setURL('https://discord.js.org/')
  .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
  .setDescription('Today\'s Classes:')
  .setThumbnail('https://i.imgur.com/wSTFkRM.png')
  .addFields({
    name: 'Regular field title',
    value: 'Some value here'
  }, {
    name: '\u200B',
    value: '\u200B'
  }, {
    name: 'Inline field title',
    value: 'Some value here',
    inline: true
  }, {
    name: 'Inline field title',
    value: 'Some value here',
    inline: true
  }, )
  .addField('Inline field title', 'Some value here', true)
  .setImage('https://i.imgur.com/wSTFkRM.png')
  .setTimestamp()
  .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');

	message.channel.send(exampleEmbed);
	},
};
