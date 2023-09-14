// https://school.programmers.co.kr/learn/courses/30/lessons/68936?language=javascript

function solution(arr) {
  const answer = [];

  const boardSize = arr.length;

  function recursiveFunc(x, y, size) {
    if (size <= 1) return 0;

    const leftTop = arr[y][x];
    const rightTop = arr[y][x + size / 2];
    const leftBotttom = arr[y + size / 2][x];
    const rightBottom = arr[y + size / 2][x + size / 2];

    for (let i = 0; i < 4; i++) {}
  }

  return answer;
}

const arr = [
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];

// const arr = [
//   [1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 1, 1, 1, 1],
//   [0, 1, 0, 0, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 1, 0, 0, 1],
//   [0, 0, 0, 0, 1, 1, 1, 1],
// ];

console.log(solution(arr));
