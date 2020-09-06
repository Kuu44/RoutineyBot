function postEmbed(day, channel, msg, description) {
  const Discord = require('discord.js');
  const info = require('../info.js');

  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(`${info.days[day]}`)
    .setURL('https://time.is/')
    .setAuthor('075 BCT AB', 'https://i.imgur.com/OQwR8CB.png', 'https://teams.microsoft.com/_?culture=en-us&country=US&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn#/school//?ctx=teamsGrid')
    .setDescription(description)
    .setThumbnail('https://i.imgur.com/cuLTlNe.png')
    .addFields(msg)
    .setTimestamp()
    .setFooter('Have a boring day studying! :P', 'https://i.imgur.com/cuLTlNe.png');
  channel.send(exampleEmbed);
}

module.exports = postEmbed;
