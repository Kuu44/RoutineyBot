module.exports = {
  name: 'setchannel',
  args: false,
  description: 'Logs the channel from which message is sent (dev Only)',
  execute(message, args) {
    console.log('Channel:'+message.channel.id+'\n');
    console.log('ServerId: '+message.guild.id);
  }
};
