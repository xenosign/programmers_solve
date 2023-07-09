// https://school.programmers.co.kr/learn/courses/30/lessons/120808

function solution(numer1, denom1, numer2, denom2) {
  const answer = [];

  const denominator = denom1 * denom2;
  const numerator = numer1 * denom2 + numer2 * denom1;
  const denominatorArr = [];
  const numeratorArr = [];

  for (let i = 1; i <= denominator; i++) {
    if (denominator % i === 0) denominatorArr.push(i);
  }

  for (let j = 1; j <= numerator; j++) {
    if (numerator % j === 0) numeratorArr.push(j);
  }

  const commonFactor = denominatorArr.filter((el) => numeratorArr.includes(el));
  const maxCommonFactor = commonFactor.pop();

  answer.push(numerator / maxCommonFactor);
  answer.push(denominator / maxCommonFactor);

  return answer;
}

const tc1 = 40;
const tc2 = 2;
const tc3 = 500;
const tc4 = 50;

console.log('sol', solution(tc1, tc2, tc3, tc4));
