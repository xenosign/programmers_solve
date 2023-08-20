// 조합과 순열을 다르다
// 조합은 순서 상관이 X, 순열은 순서 상관 O 따라서 순열에서는 checkArr 사용
function solution(n, m) {
  const answer = [];
  const tmpArr = [];

  for (let i = 0; i < m; i++) {
    tmpArr.push(0);
  }

  // s 는 스타트 넘버, 1 에서 2 ~ 4 를 조합 / 2 에서 3 ~ 4를 조합 / 3 에서 4를 조합
  // 조합이다 보니, 순서 상관이 없으므로 이처럼 처리 가능
  function DFS(L, s) {
    // 몇개 뽑는지 까지 도착 하면 뽑힌 애들 푸쉬
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
