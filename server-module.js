const http = require("node:http");

const server = http.createServer((req, res) => {
    console.log(req, res);
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('The response has ended');
});

server.listen(8080, () => {
    console.log('Server is running')
});