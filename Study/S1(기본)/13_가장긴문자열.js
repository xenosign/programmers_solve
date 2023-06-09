function solution(n, arr) {
  let answer = '';
  const max = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    if (arr[i].length < max) answer = arr[i];
  }

  return answer;
}

const num = 5;
const ex = ['teacher', 'tea', 'pororo', 'tetz', 'LaLakers'];

console.log(solution(num, ex));
