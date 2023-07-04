const fs = require("node:fs");
const fsPromise = require("node:fs/promises");

fs.watch('./assets/pizza-shops.json', (eventType, filename) => {
    console.log(eventType, filename);
    console.log(__dirname);
});

setTimeout(() => {
    fs.writeFileSync('./assets/pizza-shops.json', 'hello world');
}, 1000);

async function readFile() {
    const data = await fsPromise.readFile("./assets/pizza-shops.json");
    console.log(data);
}

async function deleteItem(name) {
    await fsPromise.rm(name)
}

async function copyItem(from, dest) {
    await fsPromise.cp(from, dest)
    return 'copied';
}

readFile();

copyItem('./assets/pizza-shops.json', './assets/cp-pizza-shop.json')
    .then((info) => {
        console.log(info);
        deleteItem('./assets/cp-pizza-shop.json');
    });