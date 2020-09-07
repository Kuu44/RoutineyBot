module.exports = {
  name: "notifications",
  description: "Turn on the routine notifications",
  execute(message, args) {
    const {
      routine,

    } = require("../info.js");
    const setNotification = require("../functions/setNotification");
    const {
      inMinutes,
      convertTime,
      getTime
    } = require('../functions/timeConvert.js');
    const sendCurrent = require('../functions/sendCurrent.js');
    var schedule = require("node-schedule");

    const info = require('../info.js');
    const channelId = info.channelId;

    var notificationChannel = message.guild.channels.cache.find(
      (u) => u.id == channelId
    );
    //Setting Notifications
    if (!info.notificationsON) {
      if (notificationChannel != undefined) {
        for (var day = 0; day < 6; day++)
          routine[day]._periods.forEach((item, index) => {
            //console.log(item);
            if (item != 'END') {
              var notificationMessage = `  ${item}  ${routine[day]._teachers[index]} Start time : ${routine[day]._timing[index][0]} Notification time:   ${getTime(routine[day]._timing[index][0])} `;
              console.log('Day ' + day + ' ' + notificationMessage);

              setNotification(day, schedule, notificationChannel, ` starts in 15 minutes`, getTime(routine[day]._timing[index][0]), index);
              setNotification(day, schedule, notificationChannel, ` has started`, routine[day]._timing[index][0], index);
            }
          });

        //Saturday
        var j = schedule.scheduleJob(`15 45 * * 6`, function() {
        //var j = schedule.scheduleJob(`10 00 * * 6`, function() {
          const time = [10, 00];
          const msg = {
            period: 'It\'s Saturday :partying_face:',
            teacher: 'Time for your gaming :video_game:!',
            quote: 'Ja beta, jiiley apni jindagi',
            thumbnail: 'https://i.imgur.com/cuLTlNe.png'
          }
          sendCurrent(6, time, 10, msg, notificationChannel);
        });

        notificationChannel.send(" Notifications turned on ");
        info.notificationsON = true;
        message.channel.send(
          `Notifications turned on in <#${notificationChannel.id}> channel`
        );
      } else {
        message.channel.send(" Channel not found ");
      }
    } else {
      message.channel.send(`Notifications are already turned on in <#${notificationChannel.id}> channel :sweat_smile:`);
    }

  }
};

// DEPRACATED

//console.log(args[0]);
// var index = channelName.length;
// console.log(channelName.search("<"));
// console.log(channelName.search(">"));
// console.log(index - 2);
// console.log(
//   channelName.substr(
//     channelName.search("<") + 2,
//     channelName.search(">") - 2
//   )
// );

// message.guild.channels.create("routine-notifications", {
//   type: "text",
// });
// const yourchannel = message.guild.channels.find(
//   (channel) => channel.name === "General"
// );

// const object = {'a': 1, 'b': 2, 'c' : 3};
// for (const [key, value] of Object.entries(message.guild.channels.cache)) {
//   console.log(key);
// }
//message.channel.send("Task Scheduled");

// var notificationChannel = message.guild.channels.cache.find(
//   (u) => u.name == "routiney-notifications"
// );
// if (notificationChannel == undefined) {
//   message.guild.channels.create("routiney-notifications", {
//     type: "text",
//   });
//   var notificationChannel = message.guild.channels.cache.find(
//     (u) => u.name == "routiney-notifications"
//   );
//   notificationChannel.send(" Notifications turned on ");

//   message.channel.send(
//     "Notification channel created and notifications turned on "
//   );
// } else {
//   message.channel.send("Notification turned on ");
// }

//notificationChannel.delete();

// var j = schedule.scheduleJob("17 17 * * *", function () {
//   message.channel.send("This will print at 17:17.");
// });
