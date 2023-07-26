// https://www.youtube.com/watch?v=7C9RgOcvkvo

function solution(arr) {
  let answer = 0;
  const copyArr = arr.slice();

  function dfs(x, y) {
    if (
      x < 0 ||
      x >= arr.length ||
      copyArr[x][y] === 1 ||
      copyArr[x][y] === undefined
    )
      return false;
    if (copyArr[x][y] === 0) copyArr[x][y] = 1;
    dfs(x - 1, y);
    dfs(x, y - 1);
    dfs(x + 1, y);
    dfs(x, y + 1);
    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (dfs(i, j)) answer++;
    }
  }

  return answer;
}

// const tray = [
//   [0, 0, 1, 1, 0],
//   [0, 0, 0, 1, 1],
//   [1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0],
// ];

const tray = [
  [0, 0, 1],
  [0, 0, 0],
  [1, 1, 1],
];

console.log(solution(tray));
