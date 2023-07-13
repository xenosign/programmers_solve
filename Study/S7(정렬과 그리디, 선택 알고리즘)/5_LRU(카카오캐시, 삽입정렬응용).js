// 내 풀이
function solution(size, arr) {
  const answer = [];

  const copyArr = arr;

  for (let i = 0; i < copyArr.length; i++) {
    if (i < size) answer.unshift(copyArr[i]);
    else if (answer.indexOf(copyArr[i]) !== -1) {
      answer.unshift(copyArr[i]);
      answer.splice(answer.indexOf(copyArr[i]), 1);
    } else {
      answer.unshift(copyArr[i]);
      answer.pop();
    }
  }

  return answer;
}

const cacheSize = 5;
const tc = [1, 2, 3, 2, 6, 2, 3, 5, 7];

console.log(solution(cacheSize, tc));
