function solution(m, arr) {
  let answer = 0;
  // 해당 시간에 최대로 풀 수 있는 점수를 기록하기 위한 배열
  const dy = Array.from({ length: m + 1 }, () => 0);

  for (let i = 0; i < arr.length; i++) {
    // 특정 문제의 점수
    const ps = arr[i][0];
    // 특전 문제를 풀기 위한 시간
    const pt = arr[i][1];

    // 뒤에서 부터 해야, 같은 문제를 2번 푸는 중복 예방이 가능
    for (let j = m; j >= pt; j--) {
      // 현재 다이나믹 배열에 저장된 시간과 이전 시간에, 현재의 문제를 풀기 위한 시간을 더한 값 중 더 큰 값을 남긴다
      dy[j] = Math.max(dy[j], dy[j - pt] + ps);
    }
  }

  answer = dy[m];

  return answer;
}

const problems = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

console.log(solution(20, problems));
