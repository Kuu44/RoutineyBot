module.exports = {
  name: "test",
  args: false,
  description: "api testing",
  dontShow: true,
  execute: async (message, args) => {
    const axios = require('axios');
    const { getRoutine } = require("../functions/routine.js");
    const info = await getRoutine(message.guild.id)
      console.log(info[message.guild.id].routine[0]);

  }
};
