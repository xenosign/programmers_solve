// https://school.programmers.co.kr/learn/courses/30/lessons/12980

function solution(n) {
  let answer = 0;
  let copyDistance = n;

  while (copyDistance > 0) {
    if (copyDistance % 2 === 0) {
      copyDistance /= 2;
    } else {
      copyDistance -= 1;
      answer += 1;
    }
  }

  return answer;
}

console.log(solution(5));
