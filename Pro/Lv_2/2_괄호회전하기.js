// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  let answer = 0;

  const strArr = s.split('');
  let stack = [];

  for (let i = 0; i < strArr.length; i++) {
    stack = [];

    for (let j = 0; j < strArr.length; j++) {
      if (
        (stack.length === 0 && strArr[j] === ')') ||
        strArr[j] === '}' ||
        strArr[j] === ']'
      ) {
        break;
      }

      if (strArr[j] === '(' || strArr[j] === '{' || strArr[j] === '[')
        stack.push(strArr[j]);
      else if (strArr[j] === ')') {
        const stackIdx = stack.indexOf('(');
        if (stackIdx === -1) break;
        stack.splice(stackIdx, 1);
      } else if (strArr[j] === '}') {
        const stackIdx = stack.indexOf('{');
        if (stackIdx === -1) break;
        stack.splice(stackIdx, 1);
      } else if (strArr[j] === ']') {
        const stackIdx = stack.indexOf('[');
        if (stackIdx === -1) break;
        stack.splice(stackIdx, 1);
      }

      if (j === strArr.length - 1 && stack.length === 0) answer++;
    }

    strArr.push(strArr.shift());
  }

  return answer;
}

const tc = '[](){}';

console.log(solution(tc));
