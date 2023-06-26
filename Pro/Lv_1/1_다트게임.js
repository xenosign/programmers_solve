// https://school.programmers.co.kr/learn/courses/30/lessons/17682

// // 내 풀이
// function solution(dartResult) {
//   let answer = 0;
//   let now = 0;
//   let before = 0;
//   let flag = false;

//   let i = 0;
//   while (i < dartResult.length) {
//     let num = 0;
//     num = Number(dartResult[i]);
//     if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
//       num = 10;
//       i++;
//     }

//     const con =
//       dartResult[i + 1] === 'S' ? 1 : dartResult[i + 1] === 'D' ? 2 : 3;

//     if (dartResult[i + 2] === '*') {
//       before = now;
//       now = num ** con;
//       if (flag) {
//         answer = answer + before * 2 + now * 2;
//         flag = false;
//       } else {
//         answer = answer + before + now * 2;
//       }

//       flag = true;
//       i += 3;
//     } else if (dartResult[i + 2] === '#') {
//       before = now;
//       now = num ** con * -1;
//       answer += now;
//       i += 3;
//     } else {
//       before = now;
//       now = num ** con;
//       answer += now;
//       i += 2;
//     }

//     console.log(answer);
//   }

//   return answer;
// }

// 내 풀이
function solution(dartResult) {
  let answer = 0;

  const orderArr = [];

  let i = 0;
  while (i < dartResult.length) {
    let num = 0;
    num = Number(dartResult[i]);
    if (dartResult[i] === '1' && dartResult[i + 1] === '0') {
      num = 10;
      i++;
    }

    const con =
      // eslint-disable-next-line no-nested-ternary
      dartResult[i + 1] === 'S' ? 1 : dartResult[i + 1] === 'D' ? 2 : 3;

    if (dartResult[i + 2] === '*') {
      orderArr.push(num ** con * 2);
      orderArr.push('*');
      i += 3;
    } else if (dartResult[i + 2] === '#') {
      orderArr.push(num ** con * -1);
      orderArr.push('#');
      i += 3;
    } else {
      orderArr.push(num ** con);
      orderArr.push('N');
      i += 2;
    }
  }

  for (let j = 1; j < orderArr.length; j += 2) {
    let previousVal = 0;
    if (orderArr[j] === '*') {
      if (orderArr[j - 3] !== undefined) previousVal = orderArr[j - 3];
      answer += orderArr[j - 1] + previousVal;
    } else if (orderArr[j] === '#') {
      answer += orderArr[j - 1];
    } else {
      answer += orderArr[j - 1];
    }
  }

  return answer;
}

// const tc = '1S2D*3T';
// const tc = '1D2S#10S';
// const tc = '1D2S0T';
const tc = '3D*3T#3D*';

console.log(solution(tc));
