// 내 풀이
function solution(arr) {
  const answer = arr;

  for (let i = 0; i < answer.length - 1; i++) {
    for (let j = 0; j < answer.length - 1 - i; j++) {
      if (answer[j] > answer[j + 1]) {
        const tmp = answer[j];
        answer[j] = answer[j + 1];
        answer[j + 1] = tmp;
      }
    }
  }
  return answer;
}

const tc = [13, 5, 11, 7, 23, 15];

console.log(solution(tc));
