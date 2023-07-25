// https://velog.io/@jeongin/Javascript-%EC%9E%AC%EA%B7%80%ED%95%A8%EC%88%98

// 재귀 버전
function binary(num) {
  if (num === 1 || num === 0) {
    return String(num);
  }
  return binary(Math.floor(num / 2)) + String(num % 2);
}

console.log(binary(11));
