// // 내 풀이, 이전 조합 코드를 변경
// function solution(nums, m, mul) {
//   let answer = 0;
//   const tmpArr = [];

//   for (let i = 0; i < m; i++) {
//     tmpArr.push(0);
//   }

//   function DFS(L, s) {
//     if (L === m) {
//       const sum = tmpArr.reduce((acc, cur) => acc + cur);
//       if (sum % mul === 0) answer++;
//     } else {
//       for (let i = s; i < nums.length; i++) {
//         tmpArr[L] = nums[i];
//         DFS(L + 1, i + 1);
//       }
//     }
//   }

//   DFS(0, 0);

//   return answer;
// }

// 수업 풀이
// 매개 변수로 sum 을 넘겨서 reduce 를 사용하지 않고 합산을 바로 처리
function solution(nums, m, mul) {
  let answer = 0;

  function DFS(L, s, sum) {
    if (L === m && sum % mul === 0) {
      answer++;
    } else {
      // 해당 부분 외울 것
      for (let i = s; i < nums.length; i++) {
        DFS(L + 1, i + 1, sum + nums[i]);
      }
    }
  }

  DFS(0, 0, 0);

  return answer;
}

const nums = [2, 4, 5, 8, 12];

console.log(solution(nums, 3, 6));
