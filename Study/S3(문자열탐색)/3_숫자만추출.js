// // 내 풀이
// function solution(str) {
//   let answer = 0;

//   const numStr = str.match(/[0-9]/g).join('');
//   answer = Number(numStr);

//   return answer;
// }

// 수업 풀이
function solution(str) {
  let answer = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) answer += str[i];
  }

  return parseInt(answer);
}

const ex = 'g0en2T0s8eSoft';

console.log(solution(ex));
