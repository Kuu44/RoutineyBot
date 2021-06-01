async function sendCurrent(day, position, msg, channel, serverId) {
  const Discord = require('discord.js');
  const axios = require('axios');
  const { getRoutine } = require("./routine.js");
  var info = await getRoutine(serverId);
  info = info[serverId];
  const {
    inMinutes,
    convertTime
  } = require('./timeConvert.js');
  var time, classTime;
  if (day < 6) {
    const emotes = info.routine[day]._emotes;
    const periods = info.routine[day]._periods;
    const teachers = info.routine[day]._teachers;
    const timing = info.routine[day]._timing;
    const emotePNG = info.routine[day]._emotePNGs;

    //time is an array of form : [[startHour,startMinute], [startMinute,endMinute]]; startHour= time[0][0]
    if (position < timing.length) time = timing[position];
    //console.log(position+' '+time+' '+timing[position]);
  }
  if (!time) {
    classTime = `Chill :wink:`;
  } else {
    classTime = convertTime(time[0]) + ' - ' + convertTime(time[1]);
  }
  const exampleEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle(msg.period)
    .setURL('https://time.is/')
    .setAuthor(info.className, info.classLogo, info.classLink)
    .setDescription(classTime)
    .setThumbnail(msg.thumbnail)
    .addFields({
      name: msg.teacher,
      value: msg.quote
    })
    .setTimestamp()
    .setFooter('Have a boring day studying! :P', 'https://i.imgur.com/QrtHFpz.png');
  channel.send(exampleEmbed);
}
module.exports.sendCurrent = sendCurrent;
