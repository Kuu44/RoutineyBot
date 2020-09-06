// Parameters info
// schedule= schedule object imported from node-schedule package
// channel= channel object where you want to display notifications
// notificationMessage = the string that you want to display
// time = time array of format [hours,minutes]

const setNotifications = (day, schedule, channel, notificationMessage, time, position) => {
  const sendCurrent = require('./sendCurrent.js');
  const info = require('../info.js');

  const periods = info.routine[day]._periods;
  const teachers = info.routine[day]._teachers;
  const emotePNG = info.routine[day]._emotePNGs;
  var msg = {
    period: periods[position],
    teacher: 'Teacher: ' + teachers[position],
    quote: notificationMessage,
    thumbnail: emotePNG[position]
  };
  switch (periods[position]) {
    case 'B':
      msg = {
        period: 'BREAK :exploding_head:',
        teacher: 'Go Wild :zany_face:',
        quote: ':amusing: Break' + notificationMessage + ' :amusing:',
        thumbnail: 'https://i.imgur.com/cuLTlNe.png'
      };
      break;
    case ' ':
      msg = {
        period: 'Free Period :zany_face:',
        teacher: 'Time for your gaming :video_game:!',
        quote: ':amusing: Free Period' + notificationMessage + ' :amusing:',
        thumbnail: 'https://i.imgur.com/cuLTlNe.png'
      };
      break;
    default:
      msg = {
        period: periods[position],
        teacher: 'Teacher: ' + teachers[position],
        quote: ':rotating_light: Class' + notificationMessage + ' :rotating_light:',
        thumbnail: emotePNG[position]
      };
  }
  var j = schedule.scheduleJob(`${time[1]} ${time[0]} * * *`, function() {
    sendCurrent(day, time, position, msg, channel);
  });
};
module.exports = setNotifications;
