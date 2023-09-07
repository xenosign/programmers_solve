// https://school.programmers.co.kr/learn/courses/30/lessons/120956

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

  const resultArr = padArr.map((el) => el.replace(/0/g, ''));

  answer = resultArr.filter((el) => el === '').length;

  return answer;
}

const testArr = ['aya', 'yee', 'u', 'maa', 'wyeoo'];

console.log(solution(testArr));
