// by Alexander Nikolskiy

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  terminal: false,
});

process.stdin.setEncoding("utf8");
rl.on("line", readLine);

function readLine(line) {
  if (line !== "\n") {
    const n = parseInt(line.toString().split(" ")[0], 10);
    const m = parseInt(line.toString().split(" ")[1], 10);

    console.log(getFibMod(n, m));
    process.exit();
  }
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

function getFibMod(n, m) {
  const a = fib(n);
  const b = fib(m);
  const c = a % b;
  console.log(a, b);
  return c;
}

module.exports = getFibMod;
