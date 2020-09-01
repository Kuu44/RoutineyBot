module.exports = {
  name: 'day',
	args: true,
	usage: 'rt!day <day of the week>',
  description: 'Shows routine of a day!',
  execute(message, args) {
		const Discord = require('discord.js');
    const info = require('../info.json');
    var msg = [];
		var day;
		var dayT = args[0].toLowerCase();

		switch(dayT){
			case "sunday":
				day=0;
				break;
			case "monday":
				day=1;
				break;
			case "tuesday":
				day=2;
				break;
			case "wednesday":
				day=3;
				break;
			case "thursday":
				day=4;
				break;
			case "friday":
				day=5;
				break;
			case "saturday":
				message.channel.send(`Its a Saturday :tada:. Ja, jiiley apni jindagi, ${message.author.username}! :partying_face:`);
				return;
				break;
			default:
				message.channel.send('You need to enter the name of a day :sweat_smile:');
				return;
		}

		const periods = info.routine[day]._periods;
		const teachers = info.routine[day]._teachers;
    var i = 0;
    while (periods[i] != "END") {
      const position = `${i+1}th Period`;
      switch (periods[i]) {
        case 'B':
          msg.push({
            name: 'BREAK :exploding_head:',
            value: position
          });
					break;
        case ' ':
          msg.push({
            name: 'Free Period :zany_face:',
            value: position
          });
					break;
        default:
          msg.push({
            name: periods[i] + ' | ' + teachers[i],
            value: position
          });
      }
      i++;
    }

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`${info.days[day]}`)
      .setURL('https://discord.js.org/')
      .setAuthor('075 BCT AB', 'https://i.imgur.com/OQwR8CB.png', 'https://teams.microsoft.com/_?culture=en-us&country=US&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn#/school//?ctx=teamsGrid')
      .setDescription('Classes For The Day:')
      .setThumbnail('https://i.imgur.com/cuLTlNe.png')
      .addFields(msg)
      .setTimestamp()
      .setFooter('Have a boring day studying! :(', 'https://i.imgur.com/cuLTlNe.png');

    message.channel.send(exampleEmbed);
  },
};
