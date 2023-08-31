// 내 풀이, DFS 사용
function solution(N) {
  let answer = 0;

  function DFS(L, sum) {
    if (sum === N) answer++;
    if (sum >= N) return 0;

    DFS(L + 1, sum + 1);
    DFS(L + 1, sum + 2);
  }

  DFS(0, 0);

  return answer;
}

const stair = 7;

console.log(solution(stair));
