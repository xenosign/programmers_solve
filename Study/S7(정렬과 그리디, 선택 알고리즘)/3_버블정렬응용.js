// 내 풀이
function solution(arr) {
  const answer = arr;

  const negativeCount = arr.filter((el) => el < 0).length;

  for (let i = 0; i < answer.length - negativeCount; i++) {
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

const tc = [1, 2, 3, -3, -2, 5, 6, -6, -7];

console.log(solution(tc));
