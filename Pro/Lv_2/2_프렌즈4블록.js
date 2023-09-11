// https://school.programmers.co.kr/learn/courses/30/lessons/17679

function solution(m, n, board) {
  let answer = 0;

  const splitArr = [];
  const boardArr = [];

  for (let i = 0; i < board.length; i++) {
    splitArr.push(board[i].split(''));
  }

  for (let y = 0; y < n; y++) {
    const tmpArr = [];
    for (let x = m - 1; x >= 0; x--) {
      tmpArr.push(splitArr[x][y]);
    }
    boardArr.push(tmpArr);
  }

  let flag = true;

  let delPosObj = {};
  let delPosArr = [];

  while (flag) {
    for (let x = 0; x < n - 1; x++) {
      for (let y = 0; y < m - 1; y++) {
        const character = boardArr[x][y];
        if (
          character !== undefined &&
          boardArr[x + 1][y] === character &&
          boardArr[x][y + 1] === character &&
          boardArr[x + 1][y + 1] === character
        ) {
          delPosObj[`${x},${y}`] = 1;
          delPosObj[`${x + 1},${y}`] = 1;
          delPosObj[`${x},${y + 1}`] = 1;
          delPosObj[`${x + 1},${y + 1}`] = 1;
        }
      }
    }

    if (Object.keys(delPosObj).length === 0) flag = false;

    answer += Object.keys(delPosObj).length;
    delPosArr = Object.keys(delPosObj);

    delPosObj = {};

    for (let i = 0; i < delPosArr.length; i++) {
      const [strX, strY] = delPosArr[i].split(',');
      const x = Number(strX);
      const y = Number(strY);
      boardArr[x][y] = '0';
    }

    for (let i = 0; i < boardArr.length; i++) {
      boardArr[i] = boardArr[i].filter((el) => el !== '0');
    }
  }

  return answer;
}

const x = 6;
const y = 6;
const board = ['TTTANT', 'RRFACC', 'RRRFCC', 'TRRRAA', 'TTMMMF', 'TMMTTJ'];
// const x = 4;
// const y = 5;
// const board = ['CCBDE', 'AAADE', 'AAABF', 'CCBBF'];

console.log(solution(x, y, board));
