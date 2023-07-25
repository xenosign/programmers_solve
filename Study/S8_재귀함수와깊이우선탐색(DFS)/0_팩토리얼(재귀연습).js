// https://www.youtube.com/watch?v=7C9RgOcvkvo

// // 반복 버전
// function solution(n) {
//   let answer = 1;
//   for (let i = 1; i <= n; i++) {
//     answer *= i;
//   }

//   return answer;
// }

// 재귀 버전
function solution(n) {
  function factorial(num) {
    if (num <= 1) return 1;
    return num * factorial(num - 1);
  }

  return factorial(n);
}

console.log(solution(5));
