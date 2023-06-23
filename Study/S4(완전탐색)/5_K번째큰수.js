// // 내 풀이
// // 중복 제거가 안됨
// function solution(nums) {
//   let answer = 0;

//   const sumArr = [];

//   for (let i = 0; i < nums.length - 3; i++) {
//     for (let j = i + 1; j < nums.length - 2; j++) {
//       for (let k = j + 1; k < nums.length; k++) {
//         sumArr.push(nums[i] + nums[j] + nums[k]);
//       }
//     }
//   }

//   const sorted = sumArr.sort((a, b) => b - a);

//   answer = sorted[2];

//   return answer;
// }

// 수업 풀이
// Set 을 활용하여 중복을 제거
function solution(nums) {
  let answer = 0;

  const len = nums.length;

  const sumSet = new Set();

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        sumSet.add(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  const sumArr = Array.from(sumSet).sort((a, b) => b - a);
  answer = sumArr[2];

  return answer;
}

const nums = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(nums));
