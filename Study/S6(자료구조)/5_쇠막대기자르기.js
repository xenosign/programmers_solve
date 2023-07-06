// 내 풀이
function solution(str) {
  let answer = 0;

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') stack.push('(');
    else {
      stack.pop();
      if (str[i - 1] === '(') answer += stack.length;
      else answer += 1;
    }
  }

  return answer;
}

const tc = '()(((()())(())()))(())';

console.log(solution(tc));
