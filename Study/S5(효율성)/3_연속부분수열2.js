// // 내 풀이
// function solution(arr, limit) {
//   let answer = 0;

//   let lt = 0;
//   let sum = 0;

//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     if (sum < limit) answer++;
//     if (rt !== 0 && arr[rt] <= limit) answer++;

//     while (sum >= limit) {
//       sum -= arr[lt++];
//       if (sum <= limit) answer++;
//     }
//   }

//   return answer;
// }

// 수업 풀이
function solution(arr, limit) {
  let answer = 0;

  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum > limit) {
      sum -= arr[lt++];
    }
    answer += rt - lt + 1;
  }

  return answer;
}

const arr = [1, 3, 1, 2, 3];
const limit = 5;

console.log(solution(arr, limit));
