async function keyEmbed(key, message){
  const Discord = require('discord.js');
  const axios = require('axios');
  const { getRoutine } = require("./routine.js");
  var info = await getRoutine(message.guild.id);
  inf = info[message.guild.id];

  const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`Login Here With This Key:`)
      .setURL('https://time.is/') //Website link
      .setAuthor(inf.className, inf.classLogo, inf.classLink)
      .setDescription(key)
      .setThumbnail('https://i.imgur.com/zmkUQ87.png')
      .addFields({
        name: `Hello, ${message.author.username}`,
        value: `This key is unique to you, so make \nsure not to be too "kind" with it ;)`
      })
      .setTimestamp()
      .setFooter('Have a boring day studying! :P', 'https://i.imgur.com/QrtHFpz.png');
    return exampleEmbed;
}

module.exports.keyEmbed = keyEmbed;
