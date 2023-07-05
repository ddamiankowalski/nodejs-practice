const fs = require("node:fs");
const zlib = require("node:zlib");

const readableStream = fs.createReadStream('./assets/stream-input.txt', { 
    encoding: 'utf-8'
});
 
const writableStream = fs.createWriteStream('./assets/piped-stream.txt.gz');

readableStream.pipe(zlib.createGzip()).pipe(writableStream);

