function solution(arr) {
  const answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.findIndex((el) => el === arr[i])) answer.push(arr[i]);
  }

  return answer;
}

const ex = ['good', 'time', 'good', 'time', 'student'];

console.log(solution(ex));
