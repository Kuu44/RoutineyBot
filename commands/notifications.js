module.exports = {
  name: "notifications",
  description: "Turn on the routine notifications",
  execute(message, args) {
    const { routine } = require("../info.json");
    const setNotification = require("../functions/setNotification");
    

    //TIme 15 minutes early
    const getTime = (time) => {
      var total = time[0] * 60 + time[1];
      total -= 15;
      return [Math.floor(total / 60), total % 60];
    };

    var today = new Date();
    const day = today.getDay();
   
    if(day==6){ /// Saturday
      message.channel.send(" No classes today . Happy Holidays");
    }else{

    
    // console.log(routine[day]._periods);

    // var schedule = require("node-schedule");
    // setNotification(schedule, message.channel, "Notification goes off", [
    //   20,
    //   12,
    // ]);

    var schedule = require("node-schedule");
    var channelName = args[0];
    var channelId = "";
    if (channelName == undefined) {
      channelId = message.channel.id;
    } else {
      channelId = channelName.substr(
        channelName.toString().search("<") + 2,
        channelName.toString().search(">") - 2
      );
    }
    var notificationChannel = message.guild.channels.cache.find(
      (u) => u.id == channelId
    );
    if (notificationChannel != undefined) {
      routine[day]._periods.forEach((item, index) => {
        //console.log(item);
        if(item!='END'){ 
          var notificationMessage=`  ${item}  ${routine[day]._teachers[index]} Start time : ${routine[day]._timing[index][0]} Notification time:   ${getTime(routine[day]._timing[index][0])} `;
          //message.channel.send(notificationMessage);
          console.log(notificationMessage);
          setNotification(schedule, notificationChannel, `${item} period starts in 15 minutes `,getTime(routine[day]._timing[index][0]) );
          setNotification(schedule, notificationChannel, `${item} period has started  `,routine[day]._timing[index][0]) ;
        }
      });
      notificationChannel.send(" Notifications turned on ");
      message.channel.send(
        `Notifications turned on in <#${notificationChannel.id}> channel`
      );






    } else {
      message.channel.send(" Channel not found ");
    }

  }
  },
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
