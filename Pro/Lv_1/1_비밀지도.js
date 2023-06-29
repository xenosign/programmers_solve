// https://school.programmers.co.kr/learn/courses/30/lessons/17681

// 내 풀이
function solution(n, arr1, arr2) {
  const answer = [];
  const hexArr1 = [];
  const hexArr2 = [];

  for (let i = 0; i < n; i++) {
    const hex1 = arr1[i].toString(2);
    const hex2 = arr2[i].toString(2);
    const len1 = hex1.length;
    const len2 = hex2.length;

    if (len1 !== n) {
      hexArr1.push('0'.repeat(n - len1) + hex1);
    } else {
      hexArr1.push(hex1);
    }
    if (len2 !== n) {
      hexArr2.push('0'.repeat(n - len2) + hex2);
    } else {
      hexArr2.push(hex2);
    }
  }

  for (let i = 0; i < n; i++) {
    let tmpStr = '';
    for (let j = 0; j < n; j++) {
      if (hexArr1[i][j] === '0' && hexArr2[i][j] === '0') tmpStr += ' ';
      else tmpStr += '#';
    }
    answer.push(tmpStr);
  }

  return answer;
}

// const size = 5;
// const tc1 = [9, 20, 28, 18, 11];
// const tc2 = [30, 1, 21, 17, 28];

const size = 6;
const tc1 = [46, 33, 33, 22, 31, 50];
const tc2 = [27, 56, 19, 14, 14, 10];

console.log(solution(size, tc1, tc2));
