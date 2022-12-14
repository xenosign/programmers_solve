// @ts-check
// https://www.acmicpc.net/problem/17427
// https://mine-it-record.tistory.com/523

// const input = require('fs').readFileSync('./dev/stdin').toString().trim();
// const num = parseInt(input, 10);
// let sum = 0;

const num = 2;
let sum = 0;
for (let i = 1; i <= num; i++) {
  sum += i * Math.floor(num / i);
}

console.log(sum);
