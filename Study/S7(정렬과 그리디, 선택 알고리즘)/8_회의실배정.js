// // 내 풀이
// // 시작 시간이 빠른 순서대로 정렬을 해야만 정확하게 작동
// function solution(arr) {
//   let answer = 0;

//   let max = 0;
//   let idx = 0;

//   arr.sort((a, b) => a[0] - b[0]);

//   for (let i = 0; i < arr.length - 1; i++) {
//     answer = 1;
//     idx = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[idx][1] <= arr[j][0]) {
//         answer++;
//         idx = j;
//       }
//     }
//     max = Math.max(answer, max);
//   }

//   return max;
// }

// 수업 풀이
// 끝 시간을 기준으로 정렬 & 같으면 시작 시간이 더 빠른걸로 정렬
// et 끝나는 시간을 도입하고, 정렬된 것에서 시작시간이 빠른 애들을 넣고 et 변경
function solution(arr) {
  let answer = 0;

  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  let et = 0;
  for (const x of arr) {
    if (x[0] >= et) {
      answer++;
      et = x[1];
    }
  }

  return answer;
}

const tc = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
// const tc = [
//   [3, 3],
//   [1, 3],
//   [2, 3],
// ];

console.log(solution(tc));
