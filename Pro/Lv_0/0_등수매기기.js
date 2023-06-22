// https://school.programmers.co.kr/learn/courses/30/lessons/120882

// // 내 풀이
// function solution(score) {
//   const answer = [];
//   const avgScoreArr = [];

//   for (let i = 0; i < score.length; i++) {
//     let avg = 0;
//     for (let j = 0; j < score[i].length; j++) {
//       avg += score[i][j];
//     }
//     avgScoreArr.push(avg / 2);
//   }

//   const sortedAvgScoreArr = [...avgScoreArr].sort((a, b) => b - a);

//   let rank = 0;
//   for (let i = 0; i < avgScoreArr.length; i++) {
//     rank = sortedAvgScoreArr.findIndex((el) => el === avgScoreArr[i]) + 1;
//     answer.push(rank);
//   }

//   return answer;
// }

// 배열 내장 함수 풀이
function solution(score) {
  const avg = score.map((v) => (v[0] + v[1]) / 2);
  const sorted = avg.slice().sort((a, b) => b - a);
  return avg.map((v) => sorted.indexOf(v) + 1);
}

const ex = [
  [80, 70],
  [70, 80],
  [30, 50],
  [90, 100],
  [100, 90],
  [100, 100],
  [10, 30],
];

console.log(solution(ex));
