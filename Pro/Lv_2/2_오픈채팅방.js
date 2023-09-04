//  https://school.programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
  const answer = [];

  const userData = {};

  const recordArr = record.map((el) => el.split(' '));

  recordArr.forEach((el) => {
    if (el[0] !== 'Leave') userData[el[1]] = el[2];
  });

  for (let i = 0; i < recordArr.length; i++) {
    if (recordArr[i][0] === 'Enter') {
      answer.push(`${userData[recordArr[i][1]]}님이 들어왔습니다.`);
    } else if (recordArr[i][0] === 'Leave') {
      answer.push(`${userData[recordArr[i][1]]}님이 나갔습니다.`);
    }
  }

  return answer;
}

const record = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];

console.log(solution(record));
