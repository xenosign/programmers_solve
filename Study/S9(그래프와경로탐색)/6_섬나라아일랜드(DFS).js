// // 내 풀이
// function solution(board) {
//   let answer = 0;

//   function DFS(x, y) {
//     if (
//       x < 0 ||
//       x >= board.length ||
//       board[x][y] === 0 ||
//       board[x][y] === undefined
//     ) {
//       return false;
//     }

//     if (board[x][y] === 1) board[x][y] = 0;

//     DFS(x + 1, y);
//     DFS(x + 1, y - 1);
//     DFS(x, y - 1);
//     DFS(x - 1, y - 1);
//     DFS(x - 1, y);
//     DFS(x - 1, y + 1);
//     DFS(x, y + 1);
//     DFS(x + 1, y + 1);

//     return true;
//   }

//   for (let i = 0; i < board.length; i++) {
//     for (let j = 0; j < board[0].length; j++) {
//       if (DFS(i, j)) answer++;
//     }
//   }

//   return answer;
// }

// 수업 풀이
function solution(board) {
  let answer = 0;
  const n = board.length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  function DFS(x, y) {
    board[x][y] = 0;
    for (let k = 0; k < dx.length; k++) {
      const nx = x + dx[k];
      const ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        answer++;
        DFS(i, j);
      }
    }
  }

  return answer;
}

const board = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(board));
