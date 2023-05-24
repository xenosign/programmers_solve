function solution(str, letter) {
  let answer = 0;

  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] === letter) answer++;
  // }

  answer = str.split(letter).length - 1;

  return answer;
}

const ex = 'COMPUTERPROGRAMMING';

console.log(solution(ex, 'M'));
