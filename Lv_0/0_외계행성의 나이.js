// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/120834

function solution(age) {
  const ageStr = age.toString();
  const ageArr = [...ageStr];
  const planetNumber = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
  const planetAge = ageArr.map((el) => planetNumber[Number(el)]).join('');

  return planetAge;
}

console.log('sol', solution(23));
