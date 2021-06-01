module.exports = {
    name: 'currentroutine',
    args: false,
    dontShow: true,
    description: 'shows the current accessed routine object',
    execute: async (message, args) => {
      const axios = require('axios');
      const { getRoutine } = require("../functions/routine.js");
      var info = await getRoutine(message.guild.id);
      info = info[message.guild.id];

      console.log(`Current server id: ${message.guild.id}`);
      console.log(info);
    }
  };
