// by Alexander Nikolskiy

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  console.log(fibBig(parseInt(line, 10)));
  process.exit();
}

function fib(n) {
  if (n <= 0) return 0;
  else if (n === 1) return 1;
  const numbers = new Array(n + 1);
  numbers[0] = 0;
  numbers[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    numbers[i] = numbers[i - 1] + numbers[i - 2];
  }
  return numbers[n];
}

function fibBig(n) {
  if (n <= 0) return 0;
  else if (n === 1) return 1;
  const numbers = new Array(n + 1);
  numbers[0] = 0;
  numbers[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    numbers[i] = (numbers[i - 1] + numbers[i - 2]) % 10;
  }
  return numbers[n];
}

module.exports = fibBig;
