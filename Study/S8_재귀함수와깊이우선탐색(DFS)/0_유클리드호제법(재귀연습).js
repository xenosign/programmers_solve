// https://www.youtube.com/watch?v=7C9RgOcvkvo

// 재귀 버전
function solution(num1, num2) {
  function gcd(a, b) {
    if (a % b === 0) return b;
    return gcd(b, a % b);
  }

  return gcd(num1, num2);
}

console.log(solution(192, 162));
