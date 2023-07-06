// https://school.programmers.co.kr/learn/courses/30/lessons/17687

function solution(n, t, m, p) {
  let answer = '';

  let num = 0;
  let arithmeticStr = '';

  while (arithmeticStr.length <= m * t + p) {
    arithmeticStr += num.toString(n);
    num++;
  }

  let idx = 0;
  while (answer.length < t) {
    answer += arithmeticStr[idx * m + p - 1];
    idx++;
  }

  return answer.toUpperCase();
}

const n = 16;
const t = 16;
const m = 2;
const p = 1;

console.log(solution(n, t, m, p));
