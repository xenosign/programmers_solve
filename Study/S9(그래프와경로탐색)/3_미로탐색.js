// // 내 풀이
// function solution(m, n, arr) {
//   let answer = 0;

//   function DFS(x, y) {
//     if (x === m && y === n) {
//       answer++;
//     } else if (
//       x < 0 ||
//       y < 0 ||
//       x >= arr.length ||
//       y >= arr[0].length ||
//       arr[x][y] === 1
//     ) {
//       return 0;
//     } else {
//       arr[x][y] = 1;
//       DFS(x + 1, y);
//       DFS(x - 1, y);
//       DFS(x, y + 1);
//       DFS(x, y - 1);
//       arr[x][y] = 0;
//     }
//   }

//   DFS(0, 0);

//   return answer;
// }

// 수업 풀이
function solution(m, n, board) {
  let answer = 0;
  // for 문 사용을 위한 dx, dy 도입
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(x, y) {
    if (x === m && y === n) {
      answer++;
    } else {
      for (let i = 0; i < dx.length; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (
          nx >= 0 &&
          nx <= board.length - 1 &&
          ny >= 0 &&
          ny <= board[0].length - 1 &&
          board[nx][ny] === 0
        ) {
          board[nx][ny] = 1;
          DFS(nx, ny);
          board[nx][ny] = 0;
        }
      }
    }
  }

  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}

const arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr.length - 1, arr[0].length - 1, arr));
