// @ts-check
// https://www.acmicpc.net/problem/17427

// const input = require('fs').readFileSync('dev/stdin').toString().split('\n');
// const numArr = input[1].split(' ');

const minNum = Math.min(...numArr);
const maxNum = Math.max(...numArr);

console.log(minNum * maxNum);
