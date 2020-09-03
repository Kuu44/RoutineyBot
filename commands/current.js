module.exports = {
  name: 'current',
  args: false,
  description: 'What\'s the current torture on the menu?',
  execute(message, args) {
    const Discord = require('discord.js');
    const info = require('../info.js');
    var today = new Date();
    const day = today.getDay();
    var currTime = [today.getHours(), today.getMinutes()];

    var msg;
    var classTime;
    const emotes = info.routine[day]._emotes;
    const periods = info.routine[day]._periods;
    const teachers = info.routine[day]._teachers;
    const timing = info.routine[day]._timing;

    function inMinutes(time) {
      return time[0] * 60 + time[1];
    };
    function convertTime(clock){
      var firstM;
      if (clock[0] < 13) {
        firstM = 'AM';
      } else {
        clock[0] -= 12;
        firstM = 'PM';
      }
      if (clock[1] < 10) clock[1] = '0' + clock[1];
      return `${clock[0]}:${clock[1]}${firstM}`;
    };
    //time is an array of form : [[startHour,startMinute], [startMinute,endMinute]]; startHour= time[0][0]
    //function to calculate "now" time
    var time = 0;
    var position = 0;
    const nowTime = inMinutes(currTime);
    while (position < timing.length && !time) {
      console.log(position);
      const perStart = inMinutes(timing[position][0]);
      const perEnd = inMinutes(timing[position][1]);
      if ((nowTime > perStart) && (nowTime < perEnd)) {
        time = timing[position];
        break;
      }
      position++;
    }

    const currentFormattedTime=convertTime(currTime);
    if (!time) {
      msg = {
        period: 'No Classes Right Now',
        teacher: 'Ja beta, jiiley apni jindagi :smile:',
        quote: '<Time>: '+currentFormattedTime
      };
      classTime = `Chill :wink:`;
    } else {

      classTime = convertTime(time[0])+' - '+convertTime(time[1]);

      switch (periods[position]) {
        case 'B':
          msg = {
            period: 'BREAK :exploding_head:',
            teacher: 'Go Wild :zany_face:',
            quote: '<Time> :'+currentFormattedTime
          };
          break;
        case ' ':
          msg = {
            period: 'Free Period :zany_face:',
            teacher: 'Go resume your gaming :video_game:!',
            quote: '<Time> :'+currentFormattedTime
          };
          break;
        default:
          msg = {
            period: periods[position],
            teacher: teachers[position],
            quote: ':rotating_light: Class in session :rotating_light:'
          };
      }
    }

    const exampleEmbed = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(msg.period)
      .setURL('https://time.is/')
      .setAuthor('075 BCT AB', 'https://i.imgur.com/OQwR8CB.png', 'https://teams.microsoft.com/_?culture=en-us&country=US&lm=deeplink&lmsrc=homePageWeb&cmpid=WebSignIn#/school//?ctx=teamsGrid')
      .setDescription(classTime)
      .setThumbnail('https://i.imgur.com/cuLTlNe.png')
      .addFields({
        name: msg.teacher,
        value: msg.quote
      })
      .setTimestamp()
      .setFooter('Have a boring day studying! :P', 'https://i.imgur.com/cuLTlNe.png');
    message.channel.send(exampleEmbed);
  }
};
