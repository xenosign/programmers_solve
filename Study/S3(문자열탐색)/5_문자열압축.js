// // 내 풀이
// function solution(str) {
//   let answer = '';
//   let count = 1;
//   let flagLetter = '';

//   for (let i = 0; i < str.length; i++) {
//     if (flagLetter !== str[i]) {
//       answer += str[i];
//       flagLetter = str[i];
//       for (let j = i + 1; j < str.length; j++) {
//         if (str[i] === str[j]) count++;
//       }
//       if (count > 1) {
//         answer += String(count);
//         count = 1;
//       }
//     }
//   }

//   return answer;
// }

// 수업 풀이
function solution(str) {
  let answer = '';
  let cnt = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      cnt++;
    } else {
      answer += str[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }

  return answer;
}

const ex = 'KKHSSSSSE';

console.log(solution(ex));
