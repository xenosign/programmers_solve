// https://www.youtube.com/watch?v=7C9RgOcvkvo

// https://velog.io/@sds1vrk/%EB%AF%B8%EB%A1%9C%EC%B0%BE%EA%B8%B0-%EB%AC%B8%EC%A0%9C-DFS-BFS

// https://velog.io/@rladpwl0512/9-4-%EB%AF%B8%EB%A1%9C%ED%83%90%EC%83%89DFS

function solution(maze) {
  let answer = 0;
  const copyMaze = maze.slice();

  function DFS(x, y) {
    if (x === maze.length - 1 && y === maze[0].length) {
      answer++;
    } else if (
      x >= 0 &&
      x < maze.length &&
      y >= 0 &&
      y < maze[0].length &&
      copyMaze[x][y] === 0
    ) {
      copyMaze[x][y] = 1;
      DFS(x - 1, y);
      DFS(x + 1, y);
      DFS(x, y - 1);
      DFS(x, y + 1);
      copyMaze[x][y] = 0;
    }
  }
  DFS(0, 0);
  return answer;
}

// const maze = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 1, 1, 1, 1, 1, 0],
//   [0, 0, 0, 1, 0, 0, 0],
//   [1, 1, 0, 1, 0, 1, 1],
//   [1, 1, 0, 0, 0, 0, 1],
//   [1, 1, 0, 1, 1, 0, 0],
//   [1, 0, 0, 0, 0, 0, 0],
// ];

const maze = [
  [0, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

console.log(solution(maze));
