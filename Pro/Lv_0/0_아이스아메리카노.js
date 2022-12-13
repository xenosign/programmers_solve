// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/120819

function solution(money) {
  let answer = []; 
  
  answer.push(Math.floor(money / 5500));
  answer.push(money % 5500);

  return answer;
}

// @ts-ignore
const testCase = 15000;

console.log('sol', solution(testCase));
