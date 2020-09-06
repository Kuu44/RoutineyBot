module.exports = {
  name: 'time',
  args: false,
  description: 'Gives today\'s date and time',
  execute(message, args) {
    const Discord = require('discord.js');
    const info = require('../info.js');

    var today = new Date();
    var date = `${today.getDate()} ${info.months[(today.getMonth() + 1)]} ${today.getFullYear()}`;
    var time = ((today.getHours()>12)?(today.getHours()-12):(today.getHours())) + ' : ' + today.getMinutes() + ' PM';

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(info.days[today.getDay()])
			.addFields({
				name: date,
				value:time
			})
      .setURL('https://time.is/')
      .setThumbnail('https://i.imgur.com/cuLTlNe.png');

    message.channel.send(exampleEmbed);
  },
};
