// https://school.programmers.co.kr/learn/courses/30/lessons/84512

function solution(word) {
  let answer = 0;
  const letters = ['A', 'E', 'I', 'O', 'U'];
  const arr = [];

  function DFS(L, made) {
    if (made.length > 5) return 0;

    arr.push(made);

    console.log(made);

    letters.forEach((letter) => {
      DFS(L + 1, made + letter);
    });
  }

  DFS(0, '');

  answer = arr.indexOf(word);

  return answer;
}

const word = 'AAAAE';

console.log(solution(word));
