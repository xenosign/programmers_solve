// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  let answer = 0;

  const letters = ['A', 'E', 'I', 'O', 'U'];

  function DFS(L, made) {
    console.log(made);
    answer++;
    if (made.length >= 5) return 0;
    if (made === word) return 0;

    DFS(L, made + letters[L]);
    DFS(L + 1, made + letters[L + 1]);
  }

  DFS(0, '');

  return answer;
}

const word = 'A';

console.log(solution(word));
