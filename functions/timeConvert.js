function inMinutes(time) {
  return time[0] * 60 + time[1];
};

function convertTime(clock) {
  var firstM;
  if (clock[0] < 13) {
    firstM = 'AM';
  } else {
    clock[0] -= 12;
    firstM = 'PM';
  }
  if (clock[1] < 10) clock[1] = '0' + clock[1];
  return `${clock[0]}:${clock[1]}${firstM}`;
};

//TIme 15 minutes early
const getTime = (time) => {
  var total = time[0] * 60 + time[1];
  total -= 15;
  return [Math.floor(total / 60), total % 60];
};

module.exports={
  inMinutes,
  convertTime,
  getTime
};
