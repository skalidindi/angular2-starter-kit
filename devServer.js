'use strict'
const httpServer = require('http-server');

let cache = -1;
const server = httpServer.createServer({
  root: './',
  cache: cache,
  robots: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
});

require('chokidar-socket-emitter')({app: server.server});

server.listen(8080);
