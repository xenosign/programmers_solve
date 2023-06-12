// // 내 풀이
// function solution(str) {
//   let answer = 'YES';

//   const lowerCaseStr = str.toLowerCase();
//   const strArr = lowerCaseStr.split('');

//   const len = strArr.length;
//   const halfLen = len / 2;
//   const n = Math.floor(halfLen / 2);

//   for (let i = 0; i < n; i++) {
//     if (strArr[i] !== strArr[len - i - 1]) {
//       answer = 'NO';
//       break;
//     }
//   }

//   return answer;
// }

// // 수업 풀이 1
// function solution(str) {
//   const answer = 'YES';

//   const strToLower = str.toLowerCase();

//   const len = strToLower.length;

//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     if (strToLower[i] !== strToLower[len - i - 1]) return 'NO';
//   }

//   return answer;
// }

// 수업 풀이 2
function solution(str) {
  let answer = 'YES';

  const strToLower = str.toLowerCase();

  const strToReverse = strToLower.split('').reverse().join('');

  if (strToReverse !== strToLower) answer = 'NO';

  return answer;
}

const ex = 'googGOOg';

console.log(solution(ex));
