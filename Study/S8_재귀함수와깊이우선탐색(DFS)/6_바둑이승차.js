// 내 풀이
function solution(arr, max) {
  let answer = 0;

  function DFS(idx, sum) {
    if (sum > max) return 0;
    if (idx === arr.length) answer = Math.max(answer, sum);
    else {
      // sum 보다 안클경우 바둑이 태우기
      DFS(idx + 1, sum + arr[idx]);
      // sum 보다 크면 위의 DFS는 return 으로 종료 되므로, 다음 바둑이를 탐색
      DFS(idx + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

const tc = [81, 58, 42, 33, 61];

console.log(solution(tc, 259));
