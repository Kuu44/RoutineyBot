module.exports = {
  name: "notifications",
  description: "Turn on the routein notifications",
  execute(message, args) {
    var schedule = require("node-schedule");
    var channelName = args[0];
    var notificationChannel = message.guild.channels.cache.find(
      (u) => u.name == args[0]
    );
    if (notificationChannel != undefined) {
      notificationChannel.send(" Notifications turned on ");
      message.channel.send(`Notifications turned on in ${args[0]} channel`);
    } else {
      message.channel.send(" Channel not found ");
    }

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
    console.log(args[0]);

    // var j = schedule.scheduleJob("17 17 * * *", function () {
    //   message.channel.send("This will print at 17:17.");
    // });
  },
};
