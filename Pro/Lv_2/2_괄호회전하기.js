// https://school.programmers.co.kr/learn/courses/30/lessons/76502

function solution(s) {
  let answer = 0;

  const strArr = s.split('');

  for (let i = 0; i < strArr.length; i++) {
    const stack = [];
    let flag = true;

    for (let j = 0; j < strArr.length; j++) {
      if (strArr[j] === '(' || strArr[j] === '{' || strArr[j] === '[') {
        stack.push(strArr[j]);
      } else if (strArr[j] === ')') {
        const lastEl = stack[stack.length - 1];
        if (lastEl === '(') {
          stack.pop();
        } else {
          flag = false;
        }
      } else if (strArr[j] === '}') {
        const lastEl = stack[stack.length - 1];
        if (lastEl === '{') {
          stack.pop();
        } else {
          flag = false;
        }
      } else if (strArr[j] === ']') {
        const lastEl = stack[stack.length - 1];
        if (lastEl === '[') {
          stack.pop();
        } else {
          flag = false;
        }
      }
    }

    if (flag && stack.length === 0) answer++;
    strArr.push(strArr.shift());
  }

  return answer;
}

const tc = '[](){}';

console.log(solution(tc));
