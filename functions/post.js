function msgCreate(day) {
  const info = require('../info.js');
  var msg = [];
  const emotes = info.routine[day]._emotes;
  const periods = info.routine[day]._periods;
  const teachers = info.routine[day]._teachers;
  const timing = info.routine[day]._timing;

  function convertTime(clock) {
    var firstM, hr, min;
    if (clock[0] < 13) {
      hr = clock[0];
      firstM = 'AM';
    } else {
      hr = clock[0] - 12;
      firstM = 'PM';
    }
    if (clock[1] < 10) min = '0' + clock[1];
    else min = clock[1];
    return `${hr}:${min}${firstM}`;
  };

  var i = 0;
  while (periods[i] != "END") {
    //console.log(i);
    const time = `${i+1}th Period • ${convertTime(timing[i][0])} - ${convertTime(timing[i][1])}`;
    switch (periods[i]) {
      case 'B':
        msg.push({
          name: 'BREAK :exploding_head:',
          value: time
        });
        break;
      case ' ':
        msg.push({
          name: 'Free Period :zany_face:',
          value: time
        });
        break;
      default:
        msg.push({
          name: ' ' + emotes[i] + ' ' + periods[i] + '  | ' + teachers[i],
          value: time
        });
    }
    i++;
  }
  return msg;
}

module.exports = msgCreate;
