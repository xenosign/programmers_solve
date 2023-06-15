// // 내 풀이
// function solution(nums) {
//   let answer = 0;
//   const ditgitSumArr = [];

//   for (let i = 0; i < nums.length; i++) {
//     const digit = String(nums[i]).length;
//     let digitSum = 0;
//     for (let j = 0; j < digit; j++) {
//       digitSum += Number(String(nums[i])[j]);
//     }
//     ditgitSumArr.push(digitSum);
//   }

//   const maxDigitSum = Math.max(...ditgitSumArr);
//   const maxDigitSumIdxArr = [];
//   for (let i = 0; i < ditgitSumArr.length; i++) {
//     if (maxDigitSum === ditgitSumArr[i]) maxDigitSumIdxArr.push(i);
//   }

//   const maxSumNum = [];

//   for (let i = 0; i < maxDigitSumIdxArr.length; i++) {
//     maxSumNum.push(nums[maxDigitSumIdxArr[i]]);
//   }

//   const max = Math.max(...maxSumNum);
//   answer = nums.find((el) => el === max);

//   return answer;
// }

// 수업 풀이
function solution(nums) {
  let answer = 0;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    let tmp = nums[i];

    // 수업 풀이 1, 숫자로 처리
    // while (tmp) {
    //   sum += tmp % 10;
    //   tmp = Math.floor(tmp / 10);
    // }

    // 수업 풀이 2, 문자로 처리
    sum = nums[i]
      .toString()
      .split('')
      .reduce((acc, cur) => acc + Number(cur), 0);

    if (sum > max) {
      max = sum;
      answer = nums[i];
    } else if (max === sum) {
      if (nums[i] > answer) answer = nums[i];
    }
  }

  return answer;
}

const ex = [128, 460, 603, 40, 521, 137, 123];

console.log(solution(ex));
