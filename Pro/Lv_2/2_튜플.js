// https://school.programmers.co.kr/learn/courses/30/lessons/64065

function solution(str) {
  const answer = [];
  const strAnswer = [];

  const subStr = str.substr(1, str.length - 3);

  let onlyNumStr = subStr.replace(/},/g, '/');
  onlyNumStr = onlyNumStr.replace(/{/g, '');

  const tmpArr = onlyNumStr.split('/');

  const numArr = [];

  for (let i = 0; i < tmpArr.length; i++) {
    numArr.push([tmpArr[i].split(',').length, ...tmpArr[i].split(',')]);
  }

  numArr.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < numArr.length; i++) {
    strAnswer.push(
      ...numArr[i].filter((el, idx) => {
        if (idx > 0) return !strAnswer.includes(el);
        return false;
      }),
    );
  }

  for (let i = 0; i < strAnswer.length; i++) {
    answer.push(Number(strAnswer[i]));
  }

  return answer;
}

const tc = '{{2},{2,1},{2,1,3},{2,1,3,4}}';

console.log(solution(tc));
