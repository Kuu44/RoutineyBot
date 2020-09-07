function inMinutes(time) {
  return time[0] * 60 + time[1];
};

function convertTime(clock) {
  var firstM;
  if (clock[0] < 12) firstM = 'AM';
  else firstM = 'PM';
  if (clock[0] > 12) clock[0] -= 12;

  if (clock[1] < 10) clock[1] = '0' + clock[1];

  return `${clock[0]}:${clock[1]}${firstM}`;
};

//TIme 15 minutes early
const getTime = (time) => {
  const {
    preTime
  } = require('../info.js');
  var total = time[0] * 60 + time[1];
  total -= preTime;
  return [Math.floor(total / 60), total % 60];
};

function timeZoneFix(time) {
  var total = time[0] * 60 + time[1];
  var totalFix = timeZoneFix[0] * 60 + timeZoneFix[1];
  total += totalFix;
  if (total > 1439) total -= 1439;
  return [Math.floor(total / 60), total % 60];
}

function getCurrTime() {
  const {
    timeZoneFix
  } = require('../info.js');

  var today = new Date();
  var time = [today.getHours(), today.getMinutes()];
  //return time;
  var total = time[0] * 60 + time[1];
  var totalFix = timeZoneFix[0] * 60 + timeZoneFix[1];
  total += totalFix;
  if (total > 1439) total -= 1439;
  return [Math.floor(total / 60), total % 60];
}
module.exports = {
  inMinutes,
  convertTime,
  getTime,
  getCurrTime,
  timeZoneFix
};
