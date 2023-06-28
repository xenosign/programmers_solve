// // 내 풀이
// function solution(k, sailLog) {
//   let answer = 0;
//   let sum = 0;
//   let max = 0;

//   for (let i = 0; i < sailLog.length - k; i++) {
//     for (let j = i; j < i + k; j++) {
//       sum += sailLog[j];
//     }
//     if (sum > max) {
//       max = sum;
//       answer = sum;
//     }
//     sum = 0;
//   }

//   return answer;
// }

// // 강의 내용을 들은 내 코드
// // k 가 변할 때 대처를 못함
// function solution(k, sailLog) {
//   let sum = 0;
//   let max = 0;

//   for (let i = 0; i < sailLog.length - 3; i++) {
//     if (i === 0) {
//       sum = sailLog[i] + sailLog[i + 1] + sailLog[i + 2];
//     } else {
//       sum = sum - sailLog[i - 1] + sailLog[i + 2];
//     }
//     if (sum > max) {
//       max = sum;
//     }
//   }

//   return max;
// }

// 강의 코드
function solution(k, sailLog) {
  let answer = 0;
  let sum = 0;

  for (let i = 0; i < k; i++) {
    sum += sailLog[i];
  }
  answer = sum;

  for (let i = k; i < sailLog.length; i++) {
    sum += sailLog[i] - sailLog[i - k];
    answer = Math.max(sum, answer);
  }

  return answer;
}

const tc = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution(3, tc));
