// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
  let answer = '';

  while (participant.length >= 1) {
    if (completion.includes(participant[0])) {
      const index = completion.findIndex((el) => el === participant[0]);
      completion.splice(index, 1);
      participant.splice(0, 1);
    } else {
      [answer] = participant;
      break;
    }
  }
  [answer] = participant;
  return answer;
}

const TC = ['mislav', 'stanko', 'mislav', 'ana'];
const TC2 = ['stanko', 'ana', 'mislav'];

console.log(solution(TC, TC2));
