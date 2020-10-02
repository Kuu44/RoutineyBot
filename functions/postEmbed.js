function postEmbed(day, channel, msg, description, serverId) {
  const Discord = require('discord.js');
  const {
    info,
    helpers
  } = require('../info.js');
  const inf = info[serverId];

  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${helpers.days[day]}`)
    .setURL('https://time.is/')
    .setAuthor(inf.className, inf.classLogo, inf.classLink)
    .setDescription(description)
    .setThumbnail('https://i.imgur.com/QrtHFpz.png')
    .addFields(msg)
    .setTimestamp()
    .setFooter('Have a boring day studying! :P', 'https://i.imgur.com/QrtHFpz.png');
  channel.send(exampleEmbed);
}

module.exports = postEmbed;
