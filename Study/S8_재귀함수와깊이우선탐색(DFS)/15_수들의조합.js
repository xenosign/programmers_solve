function solution(nums, m, mul) {
  let answer = 0;
  const tmpArr = [];

  for (let i = 0; i < m; i++) {
    tmpArr.push(0);
  }

  function DFS(L, s) {
    if (L === m) {
      const sum = tmpArr.reduce((acc, cur) => acc + cur);
      if (sum % mul === 0) answer++;
    } else {
      for (let i = s; i < nums.length; i++) {
        tmpArr[L] = nums[i];
        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 0);

  return answer;
}

const nums = [2, 4, 5, 8, 12];

console.log(solution(nums, 3, 6));
