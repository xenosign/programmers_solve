// @ts-nocheck
// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  let answer = 0;

  const tangerineSet = new Set(tangerine);
  const uniqueTangerineArr = [...tangerineSet];
  const answerArr = [];

  for (let i = 0; i < uniqueTangerineArr.length; i++) {
    const tempArr = tangerine.filter((el) => el === uniqueTangerineArr[i]);
    answerArr.push(tempArr.length);
  }

  answerArr.sort((a, b) => b - a);

  console.log(answerArr);

  let sum = 0;
  for (let i = 0; i < answerArr.length; i++) {
    sum += answerArr[i];
    answer++;
    if (sum > k) {
      break;
    }
  }

  return answer;
}

const testCase = [1, 1, 1, 1, 2, 2, 2, 3];

console.log('sol', solution(1, testCase));
