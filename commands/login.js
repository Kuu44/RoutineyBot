const axios = require('axios')
module.exports = {
  name: "login",
  args: false,
  description: "Checking for the owner of server!",
  execute: async (message, args) => {
    const keyEmbed = require('../functions/keyEmbed.js');
    if (message.author.id == message.guild.ownerID) {
      const {data} = await axios.get("https://dash.unimy.live/api/v1/serveridtokey/?serverId=ahsdfkahsdyr3");
      message.channel.send(`Hello, ${message.author} !! Check your dm `);
      message.author.send(keyEmbed(`${data.api_key}`, message));
    } else {
      message.channel.send(
        ` Sorry, ${message.author} You are not the owner of the server !`
      );
    }
  },
};
