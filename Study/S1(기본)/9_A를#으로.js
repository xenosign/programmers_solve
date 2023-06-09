function solution(str) {
  let answer = '';

  // 1번 풀이
  // for (let el of str) {
  //   if (el === 'A') {
  //     answer += '#';
  //   } else {
  //     answer += el;
  //   }
  // }

  // 2번 풀이
  answer = str.replace(/A/g, '#');

  return answer;
}

const ex = 'BANANA';

console.log(solution(ex));
