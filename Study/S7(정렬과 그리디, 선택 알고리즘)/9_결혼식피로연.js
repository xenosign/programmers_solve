// // 내 풀이
// // 동적 프로그래밍으로 구함
// function solution(arr) {
//   let answer = 0;

//   let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     answer = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (i === j) continue;
//       if (arr[j][1] > arr[i][0] && arr[j][0] < arr[i][1]) {
//         answer++;
//       }
//     }
//     max = Math.max(answer, max);
//   }

//   return max;
// }

// 수업 풀이
// 그리디 프로그래밍으로 구함
// 각 사람의 시작시간(st), 끝시간(et)를 나눈 다음 시간의 흐름에 따라서
// st 가 있으면 cnt + 1, et 가 있으면 cnt - 1 을 하고 cnt 의 max 를 구함
// 해당 배열을 정렬 하는데 시간 순으로 표현하기 위해서 시간으로 정렬하고 시간이 같을 경우
// 나간 사람은 빼고 해야하므로 e 가 먼저 오도록 정렬한 다음 시간 순으로 세어 나감
function solution(arr) {
  let answer = 0;

  let timeLine = [];

  for (const x of arr) {
    timeLine.push([x[0], 's']);
    timeLine.push([x[1], 'e']);
  }

  timeLine.sort((a, b) => {
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    return a[0] - b[0];
  });

  let cnt = 0;
  for (const x of timeLine) {
    if (x[1] === 's') cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }

  return answer;
}

const tc = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];

console.log(solution(tc));
