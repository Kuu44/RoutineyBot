const express = require('express');
const server=express();

server.all('/',(req,res)=>{
  res.send('Server activated.')
});
function keepAlive(){
  server.listen(3000,()=>{console.log("Server ready to use!")});
}

module.exports=keepAlive;