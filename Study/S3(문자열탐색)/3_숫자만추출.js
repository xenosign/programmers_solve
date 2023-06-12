// 내 풀이
function solution(str) {
  let answer = 0;

  const numStr = str.match(/[0-9]/g).join('');
  answer = Number(numStr);

  return answer;
}

const ex = 'g0en2T0s8eSoft';

console.log(solution(ex));
