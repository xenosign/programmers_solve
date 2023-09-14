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

// 짝수면 마지막 비트를 0 에서 1 로, 홀수면 마지막으로 01 이 나온 지점을 10 으로 변경한다
function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      answer.push(numbers[i] + 1);
    } else {
      let binary = numbers[i].toString(2);
      const binaryPlusOneLen = (numbers[i] + 1).toString(2).length;

      if (binary.length !== binaryPlusOneLen)
        binary = binary.padStart(binaryPlusOneLen, '0');

      const indexForZeroOne = binary.lastIndexOf('01');

      const addNum = 2 ** (binary.length - indexForZeroOne - 2);

      answer.push(numbers[i] + addNum);
    }
  }

  return answer;
}

const numbers = [
  1001, 337, 0, 1, 333, 673, 343, 221, 898, 997, 121, 1015, 665, 779, 891, 421,
  222, 256, 512, 128, 100,
];

console.log(solution(numbers));
