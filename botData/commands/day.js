module.exports = {
  name: 'day',
  description: 'Shows routine of a day!',
  execute(message, args) {
    const info = require('../info.json');

    var msg;
    const day = args[0];
    msg = '> Day:' + info.days[day] + `\n> ${info.days[day]}'s Classes\n`;
    periods = info.routine[day]._periods;
    teachers = info.routine[day]._teachers;

    var i = 0;
    while (periods[i] != "end") {
      msg += periods[i] + '\t' + '|' + teachers[i] + '\n';
      i++;
    }
    msg += '```';

    message.channel.send(msg);
  },
};
