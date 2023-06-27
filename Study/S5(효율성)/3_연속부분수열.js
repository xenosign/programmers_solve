// // 내 풀이
// function solution(arr, target) {
//   let answer = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let tmpSum = arr[i];
//     for (let j = i; j < arr.length; j++) {
//       tmpSum += arr[j];
//       if (tmpSum === target) {
//         answer++;
//         break;
//       } else if (tmpSum > target) {
//         break;
//       }
//     }
//   }

//   return answer;
// }

// 수업 풀이
function solution(arr, target) {
  let answer = 0;

  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === target) answer++;

    while (sum > target) {
      sum -= arr[lt++];
      if (sum === target) answer++;
    }
  }

  return answer;
}

const arr = [1, 2, 1, 3, 1, 1, 1, 2];
const target = 6;

console.log(solution(arr, target));
