// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;
  const bucket = [];

  const movesLen = moves.length;

  const boardWithOutZero = [];

  for (let i = 0; i < board.length; i += 1) {
    const tempArr = board[i].filter((el) => el !== 0);
    boardWithOutZero.push(tempArr);
  }

  for (let i = 0; i < movesLen; i += 1) {
    const currentMoves = moves.shift() - 1;

    if (boardWithOutZero[currentMoves].length > 0) {
      const currentPick = boardWithOutZero[currentMoves].pop();
      bucket.push(currentPick);
      const bucketLen = bucket.length;

      if (bucketLen >= 2) {
        console.log(bucket);
        if (bucket[bucketLen - 1] === bucket[bucketLen - 2]) {
          bucket.splice(bucketLen - 3, 2);
          answer += 2;
        }
      }
    }
  }

  return answer;
}

// const board = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 3],
//   [0, 2, 5, 0, 1],
//   [4, 2, 4, 4, 2],
//   [3, 5, 1, 3, 1],
// ];

const board = [
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

const move = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, move));
