// https://school.programmers.co.kr/learn/courses/30/lessons/17679

function solution(m, n, board) {
  let answer = 0;

  const boardArr = [];

  for (let i = 0; i < board.length; i++) {
    boardArr.push(board[i].split(''));
  }

  let delPosObj = {};
  let delPosArr = [];

  for (let y = 0; y < m - 1; y++) {
    for (let x = 0; x < n - 1; x++) {
      const character = boardArr[y][x];
      if (
        boardArr[y][x + 1] === character &&
        boardArr[y + 1][x] === character &&
        boardArr[y + 1][x + 1] === character
      ) {
        delPosObj[`${y},${x}`] = 1;
        delPosObj[`${y + 1},${x}`] = 1;
        delPosObj[`${y},${x + 1}`] = 1;
        delPosObj[`${y + 1},${x + 1}`] = 1;
      }
    }
  }

  answer += Object.keys(delPosObj).length;
  delPosArr = Object.keys(delPosObj);

  for (let i = 0; i < delPosArr.length; i++) {
    const [strY, strX] = delPosArr[i].split(',');
    const y = Number(strY);
    const x = Number(strX);
    boardArr[y][x] = '0';
  }

  for (let i = boardArr.length - 1; i >= 0; i--) {
    for (let j = boardArr[0].length - 1; j >= 0; j--) {
      console.log(boardArr[i][j]);
    }
  }

  console.log(boardArr);

  delPosObj = {};

  return answer;
}

const x = 6;
const y = 6;
const board = ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'];

console.log(solution(y, x, board));
