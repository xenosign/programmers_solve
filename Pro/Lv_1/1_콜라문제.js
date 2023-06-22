// https://school.programmers.co.kr/learn/courses/30/lessons/132267

// 내 풀이
function solution(a, b, n) {
  let answer = 0;

  let returnCola = 0;
  let totalCola = n;

  while (totalCola >= a) {
    returnCola = Math.floor(totalCola / a) * b;
    answer += returnCola;

    totalCola = returnCola + (totalCola % a);
  }

  return answer;
}

// const solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;

const empty = 3;
const ret = 1;
const total = 20;

console.log(solution(empty, ret, total));
