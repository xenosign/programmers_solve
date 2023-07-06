// https://school.programmers.co.kr/learn/courses/30/lessons/17677

function solution(str1, str2) {
  let answer = 0;

  const str1Arr = [];
  const str2Arr = [];

  const regex = /[a-zA-Z]/;

  const inter = new Set();
  let union = [];

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
  let longLen = 0;
  if (str1Len > str2Len) {
    longLen = str1Len;
    union = [...str1Arr];
  } else {
    longLen = str2Len;
    union = [...str2Arr];
  }

  for (let k = 0; k < longLen; k++) {
    if (k < str1Len) {
      for (let l = 0; l < str2Len; l++) {
        if (str1Arr[k] === str2Arr[l]) {
          inter.add(str1Arr[k]);
        } else {
          union.push(str1Arr[k]);
        }
      }
    }
  }

  console.log(inter);
  console.log(union);

  answer = Math.floor((inter.size / union.length) * 65536);

  return answer;
}

const tc1 = 'aa1+aa2';
const tc2 = 'AAAA12';

console.log(solution(tc1, tc2));
