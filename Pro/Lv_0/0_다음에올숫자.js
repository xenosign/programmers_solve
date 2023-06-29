// https://school.programmers.co.kr/learn/courses/30/lessons/120924

function solution(common) {
  let answer = 0;
  let isCommon = false;
  const diff = common[1] - common[0];
  const ratio = common[1] / common[0];

  if (diff === common[2] - common[1]) isCommon = true;

  if (isCommon) {
    answer = common[common.length - 1] + diff;
  } else {
    answer = common[common.length - 1] * ratio;
  }

  return answer;
}

const tc = [2, 4, 8];

console.log('sol', solution(tc));
