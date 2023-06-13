// // 내 풀이
// function solution(str, letter) {
//   const answer = [];
//   const idxArr = [];
//   let defArr = [];

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) idxArr.push(i);
//   }

//   for (let i = 0; i < str.length; i++) {
//     defArr = [];
//     for (let j = 0; j < idxArr.length; j++) {
//       defArr.push(Math.abs(idxArr[j] - i));
//     }
//     answer.push(Math.min(...defArr));
//   }

//   return answer;
// }

// 수업 풀이
function solution(str, letter) {
  const answer = [];

  let p = str.length + 1000;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }

  p = str.length + 1000;

  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === letter) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }

  return answer;
}

const exStr = 'teachermode';
const exLetter = 'e';

console.log(solution(exStr, exLetter));
