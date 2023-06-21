// // 내 풀이
// function solution(N, arr) {
//   let answer = 0;
//   const totalRankArr = [];

//   for (let i = 1; i <= N; i++) {
//     const rankArr = [];
//     for (let j = 0; j < arr.length; j++) {
//       rankArr.push(arr[j].findIndex((el) => el === i) + 1);
//     }
//     totalRankArr.push(rankArr);
//   }

//   let flag = true;

//   for (let i = 0; i < N; i++) {
//     for (let j = i + 1; j < N; j++) {
//       flag = true;
//       for (let k = 0; k < totalRankArr[i].length; k++) {
//         if (totalRankArr[i][k] < totalRankArr[j][k]) {
//           flag = false;
//         }
//       }
//       if (flag) answer++;
//     }
//   }

//   return answer;
// }

// 수업 풀이
function solution(N, arr) {
  let answer = 0;

  const M = arr.length;

  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= M; j++) {
      let cnt = 0;
      for (k = 0; k < M; k++) {
        let pi = 0;
        let pj = 0;
        for (let l = 0; l < N; l++) {
          if (arr[k][l] === i) pi = l;
          if (arr[k][l] === j) pj = l;
        }
        if (pi < pj) cnt++;
      }
      if (cnt === M) answer++;
    }
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
