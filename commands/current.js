module.exports = {
  name: 'current',
  args: false,
  description: 'What\'s the current torture on the menu?',
  execute(message, args) {
    const Discord = require('discord.js');
    const info = require('../info.js');
    var today = new Date();
    const day = today.getDay();
    var currTime = [today.getHours(),today.getMinutes()];

    var msg;
    var classTime;
    const emotes = info.routine[day]._emotes;
    const periods = info.routine[day]._periods;
    const teachers = info.routine[day]._teachers;
    const timing=info.routine[day]._timing;

    function inMinutes(time){
      
    };
    //time is an array of form : [[startHour,startMinute], [startMinute,endMinute]]; startHour= time[0][0]
    //function to calculate "now" time
    var time;
    var position=0;

    while(position<timing.length)
    {
      const perStart=;
      const perEnd=;
      currTime=
    }
    if (!time) {
      msg = {
        period: 'No Classes Right Now',
        teacher: ' '
      };
      classTime = `Ja beta, jiiley apni jindagi :smile:`;
    } else {
      var firstM, secondM;
      if (time[0][0] < 13) {
        firstM = 'AM';
      } else {
        time[0][0] -= 12;
        firstM = 'PM'
      }
      if (time[1][0] < 13) {
        secondM = 'AM';
      } else {
        time[1][0] -= 12;
        secondM = 'PM'
      }
      if(time[0][1]<10) time[0][1]='0'+time[0][1];
      if(time[1][1]<10) time[1][1]='0'+time[1][1];
      classTime = `${time[0][0]}:${time[0][1]}${firstM} - ${time[1][0]}:${time[1][1]}${secondM}`;

      switch (periods[position]) {
        case 'B':
          msg = {
            period: 'BREAK :exploding_head:',
            teacher: 'Go Wild :zany_face:'
          };
          break;
        case ' ':
          msg = {
            period: 'Free Period :zany_face:',
            teacher: 'Go resume your gaming :video_game:!'
          };
          break;
        default:
          msg = {
            period: periods[position],
            teacher: teachers[position]
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
      .addFields({name: msg.teacher, value:'.'})
      .setTimestamp()
      .setFooter('Have a boring day studying! :P', 'https://i.imgur.com/cuLTlNe.png');
    message.channel.send(exampleEmbed);
  }
};
