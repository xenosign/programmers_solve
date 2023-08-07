// // 내 풀이
// function solution(coins, exchange) {
//   let answer = Number.MAX_SAFE_INTEGER;

//   function DFS(L, sum) {
//     if (sum > exchange) return 0;

//     if (sum === exchange) answer = Math.min(L, answer);

//     DFS(L + 1, sum + coins[0]);
//     DFS(L + 1, sum + coins[1]);
//     DFS(L + 1, sum + coins[2]);
//   }

//   DFS(0, 0);

//   return answer;
// }

// 수업 풀이
function solution(coins, exchange) {
  let answer = Number.MAX_SAFE_INTEGER;
  const n = coins.length;

  function DFS(L, sum) {
    if (sum > exchange) return 0;

    if (sum === exchange) answer = Math.min(L, answer);

    // for 문으로 처리한 것만 다르다!
    for (let i = 0; i < n; i++) {
      DFS(L + 1, sum + coins[i]);
    }
  }

  DFS(0, 0);

  return answer;
}

const coins = [1, 2, 5];
const exchange = 15;

console.log(solution(coins, exchange));
