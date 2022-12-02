// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/120887
function solution(i, j, k) {
  let answer = 0;
  const kStr = k.toString();

  for (let index = i; index <= j; index++) {
    const str = index.toString();
    answer += str.split(kStr).length - 1;
  }

  return answer;
}

console.log('sol', solution(1, 13, 1));
