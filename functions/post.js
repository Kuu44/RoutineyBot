function msgCreate(day) {
  const info = require('../info.json');
  var msg = [];
  const emotes = info.routine[day]._emotes;
  const periods = info.routine[day]._periods;
  const teachers = info.routine[day]._teachers;

  var i = 0;
  while (periods[i] != "END") {
    const position = `${i+1}th Period`;
    switch (periods[i]) {
      case 'B':
        msg.push({
          name: 'BREAK :exploding_head:',
          value: position
        });
        break;
      case ' ':
        msg.push({
          name: 'Free Period :zany_face:',
          value: position
        });
        break;
      default:
        msg.push({
          name: ' ' + emotes[i] + ' ' + periods[i] + '  | ' + teachers[i],
          value: position
        });
    }
    i++;
  }
  return msg;
}

module.exports = msgCreate;
