// https://school.programmers.co.kr/learn/courses/30/lessons/1844

// BFS 풀이
function solution(maps) {
  let answer = -1;

  const xSize = maps[0].length;
  const ySize = maps.length;
  const dx = [0, 0, 1, -1];
  const dy = [-1, 1, 0, 0];

  const queue = [];
  queue.push([0, 0, 1]);

  while (queue.length) {
    const [curX, curY, move] = queue.shift();

    if (curX === xSize - 1 && curY === ySize - 1) answer = move;

    for (let i = 0; i < dx.length; i++) {
      const nx = curX + dx[i];
      const ny = curY + dy[i];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < xSize &&
        ny < ySize &&
        maps[ny][nx] === 1
      ) {
        queue.push([nx, ny, move + 1]);
        maps[ny][nx] = 0;
      }
    }
  }

  return answer;
}

// // DFS 풀이
// function solution(maps) {
//   let answer = Number.MAX_SAFE_INTEGER;

//   const xSize = maps[0].length;
//   const ySize = maps.length;
//   const xGoal = xSize - 1;
//   const yGoal = ySize - 1;

//   function DFS(x, y, move) {
//     if (x === xGoal && y === yGoal) {
//       answer = Math.min(answer, move);
//       return 0;
//     }

//     if (x < 0 || x >= xSize || y < 0 || y >= ySize || maps[x][y] === 0)
//       return 0;

//     maps[x][y] = 0;
//     DFS(x + 1, y, move + 1);
//     DFS(x, y + 1, move + 1);
//     DFS(x - 1, y, move + 1);
//     DFS(x, y - 1, move + 1);
//     maps[x][y] = 1;
//   }

//   DFS(0, 0, 1);

//   if (answer === Number.MAX_SAFE_INTEGER) answer = -1;
//   return answer;
// }

const map1 = [
  [1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1],
  [0, 0, 0, 0, 1],
];

// const map2 = [
//   [1, 0, 1, 1, 1],
//   [1, 0, 1, 0, 1],
//   [1, 0, 1, 1, 1],
//   [1, 1, 1, 0, 0],
//   [0, 0, 0, 0, 1],
// ];

console.log(solution(map1));
