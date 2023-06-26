// https://school.programmers.co.kr/learn/courses/30/lessons/12977

// 내 풀이
function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const num = nums[i] + nums[j] + nums[k];
        let flag = false;
        for (let l = 2; l < num; l++) {
          if (num % l === 0) {
            flag = true;
            break;
          }
        }
        if (!flag) answer++;
      }
    }
  }

  return answer;
}

const tc = [1, 2, 3, 4];

console.log(solution(tc));
