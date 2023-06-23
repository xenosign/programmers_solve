// https://school.programmers.co.kr/learn/courses/30/lessons/159994

// 내 풀이
function solution(c1, c2, goal) {
  let answer = 'No';
  let cnt = 0;

  for (let i = 0; i < goal.length; i++) {
    if (goal[i] === c1[0]) {
      c1.splice(0, 1);
      cnt++;
    } else if (goal[i] === c2[0]) {
      c2.splice(0, 1);
      cnt++;
    }
  }

  if (goal.length === cnt) answer = 'Yes';
  return answer;
}

// const deck1 = ['i', 'water', 'drink'];
const deck1 = ['i', 'drink', 'water'];
const deck2 = ['want', 'to'];
const result = ['i', 'want', 'to', 'drink', 'water'];

console.log(solution(deck1, deck2, result));
