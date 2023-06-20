// 내 풀이
function solution(N, arr) {
  let answer = 0;
  const totalRankArr = [];

  for (let i = 1; i <= N; i++) {
    const rankArr = [];
    for (let j = 0; j < arr.length; j++) {
      rankArr.push(arr[j].findIndex((el) => el === i) + 1);
    }
    totalRankArr.push(rankArr);
  }

  let flag = true;

  console.log(totalRankArr);

  // 배열 완성, 배열 완전 탐색 준비
  for (let i = 0; i < totalRankArr.length; i++) {
    for (let j = 0; j < totalRankArr[i].length; j++) {
      for (let k = 0; k < totalRankArr.length; k++) {
        if (i === k) continue;
        if (totalRankArr[i][j] < totalRankArr[k][j]) {
          console.log(i, j, k, totalRankArr[i][j], totalRankArr[k][j]);
          flag = false;
        }
      }
    }
    if (flag) answer++;
  }

  return answer;
}
const N = 4;
const ex = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(N, ex));
