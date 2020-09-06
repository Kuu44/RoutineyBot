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

module.exports={
  inMinutes,
  convertTime
};
