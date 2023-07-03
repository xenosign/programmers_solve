// 내 풀이
function solution(str) {
  let answer = '';

  const stack = [];

  for (const x of str) {
    if (x !== '(' && stack.length === 0) {
      answer += x;
    } else if (x === '(') {
      stack.push('(');
    } else if (x === ')') {
      stack.pop();
    }
  }

  if (stack.length > 0) answer = 'NO';

  return answer;
}

const tc = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';

console.log(solution(tc));
