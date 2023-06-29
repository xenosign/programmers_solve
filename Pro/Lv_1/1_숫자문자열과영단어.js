// https://school.programmers.co.kr/learn/courses/30/lessons/81301

// 내 풀이
function solution(str) {
  let answer = 0;
  let copyStr = str;

  while (copyStr.indexOf('zero') !== -1) {
    copyStr = copyStr.replace('zero', '0');
  }

  while (copyStr.indexOf('one') !== -1) {
    copyStr = copyStr.replace('one', '1');
  }

  while (copyStr.indexOf('two') !== -1) {
    copyStr = copyStr.replace('two', '2');
  }

  while (copyStr.indexOf('three') !== -1) {
    copyStr = copyStr.replace('three', '3');
  }

  while (copyStr.indexOf('four') !== -1) {
    copyStr = copyStr.replace('four', '4');
  }

  while (copyStr.indexOf('five') !== -1) {
    copyStr = copyStr.replace('five', '5');
  }

  while (copyStr.indexOf('six') !== -1) {
    copyStr = copyStr.replace('six', '6');
  }

  while (copyStr.indexOf('seven') !== -1) {
    copyStr = copyStr.replace('seven', '7');
  }

  while (copyStr.indexOf('eight') !== -1) {
    copyStr = copyStr.replace('eight', '8');
  }

  while (copyStr.indexOf('nine') !== -1) {
    copyStr = copyStr.replace('nine', '9');
  }

  answer = Number(copyStr);

  return answer;
}

const tc = '1234';

console.log(solution(tc));
