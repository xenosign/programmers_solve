// 수업 풀이
// 이분 검색으로 DVD의 최소 용량과 최대 용량의 mid 값으로 몇장이 나오는지를 계산
// 이게 num 에 일치 하는지로 처리
function count(songs, capacity) {
  let cnt = 1;
  let sum = 0;
  // 더하고 판단하는게 아니라 더한 값을 판단한 다음, 더한다
  for (const x of songs) {
    if (sum + x > capacity) {
      cnt++;
      // 하나는 더해진 것이므로 x 를 sum 에 넣고 다음 값 시작
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
}

function solution(num, songs) {
  let answer = 0;

  let lt = Math.max(...songs);
  let rt = songs.reduce((acc, cur) => acc + cur, 0);

  // 외워야 할 포인트, 이분 검색은 무조건 해당 조건을 사용한다
  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (count(songs, mid) <= num) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

const tc = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = 3;

console.log(solution(num, tc));
