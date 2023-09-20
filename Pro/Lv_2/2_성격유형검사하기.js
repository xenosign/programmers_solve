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
        resultObj[survey[i][1]] = choices[i] - 4;
      } else {
        resultObj[survey[i][1]] += choices[i] - 4;
      }
    }
  }

  return answer;
}

const survey = ['AN', 'CF', 'MJ', 'RT', 'NA'];
const choices = [5, 3, 2, 7, 5];

console.log(solution(survey, choices));
