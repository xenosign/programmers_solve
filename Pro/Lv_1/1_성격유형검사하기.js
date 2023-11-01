// https://school.programmers.co.kr/learn/courses/30/lessons/118666

function solution(survey, choices) {
  let answer = '';
  const resultObj = {};

  for (let i = 0; i < survey.length; i++) {
    if (choices[i] > 4) {
      if (resultObj[survey[i][1]] === undefined) {
        resultObj[survey[i][1]] = choices[i] - 4;
      } else {
        resultObj[survey[i][1]] += choices[i] - 4;
      }
    } else {
      if (resultObj[survey[i][0]] === undefined) {
        resultObj[survey[i][0]] = 4 - choices[i];
      } else {
        resultObj[survey[i][0]] += 4 - choices[i];
      }
    }
  }

  // RT - CF - JM - AN
  const rtArr = [
    ['R', 0],
    ['T', 0],
  ];
  const cfArr = [
    ['C', 0],
    ['F', 0],
  ];
  const jmArr = [
    ['J', 0],
    ['M', 0],
  ];
  const anArr = [
    ['A', 0],
    ['N', 0],
  ];

  for (const keys in resultObj) {
    if (keys === 'R') rtArr[0][1] += resultObj[keys];
    else if (keys === 'T') rtArr[1][1] += resultObj[keys];
    else if (keys === 'C') cfArr[0][1] += resultObj[keys];
    else if (keys === 'F') cfArr[1][1] += resultObj[keys];
    else if (keys === 'J') jmArr[0][1] += resultObj[keys];
    else if (keys === 'M') jmArr[1][1] += resultObj[keys];
    else if (keys === 'A') anArr[0][1] += resultObj[keys];
    else if (keys === 'N') anArr[1][1] += resultObj[keys];
  }

  rtArr.sort((a, b) => b[1] - a[1]);
  cfArr.sort((a, b) => b[1] - a[1]);
  jmArr.sort((a, b) => b[1] - a[1]);
  anArr.sort((a, b) => b[1] - a[1]);

  answer += rtArr[0][0];
  answer += cfArr[0][0];
  answer += jmArr[0][0];
  answer += anArr[0][0];

  return answer;
}

const survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
const choices = [5, 3, 2, 7, 5];

// const survey = ['TR', 'RT', 'TR'];
// const choices = [7, 1, 3];

console.log(solution(survey, choices));
