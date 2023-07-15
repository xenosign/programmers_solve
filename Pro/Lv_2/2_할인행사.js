// https://school.programmers.co.kr/learn/courses/30/lessons/131127

function solution(want, number, discount) {
  let answer = 0;

  const copyNumber = number.slice();

  for (let i = 0; i < discount.length; i++) {
    const idx = want.indexOf(discount[i]);
    if (idx !== -1) copyNumber[want.indexOf(discount[i])] -= 1;
    const delIdx = want.indexOf(discount[i - 10]);
    if (delIdx !== -1 && i >= 10)
      copyNumber[want.indexOf(discount[i - 10])] += 1;
    if (copyNumber.filter((el) => el <= 0).length === want.length) answer++;
  }

  return answer;
}

const want = ['banana', 'apple', 'rice', 'pork', 'pot'];
const number = [3, 2, 2, 2, 1];
const discount = [
  'chicken',
  'apple',
  'apple',
  'banana',
  'rice',
  'apple',
  'pork',
  'banana',
  'pork',
  'rice',
  'pot',
  'banana',
  'apple',
  'banana',
];

console.log(solution(want, number, discount));
