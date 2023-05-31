function solution(A, B) {
  const answer = [];

  // // 내 풀이
  // for (let i = 0; i < A.length; i++) {
  //   if (A[i] === B[i]) {
  //     answer.push('D');
  //   } else if (A[i] + B[i] === 3) {
  //     if (A[i] > B[i]) {
  //       answer.push('A');
  //     } else {
  //       answer.push('B');
  //     }
  //   } else if (A[i] + B[i] === 4) {
  //     if (A[i] > B[i]) {
  //       answer.push('B');
  //     } else {
  //       answer.push('A');
  //     }
  //   } else if (A[i] + B[i] === 5) {
  //     if (A[i] > B[i]) {
  //       answer.push('A');
  //     } else {
  //       answer.push('B');
  //     }
  //   } else {
  //     console.log('wrong input');
  //   }
  // }

  // 강의 풀이
  // 비기는 케이스와 A가 이기는 케이스를 나누고 나머지는 전부 B가 이긴다 처리
  for (let i = 0; i < A.length; i++) {
    if (A[i] === B[i]) answer.push('D');
    else if (A[i] === 1 && B[i] === 3) answer.push('A');
    else if (A[i] === 2 && B[i] === 1) answer.push('A');
    else if (A[i] === 3 && B[i] === 2) answer.push('A');
    else answer.push('B');
  }

  return answer;
}

const ex1 = [2, 3, 3, 1, 3];
const ex2 = [1, 1, 2, 2, 3];

console.log(solution(ex1, ex2));
