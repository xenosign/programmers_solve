// https://school.programmers.co.kr/learn/courses/30/lessons/118667

function solution(queue1, queue2) {
  let answer = 0;

  const queueLen = queue1.length + queue2.length;

  let sum1 = queue1.reduce((acc, cur) => acc + cur, 0);
  let sum2 = queue2.reduce((acc, cur) => acc + cur, 0);

  let oneIdx = 0;
  let twoIdx = 0;

  const flag = true;

  while (flag) {
    if (sum1 === sum2) {
      break;
    } else if (answer > queueLen * 2) {
      answer = -1;
      break;
    } else if (sum1 > sum2) {
      const el = queue1[oneIdx++];
      sum1 -= el;
      sum2 += el;
      queue2.push(el);
    } else if (sum2 > sum1) {
      const el = queue2[twoIdx++];
      sum2 -= el;
      sum1 += el;
      queue1.push(el);
    }

    answer++;
  }

  return answer;
}

// const queue1 = [3, 2, 7, 2];
// const queue2 = [4, 6, 5, 1];

const queue1 = [1, 2, 1, 2];
const queue2 = [1, 10, 1, 2];

// const queue1 = [1, 1];
// const queue2 = [1, 5];

console.log(solution(queue1, queue2));
