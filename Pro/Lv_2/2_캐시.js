// https://school.programmers.co.kr/learn/courses/30/lessons/17680

function solution(cacheSize, cities) {
  let answer = 0;

  const cache = [];

  for (const x of cities) {
    const lowerCase = x.toLowerCase();
    const idx = cache.indexOf(lowerCase);

    if (cache.length < cacheSize) {
      if (idx !== -1) {
        answer++;
        cache.unshift(lowerCase);
      } else {
        answer += 5;
        cache.unshift(lowerCase);
      }
    } else if (idx !== -1) {
      answer++;
      cache.unshift(lowerCase);
      cache.splice(idx + 1, 1);
    } else if (idx === -1) {
      answer += 5;
      cache.unshift(lowerCase);
      cache.pop();
    }
  }

  return answer;
}

const cacheSize = 5;
const cities = ['leo', 'leo', 'leo'];

console.log(solution(cacheSize, cities));
