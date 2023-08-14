// https://school.programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
  let answer = '';

  const daysOfMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysList = ['FRI', 'SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU'];

  let totalDays = -1;

  for (let i = 0; i < a - 1; i++) {
    totalDays += daysOfMonth[i];
  }

  totalDays += b;

  answer = daysList[totalDays % 7];

  return answer;
}

const month = 9;
const day = 1;

console.log(solution(month, day));
