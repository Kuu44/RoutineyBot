module.exports = {
  name: 'tomorrow',
  args: false,
  description: 'The bread and butter of Routiney but for the future!',
  execute(message, args) {
    const msgCreate = require('../functions/post.js');
    const postEmbed = require('../functions/postEmbed.js');
    var today = new Date();
    const day = today.getDay() + 1;

    const msg = msgCreate(day);
    postEmbed(day, message, msg, 'Tomorrow\'s Classes:');
  },
};
