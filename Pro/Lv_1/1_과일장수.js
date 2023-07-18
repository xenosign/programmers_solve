// https://school.programmers.co.kr/learn/courses/30/lessons/135808

function solution(k, m, score) {
  let answer = 0;

  score.sort((a, b) => b - a);

  for (let i = m - 1; i < score.length; i += m) {
    answer += score[i] * m;
  }

  return answer;
}

// const max = 3;
// const box = 4;
// const score = [1, 2, 3, 1, 2, 3, 1];

const max = 4;
const box = 3;
const score = [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2];

console.log(solution(max, box, score));
