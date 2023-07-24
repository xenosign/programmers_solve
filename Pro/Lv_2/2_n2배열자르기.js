// https://school.programmers.co.kr/learn/courses/30/lessons/87390

function solution(n, left, right) {
  const answer = [];

  for (let i = left; i <= right; i++) {
    const row = Math.floor(i / n) + 1;
    const col = (i % n) + 1;

    answer.push(Math.max(row, col));
  }

  return answer;
}

const n = 3;
const left = 2;
const right = 5;

console.log(solution(n, left, right));
