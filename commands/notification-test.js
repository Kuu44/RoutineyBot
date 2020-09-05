module.exports = {
  name: "notification-test",
  description: "Test notification settings",
  execute(message, args) {
    var schedule = require("node-schedule");
    var j = schedule.scheduleJob("0 11 * * *", function () {
      message.channel.send("Test notification that will print at 11::00 ");
    });
  },
};
