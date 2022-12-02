// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/120956
const testArr = ['aya', 'yee', 'u', 'maa', 'wyeoo'];

function solution(babbling) {
  let answer = 0;
  const words = ['aya', 'ye', 'woo', 'ma'];

  const padArr = babbling.map((el) => {
    let remainStr = '';
    for (let i = 0; i < words.length; i++) {
      const padStr = '0'.repeat(words[i].length);
      remainStr = el.replace(words[i], padStr);
    }
    return remainStr;
  });

  const resultArr = padArr.map((el) => el.replace(/0/g, ''));

  answer = resultArr.filter((el) => el === '').length;

  return answer;
}

console.log(solution(testArr));
