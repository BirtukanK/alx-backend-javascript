const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log('Welcome to Holberton School, what is your name?\n');

rl.on('line', (INPUT) => {
  console.log(`Your name is: ${INPUT.trim()}`);
  rl.close();
});

rl.on('close', () => {
  console.log('This important software is now closing\n');
  process.exit(0);
});
