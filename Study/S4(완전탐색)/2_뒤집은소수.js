// // 내 풀이
// function solution(nums) {
//   const answer = [];

//   for (let i = 0; i < nums.length; i++) {
//     const reversNum = Number(nums[i].toString().split('').reverse().join(''));
//     let flag = true;
//     for (let j = 2; j < reversNum; j++) {
//       if (reversNum % j === 0) {
//         flag = false;
//         break;
//       }
//     }

//     if (flag && reversNum !== 1) answer.push(reversNum);
//   }

//   return answer;
// }

// 수업 풀이
function solution(nums) {
  const answer = [];

  function isPrime(num) {
    if (num === 1) return false;
    for (let i = 2; i < Math.floor(num / 2); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  for (let i = 0; i < nums.length; i++) {
    let reverse = 0;
    let x = nums[i];
    while (x) {
      const reminder = x % 10;
      reverse = reverse * 10 + reminder;
      x = Math.floor(x / 10);
    }

    if (isPrime(reverse)) answer.push(reverse);
  }

  return answer;
}

const ex = [32, 55, 62, 20, 250, 370, 200, 30, 100];

console.log(solution(ex));
