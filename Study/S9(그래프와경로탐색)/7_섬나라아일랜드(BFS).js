function solution(board) {
  let answer = 0;
  const n = board.length;
  const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
  const dy = [0, 1, 1, 1, 0, -1, -1, -1];

  const queue = [];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // for 문 돌면서 시작점 찾아서 큐에 푸쉬
      if (board[i][j] === 1) {
        // 이미 찾은 섬은 0 으로 바꾸고, 큐에 푸쉬
        board[i][j] = 0;
        queue.push([i, j]);
        // 시작점 하나에 대한 처리가 될 것이므로, answer + 1
        answer++;
        // 시작점에서 이동이 가능한 모든 1 값을 찾아서 0으로 처리하는 while 문
        while (queue.length > 0) {
          // 큐에서 하나 빼서 해당 좌표 받고 시작
          const [x, y] = queue.shift();
          // 8 방향에 대한 처리
          for (let k = 0; k < dx.length; k++) {
            const nx = x + dx[k];
            const ny = y + dy[k];
            // 조건에 맞을 경우 0 으로 만들고, 해당 지점에거 갈 수 있는 부분을 체크 해야하므로 큐에 푸쉬
            // 해당 큐에 푸쉬된 것은 다시 위로 올라가서 똑같은 방식으로 처리 되어, 하나의 섬에 대한 결과 처리 완료
            if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
              board[nx][ny] = 0;
              queue.push([nx, ny]);
            }
          }
        }
      }
    }
  }

  return answer;
}

const board = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(board));
