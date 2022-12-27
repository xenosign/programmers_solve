// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/120843

function solution(numbers, k) {
  let answer = 0;
  const { length } = numbers;

  answer = (2 * k - 1) % length;
  if (answer === 0) answer = length - 1;

  return answer;
}

const TC = [1, 2, 3, 4, 5, 6];
const k = 5;

console.log(solution(TC, k));
