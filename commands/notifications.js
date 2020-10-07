module.exports = {
  name: "notifications",
  args: false,
  dontShow: false,
  description: "Turns on the routine notifications",
  execute(message, args) {
    var {info:infos} = require('../info.js');
    info = infos[message.guild.id];
    var schedule = require("node-schedule");
    const channelId = info.channelId;
     const {
      inMinutes,
      convertTime,
      getTime,
      getCurrTime,
      timeZoneFix
    } = require('../functions/timeConvert.js');

    const scheduleNotification=require("../functions/scheduleNotifications.js")
    var notificationChannel = message.guild.channels.cache.find(
      (u) => u.id == channelId
    );
    //Setting Notifications
    if (!info.notificationsON) {
     var status=scheduleNotification(notificationChannel,info,schedule,message.guild.id);
     if(status){
       message.channel.send(
          `Notifications turned on in <#${notificationChannel.id}> channel`
        );
     }else{
       message.channel.send(" Channel not found ");
     }
    } else {
      message.channel.send(`Notifications are already turned on in <#${notificationChannel.id}> channel :sweat_smile:`);
    }

  }
};
