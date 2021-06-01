module.exports = {
  name: 'current',
  args: false,
  dontShow: false,
  description: 'What\'s the current torture on the menu?',
  execute: async (message, args) => {
    const Discord = require('discord.js');
    const axios = require('axios');
    const { getRoutine } = require("../functions/routine.js");
    var info = await getRoutine(message.guild.id);
    info = info[message.guild.id];

    const { sendCurrent } = require('../functions/sendCurrent.js');
    const {
      inMinutes,
      getCurrTime,
      getDay
    } = require('../functions/timeConvert.js');

    const day = getDay(info.timeZoneFix);
    const currTime = getCurrTime(info.timeZoneFix);

    if (day == 6) {
      msg = {
        period: 'It\'s a Saturday yarrr..',
        teacher: 'Ja beta, jiiley apni jindagi :smile:',
        quote: '~',
        thumbnail: 'https://i.imgur.com/cuLTlNe.png'
      };
      await sendCurrent(day, 0, msg, message.channel, message.guild.id);
      return;
    }

    var msg;
    var classTime;

    const emotes = info.routine[day]._emotes;
    const periods = info.routine[day]._periods;
    const teachers = info.routine[day]._teachers;
    const timing = info.routine[day]._timing;
    const emotePNG = info.routine[day]._emotePNGs;

    //time is an array of form : [[startHour,startMinute], [startMinute,endMinute]]; startHour= time[0][0]
    //function to calculate "now" time
    var time = 0;
    var position = 0;
    const nowTime = inMinutes(currTime);
    while (position < timing.length && !time) {
      //console.log(position);
      const perStart = inMinutes(timing[position][0]);
      const perEnd = inMinutes(timing[position][1]);
      if ((nowTime > perStart) && (nowTime < perEnd)) {
        time = timing[position];
        break;
      }
      position++;
    }

    if (!time) {
      msg = {
        period: 'No Classes Right Now',
        teacher: 'Ja beta, jiiley apni jindagi :smile:',
        quote: '~',
        thumbnail: 'https://i.imgur.com/cuLTlNe.png'
      };
    } else {
      switch (periods[position]) {
        case 'B':
          msg = {
            period: 'BREAK :exploding_head:',
            teacher: 'Go Wild :zany_face:',
            quote: ':star_struck: Current Period :star_struck:',
            thumbnail: 'https://i.imgur.com/cuLTlNe.png'
          };
          break;
        case ' ':
          msg = {
            period: 'Free Period :zany_face:',
            teacher: 'Go resume your gaming :video_game:!',
            quote: ':yum: Current Period :yum:',
            thumbnail: 'https://i.imgur.com/cuLTlNe.png'
          };
          break;
        default:
          msg = {
            period: periods[position],
            teacher: 'Teacher: ' + teachers[position],
            quote: ':rotating_light: Class in session :rotating_light:',
            thumbnail: emotePNG[position]
          };
      }
    }
    await sendCurrent(day, position, msg, message.channel, message.guild.id);
  }
};
