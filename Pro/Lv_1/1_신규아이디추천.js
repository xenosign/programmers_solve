// https://school.programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  let answer = '';

  // 1 step
  answer = new_id.toLowerCase();

  // 2 step
  const regexDelSpecialWord = /[^a-z0-9-_.]/g;
  answer = answer.replace(regexDelSpecialWord, '');

  // 3 step
  const regexDelDuplicatedComma = /[.]+/g;
  answer = answer.replace(regexDelDuplicatedComma, '.');

  // 4 step
  if (answer[0] === '.') answer = answer.substring(1, answer.length);
  if (answer[answer.length - 1] === '.')
    answer = answer.substring(0, answer.length - 1);

  // 5 step
  if (answer === '') answer += 'a';

  // 6 step
  if (answer.length >= 16) answer = answer.substring(0, 15);

  if (answer[answer.length - 1] === '.')
    answer = answer.substring(0, answer.length - 1);

  // 7 step
  if (answer.length === 2) answer += answer[1];
  else if (answer.length === 1) answer += `${answer[0] + answer[0]}`;

  return answer;
}

// const newID = '...!@BaT#*..y.abcdefghijklm';
const newID = 'abcdefghijklmn.p';

console.log(solution(newID));
