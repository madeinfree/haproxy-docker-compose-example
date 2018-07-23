const cluster = require('cluster');
const express = require('express');
const app = express();

if (cluster.isMaster) {
  for (let i = 0; i < 8; i++) {
    cluster.fork();
  }
} else {
  app.get('/', (req, res) => {
    console.log('connection in');
    res.status(200).send('OK');
  });

  app.listen(9000 + (cluster.worker.id - 1), () =>
    console.log(`port ${9000 + (cluster.worker.id - 1)}`)
  );
}
