// // 내 풀이
// // 선택 정렬로 노가다
// function solution(arr) {
//   const answer = arr.slice();

//   let idx = 0;
//   for (let i = 0; i < answer.length - 1; i++) {
//     idx = i;
//     for (let j = i + 1; j < answer.length; j++) {
//       if (answer[j][0] < answer[idx][0]) idx = j;
//     }
//     [answer[i], answer[idx]] = [answer[idx], answer[i]];
//   }

//   for (let i = 0; i < answer.length - 1; i++) {
//     idx = i;
//     for (let j = i + 1; j < answer.length; j++) {
//       if (answer[j][0] === answer[idx][0] && answer[j][1] < answer[idx][1]) {
//         idx = j;
//       }
//     }
//     [answer[i], answer[idx]] = [answer[idx], answer[i]];
//   }

//   return answer;
// }

// 수업 풀이
// sort 의 리턴 조건을 걸어서 깔끔하게 처리
function solution(arr) {
  const answer = arr.slice();

  // 리턴의 참-거짓 여부에 따라 스왑이 일어남
  answer.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    return a[0] - b[0];
  });

  return answer;
}

const tc = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];

console.log(solution(tc));
