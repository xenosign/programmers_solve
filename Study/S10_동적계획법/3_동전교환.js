// // 내 풀이, DFS 사용
// function solution(coins, money) {
//   let answer = Number.MAX_SAFE_INTEGER;

//   function DFS(L, sum) {
//     if (sum === money) answer = Math.min(answer, L);
//     if (sum >= money) return 0;

//     for (let i = 0; i < coins.length; i++) {
//       DFS(L + 1, sum + coins[i]);
//     }
//   }

//   DFS(0, 0);

//   return answer;
// }

// 수업 풀이, 냅색 알고리즘 사용
function solution(coins, money) {
  let answer = 0;

  const dy = Array.from({ length: money + 1 }, () => Number.MAX_SAFE_INTEGER);

  // 초기값 설정
  dy[0] = 0;

  // 하나의 코인만 있다고 가정을 한 상태에서 제일 낮은 금액부터 저넻를 반복
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= money; j++) {
      // 특정 금액은 해당 동전을 하나 뺀 만큼의 금액에 필요한 동전의 개수 + 1 인 점화식을 사용
      dy[j] = Math.min(dy[j], dy[j - coins[i]] + 1);
    }
  }

  answer = dy[money];

  return answer;
}

const money = 15;
const coins = [1, 2, 5];

console.log(solution(coins, money));
