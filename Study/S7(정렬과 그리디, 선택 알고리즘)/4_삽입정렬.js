// 내 풀이
function solution(arr) {
  const answer = arr;

  for (let i = 1; i < answer.length; i++) {
    const tmp = answer[i];
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (tmp < answer[j]) answer[j + 1] = answer[j];
      else break;
    }
    answer[j + 1] = tmp;
  }

  return answer;
}

const tc = [13, 5, 11, 7, 23, 15];

console.log(solution(tc));
