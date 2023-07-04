const fs = require("node:fs/promises");

async function readFile() {
    const data = await fs.readFile("./assets/pizza-shops.json");
    console.log(data);
}

async function deleteItem(name) {
    await fs.rm(name)
}

async function copyItem(from, dest) {
    await fs.cp(from, dest)
    return 'copied';
}

readFile();

copyItem('./assets/pizza-shops.json', './assets/cp-pizza-shop.json')
    .then((info) => {
        console.log(info);
        deleteItem('./assets/cp-pizza-shop.json');
    });

