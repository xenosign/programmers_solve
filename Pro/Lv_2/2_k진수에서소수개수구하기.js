// https://school.programmers.co.kr/learn/courses/30/lessons/92335

function solution(n, k) {
  let answer = 0;

  const binStr = n.toString(k);

  const numArr = binStr
    .split('0')
    .filter((el) => el !== '1')
    .map((v) => Number(v));

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] === 2) {
      answer++;
      continue;
    } else {
      const sqrt = Math.floor(Math.sqrt(numArr[i]));
      for (let j = 2; j <= sqrt + 1; j++) {
        if (numArr[i] % j === 0) break;
        else if (j === sqrt + 1) answer++;
      }
    }
  }

  return answer;
}

const num = 437674;
const binary = 3;
// const num = 110011;
// const binary = 10;

console.log(solution(num, binary));
