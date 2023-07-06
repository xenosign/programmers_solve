// 내 풀이
function solution(str) {
  let answer = 'YES';

  const stack = [];

  for (const x of str) {
    if (x === '(') {
      stack.push(x);
    } else if (stack.pop() !== '(') {
      answer = 'NO';
    }
  }

  if (stack.length > 0) answer = 'NO';

  return answer;
}

const tc = '(()(()))(())(';

console.log(solution(tc));
