// https://school.programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  let answer = 0;

  const tmpBoard = board;
  const stack = [];

  const sizeLen = tmpBoard.length;
  const movesLen = moves.length;

  for (let i = 0; i < movesLen; i++) {
    for (let j = 0; j < sizeLen; j++) {
      const pickDoll = tmpBoard[j][moves[i] - 1];
      // 수업 풀이 push 할 때 비교를 해서 push 안하는 방법으로 개선
      if (pickDoll !== 0 && pickDoll !== undefined) {
        if (pickDoll === stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else {
          stack.push(pickDoll);
        }
        tmpBoard[j][moves[i] - 1] = 0;
        break;
      }
    }

    // 내 풀이
    // 일단 push 하고, pop 을 2번 하던 방법

    // const len = stack.length;
    // if (stack[len - 1] === stack[len - 2] && stack.length > 1) {
    //   stack.pop();
    //   stack.pop();
    //   answer += 2;
    // }
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

// const move = [1, 5, 3, 5, 1, 2, 1, 4];

const board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
const move = [1, 2, 3, 4];

console.log(solution(board, move));
