// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/120923
function solution(num, total) {
  const answer = [];

  if (num % 2 === 1) {
    const midNum = total / num;
    const halfCount = num / 2 - 0.5;
    for (let i = midNum - halfCount; i <= midNum + halfCount; i++) {
      answer.push(i);
    }
  } else {
    const midNum = total / num - 0.5;
    const halfCount = num / 2;
    for (let i = midNum - halfCount + 1; i <= midNum + halfCount; i++) {
      answer.push(i);
    }
  }

  return answer;
}

console.log('sol', solution(4, 14));
