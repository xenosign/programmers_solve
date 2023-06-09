// 내 풀이
function solution(str) {
  let answer = 'YES';

  const lowerCaseStr = str.toLowerCase();
  const strArr = lowerCaseStr.split('');

  const len = strArr.length;
  const halfLen = len / 2;
  const n = Math.floor(halfLen / 2);

  for (let i = 0; i < n; i++) {
    if (strArr[i] !== strArr[len - i - 1]) {
      answer = 'NO';
      break;
    }
  }

  return answer;
}

const ex = 'googGOOd';

console.log(solution(ex));
