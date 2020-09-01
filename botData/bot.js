// require the discord.js module
var Discord = require('discord.js');
const {
  prefix,
  token
} = require('./auth.json');
const info = require('./info.json');

//Dates
var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + ", " + info.days[today.getDay()];
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

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
bot.once('ready', () => { //Only triggers once after logging in
  console.log('Ready!');
});

bot.login(token);

bot.on('message', message => {
  //logs everything typed
  console.log(message.content);

  if (message.content.startsWith(prefix) && !message.author.bot) {
    var args = message.content.slice(prefix.length).trim().split(/ +/);
    var cmd = args.shift().toLowerCase();
    switch (cmd) {
      case 'ping':
        message.channel.send('Pong!');
        break;
      case 'beep':
        message.channel.send('Boop.');
        break;
      case 'today':
        showRoutine(today.getDay(), message);
        break;
      case 'time':
        message.channel.send(date + '\n' + time);
        break;
      case 'hi':
        message.channel.send(`Hi ${message.author.username}!`);
        break;
      case 'howru':
        howYou(message);
        break;
      case 'server':
        message.channel.send(`This server\'s name is: ${message.guild.name}\nMember Count: ${message.guild.memberCount}`);
        break;
      case 'args':
        message.channel.send(`Argument list: ${args}\nCount: ${args.length}`);
        break;
      default:
        message.channel.send('Hmm.. I dont seem to have this command!');
    }
  }
});

function showRoutine(day, message) {
  var msg;
  msg = '> Day:' + info.days[day] + '\n> Today\'s Classes\n```\n';
  periods = info.routine[day]._periods;
  teachers = info.routine[day]._teachers;

  var i = 0;
  while (periods[i] != "end") {
    msg += periods[i] + '\t' + '|' + teachers[i] + '\n';
    i++;
  }
  msg += '```';

  message.channel.send(msg);
}

function howYou(message) {
  const taggedUser = message.mentions.users.first();
  switch (today.getDay()) {
    case 1:
      message.channel.send(`Feeling real depressed, what did you expect, ${message.author.username}? Its a Monday :unamused:`)
      break;
    default:
      message.channel.send(`I'm feeling particularly routine-ly this ${info.days[today.getDay()]}, ${message.author.username} :stuck_out_tongue_winking_eye:!\n Now go f yourself.`);
  }
}
