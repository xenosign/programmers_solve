// https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  let answer = [];

  let x = 0;
  let y = 0;
  let sum = 0;

  for (let i = 1; i <= yellow; i++) {
    if (!Number.isInteger(yellow / i)) continue;

    x = yellow / i + 2;
    y = i + 2;

    sum = i * 2 + x * 2;

    if (sum === brown) {
      answer = [x, y];
      break;
    }
  }

  return answer;
}

const brown = 24;
const yellow = 24;

console.log(solution(brown, yellow));
