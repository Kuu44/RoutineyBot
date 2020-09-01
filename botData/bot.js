var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

//Info Objects
const routine=[
  {},
  {},
  {
    _periods: ["Data Structure and Algorithm","Data Structure and Algorithm","Discrete Structure","Discrete Structure","b","end"],
    _teachers: ["BS","BS","SPP","SPP","b","end"],
  }
];
const days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

//Dates
var today=new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+", "+days[today.getDay()];

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 4) == 'rt! ') {
        var args = message.substring(4).split(' ');
        var cmd = args[0];

        args = args.splice(1);
        switch(cmd) {
            // rt!ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;
	          case 'today':
	            showRoutine(today.getDay(),channelID);
	          break;
	          case 'date':
	            bot.sendMessage({
                to: channelID,
                message: date
              });
	          break;
	          default:
  	          bot.sendMessage({
                      to: channelID,
                      message: 'Hmm.. I dont seem to have this command!'
                  });
              // Just add any case commands if you want to..
         }
     }
});
function showRoutine(day, channelID){
  var msg;
  msg='>Day:'+days[day]+'\n>Today\'s Classes\n```\n';
  periods=routine[day]._periods;
  teachers=routine[day]._teachers;
  var i=0;
  while(periods[i]!="end"){
    msg+=periods[i]+'\t'+'|'+teachers[i]+'\n';
    i++;
  }
  msg+='```';

  bot.sendMessage
  ({
    to: channelID,
    message: msg
  });
}
