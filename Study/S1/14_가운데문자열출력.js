function solution(str) {
  let answer = '';
  const mid = Math.floor(str.length / 2);

  if (str.length % 2 === 0) {
    answer = str.substring(mid - 1, mid + 1);
  } else {
    answer = str.substring(mid, mid + 1);
  }

  return answer;
}

const ex = 'good';

console.log(solution(ex));
