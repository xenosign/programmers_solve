// 수업 풀이
// 말의 간격을 최소, 최대 값으로 구하고 중간 값을 구해서
// 해당 간격으로 배치시 조건에 부합하는지를 결정 알고리즘으로 계속 구해가는 방식
function count(stable, dist) {
  let cnt = 1;
  let ep = stable[0];

  for (let i = 1; i < stable.length; i++) {
    if (stable[i] - ep >= dist) {
      cnt++;
      ep = stable[i];
    }
  }

  return cnt;
}

function solution(stable, num) {
  let answer = 0;

  stable.sort((a, b) => a - b);

  let lt = 1;
  let rt = stable[stable.length - 1];

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (count(stable, mid) >= num) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

const tc = [1, 2, 8, 4, 9];
const num = 3;

console.log(solution(tc, num));
