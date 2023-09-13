// https://school.programmers.co.kr/learn/courses/30/lessons/77885

// // 시간 초과에 막힌 풀이, 모든 것을 계산
// function solution(numbers) {
//   const answer = [];

//   for (let i = 0; i < numbers.length; i++) {
//     const ogBinary = numbers[i].toString(2);

//     let flag = true;
//     let number = numbers[i] + 1;

//     while (flag) {
//       const compBinary = number.toString(2);
//       const padOgBinary = ogBinary.padStart(compBinary.length, 0);

//       let diffCnt = 0;

//       for (let k = 0; k < compBinary.length; k++) {
//         if (padOgBinary[k] !== compBinary[k]) diffCnt++;
//       }

//       if (diffCnt <= 2 && diffCnt > 0) {
//         answer.push(number);
//         flag = false;
//       }

//       number++;
//     }
//   }

//   return answer;
// }

function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    const ogBinary = numbers[i].toString(2);

    let flag = true;
    let number = numbers[i] + 1;

    while (flag) {
      const compBinary = number.toString(2);
      const padOgBinary = ogBinary.padStart(compBinary.length, 0);

      let diffCnt = 0;

      for (let k = 0; k < compBinary.length; k++) {
        if (padOgBinary[k] !== compBinary[k]) diffCnt++;
      }

      if (diffCnt <= 2 && diffCnt > 0) {
        answer.push(number);
        flag = false;
      }

      number++;
    }
  }

  return answer;
}

const numbers = [2, 7];

console.log(solution(numbers));
