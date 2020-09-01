var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
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
	       showRoutine(getDay());
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
function showRoutine(day)=>{

}
function getDay(){
  return 2;
}
const routine=[
  {},
  {},
  {
    _period: ["Data Structure and Algorithm","Data Structure and Algorithm","Micro"],
    _teacher: ["BS","BS",]
  }
];
