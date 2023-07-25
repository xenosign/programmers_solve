// 내 풀이
function solution(arr) {
  let answer = 'NO';
  const total = arr.reduce((acc, val) => acc + val, 0);
  const n = arr.length;
  let flag = false;

  function DFS(L, sum) {
    if (flag) return 0;
    if (L === n) {
      if (total - sum === sum) {
        answer = 'YES';
        flag = true;
      }
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);

  return answer;
}

const tc = [1, 3, 5, 6, 7, 10];

console.log(solution(tc));
