// // 내 풀이
// function solution(arr) {
//   let answer = 0;

//   const Len = arr.length;

//   for (let i = 0; i < Len; i++) {
//     for (let j = 0; j < Len; j++) {
//       const left = j - 1 === -1 ? 0 : arr[i][j - 1];
//       const right = j + 1 === Len ? 0 : arr[i][j + 1];
//       const top = i - 1 === -1 ? 0 : arr[i - 1][j];
//       const bot = i + 1 === Len ? 0 : arr[i + 1][j];

//       if (
//         arr[i][j] < left ||
//         arr[i][j] < right ||
//         arr[i][j] < top ||
//         arr[i][j] < bot
//       ) {
//         continue;
//       }

//       answer++;
//     }
//   }

//   return answer;
// }

// 수업 풀이
function solution(arr) {
  let answer = 0;
  const n = arr.length;
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let flag = 1;
      for (let k = 0; k < dx.length; k++) {
        const nx = i + dx[k];
        const ny = j + dy[k];

        if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] > arr[i][j]) {
          flag = 0;
          break;
        }
      }
      if (flag) answer++;
    }
  }
  return answer;
}

const ex = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(ex));
