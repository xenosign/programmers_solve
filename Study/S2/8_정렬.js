function solution(arr) {
  const n = arr.length;
  const answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }

  return answer;
}

const ex = [87, 89, 92, 100, 76, 100];

console.log(solution(ex));
