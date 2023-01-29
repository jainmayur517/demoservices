const http = require('http');
const loggerDetail = require('./util/LoggerConnect');

const server = http.createServer((req, res) => {
      loggerDetail.logInfo(req);

});

// try {
//     console.log(a==b)
// } catch (err) {
//     loggerDetail.logError('error',err)
// }

process.on('uncaughtException', async (err) => {
    console.error('Uncaught Exception: ', err);
    await loggerDetail.logError(err)
    process.exit(1);
  });
  
server.listen(8000);




// const kafka = require('kafka-node');
// const client = new kafka.KafkaClient({ zookeeper: 'localhost:2181' });

// const producer = new kafka.Producer(client);

// producer.on('ready', function() {
//   console.log("Producer is ready");
//   producer.send([{ topic: 'test', messages: 'Hello Kafka' }], function (err, data) {
//     if(err)
//     console.log(err)
//     else{
//     console.log(`hiiiiii`)
//     console.log(data);
//     }
//   });
// });

// producer.on('error', function(err) {
//   console.log("Producer is in error state");
//   console.log(err);
// })

// console.log("trying")


// const consumer = new kafka.Consumer(client, [{ topic: 'test', partition: 0 }], {
//     autoCommit: true
//   });
//   consumer.on('message', function (message) {
//     console.log(message);
//   });