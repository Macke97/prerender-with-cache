const prerender = require('prerender');
const server = prerender({ port: 9000 });
server.use(require('prerender-memory-cache'));
server.start();
