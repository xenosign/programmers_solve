// 내 풀이
// 순서를 바꿀 때는 출력 포지션을 함수 위에 두면, 역순으로 아래에 뒤면 정방향으로 나옴
function solution(n) {
  let answer = '';
  function printBinary(num) {
    if (num === 0) return 0;
    printBinary(Math.floor(num / 2));
    // 여기가 출력 포지션
    answer += String(num % 2);
    return 0;
  }
  printBinary(n);
  return answer;
}
const num = 11;

console.log(solution(num));
