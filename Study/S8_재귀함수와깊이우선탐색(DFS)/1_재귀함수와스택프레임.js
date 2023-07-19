// 수업 풀이

// 조건을 걸어서 함수를 재귀
// 함수 종료는 return 으로
// 함수 호출은 스택 프레임에 쌓이며, 스택 구조에 맞게 제일 LIFO 로 실행 된다
// dfs3 -> dfs2 -> dfs1 순서로 들어가고 반대로 실행되면서 나감 => 그래서 1, 2, 3 이 찍힘
function solution(n) {
  function dfs(l) {
    if (l === 0) return;
    dfs(l - 1);
    console.log(l);
  }

  dfs(n);
}
const num = 3;

solution(num);
