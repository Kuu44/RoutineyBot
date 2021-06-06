const axios = require('axios');
async function getRoutine(serverId){
  console.log(serverId);
  const response = await axios.get(`https://dash.unimy.live/bot/?secret_key=${process.env.secret_key}&serverId=${serverId}`);
  return {[serverId]:response.data};
}
module.exports.getRoutine = getRoutine;
