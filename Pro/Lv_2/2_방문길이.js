// https://school.programmers.co.kr/learn/courses/30/lessons/49994

function solution(dirs) {
  let answer = 0;

  let dx = 5;
  let dy = 5;
  const log = Array.from(Array(11), () => Array(11).fill(''));

  for (let i = 0; i < dirs.length; i++) {
    if (dirs[i] === 'U' && dy <= 9 && dy >= 0) {
      dy += 1;
      if (log[dx][dy].indexOf('U') === -1) {
        log[dx][dy] += 'U';
        log[dx][dy - 1] += 'D';
        answer++;
      }
    } else if (dirs[i] === 'D' && dy >= 1 && dy <= 10) {
      dy -= 1;
      if (log[dx][dy].indexOf('D') === -1) {
        log[dx][dy] += 'D';
        log[dx][dy + 1] += 'U';
        answer++;
      }
    } else if (dirs[i] === 'R' && dx <= 9 && dx >= 0) {
      dx += 1;
      if (log[dx][dy].indexOf('R') === -1) {
        log[dx][dy] += 'R';
        log[dx - 1][dy] += 'L';
        answer++;
      }
    } else if (dirs[i] === 'L' && dx >= 1 && dx <= 10) {
      dx -= 1;
      if (log[dx][dy].indexOf('L') === -1) {
        log[dx][dy] += 'L';
        log[dx + 1][dy] += 'R';
        answer++;
      }
    }
  }

  return answer;
}

const dirs = 'ULURRDLLU';
// const dirs = 'RRRRRLLLLL';

console.log(solution(dirs));
