module.exports = {
  name: 'today',
  args: false,
  description: 'The bread and butter of Routiney!',
  execute(message, args) {
    const Discord = require('discord.js');
    const info = require('../info.json');
    var today = new Date();
    const day = today.getDay();

    var msg = [];
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
      .setDescription('Today\'s Classes:')
      .setThumbnail('https://i.imgur.com/cuLTlNe.png')
      .addFields(msg)
      .setTimestamp()
      .setFooter('Have a boring day studying! :sob: ', 'https://i.imgur.com/cuLTlNe.png');

    message.channel.send(exampleEmbed);
  },
};
