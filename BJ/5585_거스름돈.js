// @ts-check
// https://www.acmicpc.net/problem/5585

// const money = parseInt(require("fs").readFileSync("/dev/stdin").toString());

let change = 1000 - money;
let count = 0;

while (change !== 0) {
  if (change >= 500) {
    change -= 500;
    count += 1;
    continue;
  }

  if (change >= 100) {
    change -= 100;
    count += 1;
    continue;
  }

  if (change >= 50) {
    change -= 50;
    count += 1;
    continue;
  }

  if (change >= 10) {
    change -= 10;
    count += 1;
    continue;
  }

  if (change >= 5) {
    change -= 5;
    count += 1;
    continue;
  }

  if (change >= 1) {
    change -= 1;
    count += 1;
    continue;
  }
}

console.log(count);
