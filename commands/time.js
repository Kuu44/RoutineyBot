module.exports = {
  name: 'time',
  args: false,
  dontShow: false,
  description: 'Gives today\'s date and time',
  execute: async (message, args) => {
    const Discord = require('discord.js');
    const axios = require('axios');
    const { getRoutine } = require("../functions/routine.js");
    var info = await getRoutine(message.guild.id);
    const { helpers } = require("../functions/helpers.js");
    const {
      getCurrTime,
      getDay
    } = require('../functions/timeConvert.js');

    var today = new Date();
    const timeFix = info[message.guild.id].timeZoneFix;

    //Time Fix
    const time = getCurrTime(timeFix);
    var hr, min, firstM;
    if (time[0] < 12) {
      firstM = "AM";
    } else {
      firstM = "PM"
    }
    if (time[0] < 13) {
      hr = time[0];
    } else {
      hr = time[0] - 12;
    }
    if (time[1] < 10) min = '0' + time[1];
    else min = time[1];

    //Date fixer
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();

    if ((time[0] * 60 + time[1]) < (timeFix[0] * 60 + timeFix[1])) date++;
    if (month == 2) {
      if ((year % 4 == 0) && (year % 400 != 0)) {
        if (date > 29) {
          month++;
          date = 1;
        }
      } else {
        if (date > 28) {
          month++;
          date = 1;
        }
      }
    } else if (month == 4 || month == 6 || month == 9 || month == 11) {
      if (date > 30) {
        month++;
        date = 1;
      }
    } else {
      if (date > 31) {
        month++;
        date = 1;
      }
    }
    if (month > 12) {
      year++;
      month = 1;
    }
    const fullDate = `${date} ${helpers.months[month]} ${year}`;

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`${helpers.days[getDay(timeFix)]}`)
      .addFields({
        name: fullDate,
        value: `${hr}:${min} ${firstM}`
      })
      .setURL('https://time.is/')
      .setThumbnail('https://i.imgur.com/cuLTlNe.png');

    message.channel.send(exampleEmbed);
  }
};
