// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 0; j <= i; j++) {
      if (i % j === 0) count += 1;
    }
    count % 2 === 0 ? (answer += i) : (answer -= i);
  }

  return answer;
}

console.log(solution(13, 17));

// 다른 사람 풀이 => 제곱근이 정수면 해당 수의 약수는 홀수다
function solution2(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}
