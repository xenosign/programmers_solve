function solution(arr) {
  const answer = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }

  return answer;
}

const ex = [6, 7, 3, 9, 5, 6, 12];

console.log(solution(ex));
