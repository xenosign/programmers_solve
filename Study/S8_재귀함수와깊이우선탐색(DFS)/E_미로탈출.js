// https://www.youtube.com/watch?v=7C9RgOcvkvo

// https://velog.io/@sds1vrk/%EB%AF%B8%EB%A1%9C%EC%B0%BE%EA%B8%B0-%EB%AC%B8%EC%A0%9C-DFS-BFS

function solution(arr) {
  let answer = 0;
  const copyArr = arr.slice();

  function dfs(x, y) {
    if (
      x < 0 ||
      x >= copyArr.length ||
      copyArr[x][y] === 0 ||
      copyArr[x][y] === undefined
    )
      return false;

    answer++;

    console.log(x, y, copyArr[x][y]);
    console.log(arr.length - 1, arr[0].length - 1);

    if (x === arr.length - 1 && y === arr[0].length - 1) return answer;

    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
  }

  dfs(0, 0);

  return answer;
}

const maze = [
  [1, 0, 1, 0, 1, 0],
  [1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1],
];

console.log(solution(maze));
