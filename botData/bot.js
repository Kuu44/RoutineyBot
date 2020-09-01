// require the discord.js module
var Discord = require('discord.js');
const auth = require('./auth.json');

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
var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();

// Initialize Discord Bot
var bot = new Discord.Client();

/*//Creating an Embed
// const exampleEmbed = new Discord.MessageEmbed()
// 	.setColor('#0099ff')
// 	.setTitle('Some title')
// 	.setURL('https://discord.js.org/')
// 	.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
// 	.setDescription('Some description here')
// 	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
// 	.addFields(
// 		{ name: 'Regular field title', value: 'Some value here' },
// 		{ name: '\u200B', value: '\u200B' },
// 		{ name: 'Inline field title', value: 'Some value here', inline: true },
// 		{ name: 'Inline field title', value: 'Some value here', inline: true },
// 	)
// 	.addField('Inline field title', 'Some value here', true)
// 	.setImage('https://i.imgur.com/wSTFkRM.png')
// 	.setTimestamp()
// 	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');*/

//Bot commands
bot.once('ready',()=>{ //Only triggers once after logging in
  console.log('Ready!');
});

bot.login('NzUwMjIwNDgxNDk5NDk2NDk4.X03XRQ.xzARhgLhO0zNiqCcXCG63pOueGU');

bot.on('message',message=>{
console.log(message.content);
if (message.content.substring(0, 4) == 'rt! ') {
    var args = message.content.substring(4).split(' ');
    var cmd = args[0];

    args = args.splice(1);
    switch(cmd){
      case 'ping':
        message.channel.send('Pong!');
      break;
      case 'beep':
        message.channel.send('Boop.');
      break;
      case 'today':
        showRoutine(today.getDay(),message);
      break;
      case 'time':
        message.channel.send(date+'\n'+time);
      break;
      default:
        bot.sendMessage('Hmm.. I dont seem to have this command!');
    }
}
});
/*    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `rt! `
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
	          default:
  	          bot.sendMessage({
                      to: channelID,
                      message: 'Hmm.. I dont seem to have this command!'
                  });
              // Just add any case commands if you want to..
         }
     }
});*/
function showRoutine(day, message){
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

  message.channel.send(msg);
}
