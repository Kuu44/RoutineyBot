// Parameters info
// schedule= schedule object imported from node-schedule package
// channel= channel object where you want to display notifications
// notificationMessage = the string that you want to display
// time = time array of format [hours,minutes]

const setNotifications = (schedule, channel, notificationMessage, time) => {
  var j = schedule.scheduleJob(`${time[1]} ${time[0]} * * *`, function () {
    channel.send(notificationMessage);
  });
};
module.exports = setNotifications;
