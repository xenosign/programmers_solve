// https://velog.io/@jeongin/Javascript-%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98

// 재귀 버전
function solution(a) {
  function sum(num) {
    if (num === 1) return 1;
    return num + sum(num - 1);
  }

  return sum(a);
}

console.log(solution(100));
