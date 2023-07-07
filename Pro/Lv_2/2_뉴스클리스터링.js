// https://school.programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  let answer = 0;

  const str1Arr = [];
  const str2Arr = [];

  const regex = /[a-zA-Z]/;

  const inter = [];

  for (let i = 0; i < str1.length - 1; i++) {
    if (regex.test(str1[i]) && regex.test(str1[i + 1]))
      str1Arr.push(str1[i].toUpperCase() + str1[i + 1].toUpperCase());
  }

  for (let j = 0; j < str2.length - 1; j++) {
    if (regex.test(str2[j]) && regex.test(str2[j + 1]))
      str2Arr.push(str2[j].toUpperCase() + str2[j + 1].toUpperCase());
  }

  const str1Len = str1Arr.length;
  const str2Len = str2Arr.length;

  let shortArr = [];
  let longArr = [];

  if (str1Len >= str2Len) {
    longArr = [...str1Arr];
    shortArr = [...str2Arr];
  } else {
    longArr = [...str2Arr];
    shortArr = [...str1Arr];
  }

  const tmpLongArr = [...longArr];

  // 교집합 만들기
  for (let i = 0; i < shortArr.length; i++) {
    for (let j = 0; j < tmpLongArr.length; j++) {
      if (shortArr[i] === tmpLongArr[j]) {
        inter.push(shortArr[i]);
        tmpLongArr.splice(j, 1);
        break;
      }
    }
  }

  // 합집합의 길이는 A + B - A ⍝ B 이다
  const unionLen = str1Len + str2Len - inter.length;

  if (unionLen !== 0) {
    answer = Math.floor((inter.length / unionLen) * 65536);
  } else {
    answer = 65536;
  }

  return answer;
}

const tc1 = 'AAbbaa_AAbb';
const tc2 = 'BBB';

console.log(solution(tc1, tc2));
