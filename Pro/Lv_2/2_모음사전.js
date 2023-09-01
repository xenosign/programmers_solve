// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  let answer = 0;

  const letters = ['A', 'E', 'I', 'O', 'U'];

  function DFS(L, made) {
    console.log(made);
    answer++;
    if (made.length > 4 || L >= letters.length) return 0;
    if (made === word) return 0;

    DFS(L, made + letters[L]);
    DFS(L, made + letters[L + 1]);
  }

  DFS(0, '');

  return answer;
}

const word = 'AAAAE';

console.log(solution(word));
