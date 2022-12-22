// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
  let answer = 0;

  const realLost = lost.filter((el) => !reserve.includes(el));
  const realReserve = reserve.filter((el) => !lost.includes(el));

  answer = n - realLost.length;

  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);

  // 잃어버린 학생 번호에서 +- 1 을 해야하는데 reserve 에서 빼서 문제 발생!
  for (let i = 0; i < realLost.length; i++) {
    let index = realReserve.findIndex((el) => realLost[i] - 1 === el);
    if (index === -1)
      index = realReserve.findIndex((el) => realLost[i] + 1 === el);

    if (index !== -1) {
      realReserve.splice(index, 1);
      answer++;
    }
  }

  return answer;
}

const n = 6;
const lost = [2, 4, 5];
const reserve = [1, 3, 6];

console.log(solution(n, lost, reserve));
