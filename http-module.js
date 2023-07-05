const http = require("node:http");

const agent = new http.Agent({
    keepAlive: true,
    host: 'localhost',
    port: 80,
    path: '/'
});

const createConnection = agent.createConnection;
console.log('Connection added...');

console.log(http.STATUS_CODES);