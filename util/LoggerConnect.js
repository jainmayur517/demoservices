const axios = require('axios');
require('dotenv').config()

const urlLogger='http://localhost:3000/log';

const serviceName=process.env.Service_Name;
module.exports= class loggerDetail{

static async logInfo(req){
  const level=`info`;
  const ipUser=req.socket.localAddress;
    const host = req.headers.host;
    const route = req.url;
    const sender = req.headers['user-agent'];
    const message={ipUser, host, route, sender, serviceName };

  axios.post(urlLogger, {
    level,
    message
  })
  .then(response => {
    console.log(response.data.message);
  })
  .catch(error => {
    console.error(error);
  });

}


  static async logError(error){
    const level=`error`;
   let err= error.toString();
   const message={err,serviceName};

    axios.post(urlLogger, {
      level,
      message
      
    })
    .then(response => {
      console.log(response.data.message);
    })
    .catch(error => {
      console.error(error);
    });

}

}
