// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  let answer = '';
  let arr;

  for (let i = 0; i < participant.length; i++) {
    if (completion.includes(participant[i])) {
      const index = completion.findIndex((el) => el === participant[i]);
      completion.splice(index, 1);
      participant.splice(i, 1);
    }
  }
  answer = participant;
  return answer;
}

const TC = ['mislav', 'stanko', 'mislav', 'ana'];
const TC2 = ['stanko', 'ana', 'mislav'];

console.log(solution(TC, TC2));
