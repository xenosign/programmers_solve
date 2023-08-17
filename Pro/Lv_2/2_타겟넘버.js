// https://school.programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
  let answer = 0;

  function DFS(L, sum) {
    if (L > numbers.length) {
      return 0;
    }
    if (L === numbers.length && sum === target) {
      answer++;
    }

    DFS(L + 1, sum + numbers[L]);
    DFS(L + 1, sum - numbers[L]);
  }

  DFS(0, 0);

  return answer;
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;

// const numbers = [4, 1, 2, 1];
// const target = 4;

console.log(solution(numbers, target));
