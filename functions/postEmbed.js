function postEmbed(day, channel, msg, description, serverId) {
  const Discord = require('discord.js');
  const infoMain = require('../info.js');
  const info = infoMain[serverId];

  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${infoMain.days[day]}`)
    .setURL('https://time.is/')
    .setAuthor(info.className, info.classLogo, info.classLink)
    .setDescription(description)
    .setThumbnail('https://i.imgur.com/QrtHFpz.png')
    .addFields(msg)
    .setTimestamp()
    .setFooter('Have a boring day studying! :P', 'https://i.imgur.com/QrtHFpz.png');
  channel.send(exampleEmbed);
}

module.exports = postEmbed;
