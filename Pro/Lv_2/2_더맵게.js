// https://school.programmers.co.kr/learn/courses/30/lessons/42626

function solution(scoville, K) {
  let answer = 0;

  const sortedScoville = scoville.sort((a, b) => a - b);

  let lowerScovilleCnt = scoville.filter((el) => el < K).length;

  if (lowerScovilleCnt <= 0) return 0;

  while (lowerScovilleCnt > 0) {
    const firstLow = sortedScoville.shift();
    const secondLow = sortedScoville.shift();
    if (firstLow === undefined || secondLow === undefined) {
      answer = -1;
      break;
    }
    const newScoville = firstLow + secondLow * 2;
    sortedScoville.unshift(newScoville);
    answer++;

    lowerScovilleCnt = sortedScoville.filter((el) => el < K).length;
  }

  return answer;
}

const tc1 = [1, 2, 3, 9, 10, 12];
const tc2 = 7;

console.log(solution(tc1, tc2));
