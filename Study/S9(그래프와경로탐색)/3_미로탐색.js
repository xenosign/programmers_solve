// 내 풀이
function solution(m, n, arr) {
  let answer = 0;

  function DFS(x, y) {
    if (x === m && y === n) {
      answer++;
    } else if (
      x < 0 ||
      y < 0 ||
      x >= arr.length ||
      y >= arr[0].length ||
      arr[x][y] === 1
    ) {
      return 0;
    } else {
      arr[x][y] = 1;
      DFS(x + 1, y);
      DFS(x - 1, y);
      DFS(x, y + 1);
      DFS(x, y - 1);
      arr[x][y] = 0;
    }
  }

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

console.log(solution(6, 6, arr));
