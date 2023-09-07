// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  const answer = [];

  const regToday = new Date(today.replace(/[.]/g, '-'));
  const termsObj = {};
  const expridationArr = [];

  terms.forEach((el) => {
    const [contract, period] = el.split(' ');
    termsObj[contract] = Number(period);
  });

  privacies.forEach((el) => {
    const tmpPrivacyArr = el.split(' ');
    const eachDate = new Date(tmpPrivacyArr[0].replace(/[.]/g, '-'));

    eachDate.setMonth(eachDate.getMonth() + termsObj[tmpPrivacyArr[1]]);
    expridationArr.push(eachDate);
  });

  for (let i = 0; i < expridationArr.length; i++) {
    if (expridationArr[i] <= regToday) answer.push(i + 1);
  }

  return answer;
}

const today = '2022.05.19';
const terms = ['A 6', 'B 12', 'C 3'];
const privacies = [
  '2021.05.02 A',
  '2021.07.01 B',
  '2022.02.19 C',
  '2022.02.20 C',
];

console.log(solution(today, terms, privacies));
