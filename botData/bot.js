// require the discord.js module
const fs = require('fs');
const Discord = require('discord.js');
const {
  prefix,
  token
} = require('./auth.json');

// Initialize Discord Bot
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
  const command = require(`./commands/${file}`);

  //setting a new item in the collection
  bot.commands.set(command.name, command);
}

//Bot commands
bot.once('ready', () => { //Only triggers once after logging in
  console.log('Ready!');
});

bot.login(token);

bot.on('message', message => {
  //logs everything typed
  console.log(message.content);

  if (!message.content.startsWith(prefix) && message.author.bot) return;

  var args = message.content.slice(prefix.length).trim().split(/ +/);
  var command = args.shift().toLowerCase();

  if(!bot.commands.has(command)) return;
  try{
    bot.commands.get(command).execute(message,args);
  }
  catch(error){
    console.error(error);
    message.reply('there was an error trying to exexute that command!');
  }
});

function showRoutine(day, message) {

}
