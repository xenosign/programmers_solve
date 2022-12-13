// @ts-nocheck
// https://school.programmers.co.kr/learn/courses/30/lessons/140108

function solution(s) {
  let answer = 0;
  let firstLetter = '';
  let firstLetterCount = 0;
  let theOtherCount = 0;
  let flag = true;
  const sArr = [...s];

  for (let i = 0; i < sArr.length; i++) {
    if (flag) {
      firstLetter = sArr[i];
      flag = false;
    }

    // eslint-disable-next-line no-unused-expressions
    firstLetter === sArr[i] ? firstLetterCount++ : theOtherCount++;

    if (firstLetterCount === theOtherCount) {
      flag = true;
      firstLetterCount = 0;
      theOtherCount = 0;
      answer++;
    }

    if (i === sArr.length - 1 && firstLetterCount > theOtherCount) answer++;
  }

  return answer;
}

const testCase = 'abracadabra';

console.log('sol', solution(testCase));
