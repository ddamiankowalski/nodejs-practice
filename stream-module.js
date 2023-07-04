const fs = require("node:fs");
const process = require("node:process");

const readableStream = fs.createReadStream('./assets/stream-input.txt', {
    encoding: 'utf-8'
});

readableStream.on('data', (chunk) => {
    console.log(chunk);
});

const writableStream = fs.createWriteStream('./assets/stream-input2.txt');

(async () => {
    for (let i = 0; i < 1e5; i++) {
        console.log(writableStream.write('Hello world!\n' + 1))
    }
})()