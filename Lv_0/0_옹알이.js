// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/120956
const testArr = ['aya', 'yee', 'u', 'maa', 'wyeoo'];

function solution(babbling) {
  let answer = 0;
  const words = ['aya', 'ye', 'woo', 'ma'];

  const padArr = babbling.map((el) => {
    for (let i = 0; i < words.length; i++) {
      const padStr = '0'.repeat(words[i].length);
      el = el.replace(words[i], padStr);
    }
    return el;
  });

  console.log(padArr);

  const resultArr = padArr.map((el) => {
    return el.replace(/0/g, '');
  });

  console.log(resultArr);
  console.log(resultArr.filter((el) => el === ''));

  answer = resultArr.filter((el) => el === '').length;

  return answer;
}

console.log(solution(testArr));
