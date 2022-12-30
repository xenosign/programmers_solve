// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/120814

function solution(n) {
  let answer = 0;
  answer = Math.ceil(n / 7);
  return answer;
}

const TC1 = 7;

console.log(solution(TC1));
