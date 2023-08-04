function solution(n, m) {
  const answer = [];
  // 순열을 저장할 tmp 배열 선언
  const tmp = Array.from({ length: m }, () => 0);

  function DFS(L) {
    if (L === m) {
      // 레벨이 끝에 도달하면 만들어둔 tmp 저장
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        // tmp 의 index 에 레벨을 넣어서 순열이 조합 되도록
        // i x 3 이 되고 다시  i 의 안쪽에서 x 3 이 되는 구조
        // 1, 1 / 1, 2 / 1,3 이런 식으로
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);

  return answer.length;
}

console.log(solution(3, 2));
