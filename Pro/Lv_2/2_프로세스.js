// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  let answer = 0;

  const prioritiesArr = priorities.slice();

  let maxIdx = -1;

  while (prioritiesArr.length > 0) {
    answer++;
    const max = Math.max(...prioritiesArr);

    if (maxIdx === -1) {
      maxIdx = prioritiesArr.indexOf(max);
    } else {
      // eslint-disable-next-line no-loop-func
      maxIdx = prioritiesArr.findIndex((el, idx) => el === max && idx > maxIdx);
      if (maxIdx === -1) maxIdx = prioritiesArr.indexOf(max);
    }

    if (max === priorities[location] && maxIdx === location) break;

    prioritiesArr[maxIdx] = 0;
  }

  return answer;
}

const priorities = [1, 1, 9, 1, 1, 1];
const location = 0;

console.log(solution(priorities, location));
