// // 내 풀이, DFS 사용
// function solution(N) {
//   let answer = 0;

//   function DFS(L, sum) {
//     if (sum === N) answer++;
//     if (sum >= N) return 0;

//     DFS(L + 1, sum + 1);
//     DFS(L + 1, sum + 2);
//   }

//   DFS(0, 0);

//   return answer;
// }

// 수업 풀이, 동적 계획법 사용
// 점화식을 사용해서 푸는 법
// 계단 올라가는 방법은 F(n) = F(n-2) + F(n-1) 임을 사용, 단 초기값 입력 필요
function solution(N) {
  let answer = 0;

  const dy = Array.from({ length: N }, () => 0);

  // 배열에 점화식 초기값 입력
  dy[1] = 1;
  dy[2] = 2;

  // 점화식 계산
  for (let i = 3; i <= N; i++) {
    dy[i] = dy[i - 2] + dy[i - 1];
  }

  answer = dy[N];

  return answer;
}

const stair = 7;

console.log(solution(stair));
