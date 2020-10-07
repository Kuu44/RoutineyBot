function scheduleNotifications(notificationChannel,info,schedule,serverId)
{
  const routine = info.routine;
  const setNotification = require("../functions/setNotification");
   const {
      inMinutes,
      convertTime,
      getTime,
      getCurrTime,
      timeZoneFix
    } = require('../functions/timeConvert.js');
    const sendCurrent = require('../functions/sendCurrent.js');
    

   if (notificationChannel != undefined) {
        for (var day = 0; day < 6; day++) {
          //Prints routine in the morning
          const todayComm = require(`../commands/today.js`);
          const timeToSet = timeZoneFix([9, 59], info.timeZoneFix);
          schedule.scheduleJob(`${timeToSet[1]} ${timeToSet[0]} * * ${day}`, function() {
            todayComm.execute(message, args);
          });
          console.log('Day ' + day + '\'s Morning Schedule Set');

          routine[day]._periods.forEach((item, index) => {
            //console.log(item);
            if (item != 'END') {
              var notificationMessage = `  ${item}  ${routine[day]._teachers[index]} Start time : ${routine[day]._timing[index][0]} Notification time:   ${getTime(routine[day]._timing[index][0], info.preTime)} `;
              console.log('Day ' + day + ' ' + notificationMessage);
              if (info.preNotification) setNotification(day, schedule, notificationChannel, ` starts in ${info.preTime} minutes`, getTime(routine[day]._timing[index][0], info.preTime), index, serverId);
              if (info.startNotification) setNotification(day, schedule, notificationChannel, ` has started`, routine[day]._timing[index][0], index, serverId);
            }
          });
        }

        //Saturday
        const timeToSet = timeZoneFix([10, 00], info.timeZoneFix);
        var j = schedule.scheduleJob(`${timeToSet[1]} ${timeToSet[0]} * * 6`, function() {
          const msg = {
            period: 'It\'s Saturday :partying_face:',
            teacher: 'Time for your gaming :video_game:!',
            quote: 'Ja beta, jiiley apni jindagi',
            thumbnail: 'https://i.imgur.com/cuLTlNe.png'
          }
          sendCurrent(6, msg, notificationChannel, serverId);
        });

        //notificationChannel.send(" Notifications turned on ");
        info.notificationsON = true;
        console.log(
          `Notifications turned on in <#${notificationChannel.name}> channel`
        );
        notificationChannel.send(" Notifications scheduled :smile: ")
        return true;
        /*message.channel.send(
          `Notifications turned on in <#${notificationChannel.id}> channel`
        );*/
      } else {
        return false;
        //message.channel.send(" Channel not found ");
      }
}
module.exports = scheduleNotifications;