// https://school.programmers.co.kr/learn/courses/30/lessons/181832

function solution(n) {
  const answer = [];

  for (let i = 0; i < n; i += 1) {
    let tempArr = [];
    for (let j = 1; j <= n; j += 1) {
      tempArr.push(i * n + j);
    }
    answer.push(tempArr);
    tempArr = [];
  }

  return answer;
}

console.log(solution(4));
