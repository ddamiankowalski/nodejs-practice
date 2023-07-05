const net = require('node:net');

const options = {
    host: 'www.google.com',
    port: 443
};

const socket = net.connect(options, () => {
    console.log('Connected to a server');

    const request = 'GET / HTTP/1.1\r\n' +
        'Host: localhost\r\n' +
        'Connection: close\r\n' +
        '\r\n';
    
    socket.write(request);
});

socket.on('data', (data) => {
  console.log('Received data:', data.toString());
});