// https://school.programmers.co.kr/learn/courses/30/lessons/68936?language=javascript

function solution(arr) {
  let answer = [];

  let zeroCount = 0;
  let oneCount = 0;

  function recursiveFunc(row, col, size) {
    let canRecursive = false;
    const standardNum = arr[row][col];

    for (let y = row; y < row + size; y++) {
      for (let x = col; x < col + size; x++) {
        if (standardNum !== arr[y][x]) canRecursive = true;
      }
    }

    if (canRecursive) {
      const halfSize = size / 2;
      recursiveFunc(row, col, halfSize);
      recursiveFunc(row, col + halfSize, halfSize);
      recursiveFunc(row + halfSize, col, halfSize);
      recursiveFunc(row + halfSize, col + halfSize, halfSize);
    } else {
      if (standardNum === 0) zeroCount++;
      else oneCount++;
    }
  }

  recursiveFunc(0, 0, arr.length);

  answer = [zeroCount, oneCount];

  return answer;
}

const arr = [
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
];

// const arr = [
//   [1, 1, 1, 1],
//   [1, 0, 1, 1],
//   [1, 1, 1, 1],
//   [1, 1, 1, 1],
// ];

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
