function solution(nums, count) {
  const answer = [];
  const n = nums.length;
  const checkArr = Array.from({ length: n }, () => 0);
  const tmp = Array.from({ length: count }, () => 0);

  function DFS(L) {
    if (L === count) answer.push(tmp.slice());
    else {
      for (let i = 0; i < n; i++) {
        if (checkArr[i] === 0) {
          checkArr[i] = 1;
          tmp[L] = nums[i];
          DFS(L + 1);
          checkArr[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

const nums = [3, 6, 9];
const count = 2;

console.log(solution(nums, count));
