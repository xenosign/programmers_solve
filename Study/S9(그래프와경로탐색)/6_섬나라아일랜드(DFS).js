// 내 풀이
function solution(m, n, arr) {
  let answer = 0;

  function DFS(x, y) {
    if (
      x < 0 ||
      x >= arr.length ||
      arr[x][y] === 0 ||
      arr[x][y] === undefined
    ) {
      return false;
    }

    if (arr[x][y] === 1) arr[x][y] = 0;

    DFS(x + 1, y);
    DFS(x + 1, y - 1);
    DFS(x, y - 1);
    DFS(x - 1, y - 1);
    DFS(x - 1, y);
    DFS(x - 1, y + 1);
    DFS(x, y + 1);
    DFS(x + 1, y + 1);

    return true;
  }

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (DFS(i, j)) answer++;
    }
  }

  return answer;
}

const arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr.length - 1, arr[0].length - 1, arr));
