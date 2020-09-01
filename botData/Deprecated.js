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
