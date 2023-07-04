const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter your age', (answer) => {
  console.log(`Your age is ${answer}`);

  rl.close();
});