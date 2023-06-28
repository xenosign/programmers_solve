// https://school.programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  const answer = [];

  const failRatioArr = [];
  let candidateNum = stages.length;
  let failCount = 0;

  for (let i = 1; i <= N; i++) {
    failCount = stages.filter((el) => el === i).length;
    if (candidateNum !== 0) {
      failRatioArr.push(failCount / candidateNum);
    } else {
      failRatioArr.push(0);
    }
    candidateNum -= failCount;
  }

  let max = 0;
  let maxIdx = 0;

  for (let i = 0; i < failRatioArr.length; i++) {
    max = Math.max(...failRatioArr);
    maxIdx = failRatioArr.indexOf(max);
    failRatioArr[maxIdx] = -1;
    answer.push(maxIdx + 1);
  }

  return answer;
}

const totalStages = 2;
// const tc = [2, 1, 2, 6, 2, 4, 3, 3];
const tc = [1, 1, 1, 1];

console.log('sol', solution(totalStages, tc));
