// // 무한 재귀 버전, 계산할 때마다 모든 트리의 값을 카운팅 함
// function solution(n, r) {
//   let answer = 0;
//   function combination(n, r) {
//     // n 이 r 과 같으면 3개에서 3개 뽑는 법은 1개 니까 1 리턴 / r 이 0 이면 1 리턴
//     if (n === r || r === 0) return 1;
//     return combination(n - 1, r - 1) + combination(n - 1, r);
//   }

//   answer = combination(n, r);
//   return answer;
// }

// 한번 계산 된 n, r 의 값은 저장을 해서 다시 트리를 재귀 하지 않도록 하는 방법
function solution(n, r) {
  let answer = 0;
  // idx 는 -1 값으로 처리 되므로, 1칸 큰 저장용 박스 선언
  const box = Array.from(Array(n + 1), () => Array(r + 1).fill(0));

  function combination(n, r) {
    // 박스의 저장 된 값이 있으면, 계산하지 않고 꺼내서 바로 사용
    if (box[n][r] > 0) return box[n][r];
    if (n === r || r === 0) return 1;
    // 해당 경우를 제외하고는 재귀로 계산된 값을 박스에 저장
    box[n][r] = combination(n - 1, r - 1) + combination(n - 1, r);
    return box[n][r];
  }

  answer = combination(n, r);
  return answer;
}

console.log(solution(5, 3));
