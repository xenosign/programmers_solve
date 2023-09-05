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

// DFS 풀이

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
