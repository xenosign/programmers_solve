// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/120909
function solution(n) {
  return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}

console.log('sol', solution(10));
