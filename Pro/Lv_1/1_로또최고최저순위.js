// https://school.programmers.co.kr/learn/courses/30/lessons/77484

// 내 풀이
function solution(lottos, winNums) {
  const answer = [];
  let hits = 0;

  const lostNumCount = lottos.filter((v) => v === 0).length;

  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] !== 0 && winNums.indexOf(lottos[i]) !== -1) hits++;
  }

  const lowRank = 7 - (hits < 2 ? 1 : hits);
  const highRank = 7 - (hits + lostNumCount < 2 ? 1 : hits + lostNumCount);

  answer.push(highRank);
  answer.push(lowRank);

  return answer;
}

const picks = [44, 1, 0, 0, 31, 25];
const wins = [31, 10, 45, 1, 6, 19];

console.log(solution(picks, wins));
