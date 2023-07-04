const path = require("node:path");

const joinedPath = path.resolve(__dirname, __filename);
console.log(joinedPath);

const parsedPath = path.parse(joinedPath);
console.log(parsedPath);