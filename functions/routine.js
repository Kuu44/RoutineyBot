const axios = require('axios');
async function getRoutine(serverId){
  const response = await axios.get("https://dash.unimy.live/api/v1/bot/?api_key=fhalskdhafiuweehrbfhalskdhaf");
  return {[serverId]:response.data};
}
module.exports.getRoutine = getRoutine;