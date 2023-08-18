// 무한 재귀 버전, 계산할 때마다 모든 트리의 값을 카운팅 함
function solution(n, m) {
  const answer = [];
  const tmpArr = [];

  for (let i = 0; i < m; i++) {
    tmpArr.push(0);
  }

  function DFS(L, s) {
    if (L === m) {
      answer.push(tmpArr.slice());
    } else {
      for (let i = s; i <= n; i++) {
        tmpArr[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 1);

  return [answer, answer.length];
}

console.log(solution(4, 2));
