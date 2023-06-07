// 내 풀이
function solution(arr) {
  let answer = 0;

  const firstLen = arr.length;
  const secondLen = arr[0].length;

  let sumRow = 0;
  let maxSumRow = 0;
  const sumColArr = Array.from({ length: firstLen }, () => 0);
  let maxSumCol = 0;
  let maxSumDia1 = 0;
  let maxSumDia2 = 0;

  for (let i = 0; i < firstLen; i++) {
    for (let j = 0; j < secondLen; j++) {
      sumRow += arr[i][j];
      sumColArr[j] += arr[i][j];
      if (i === j) maxSumDia1 += arr[i][j];
      if (firstLen - (i + 1) === j) maxSumDia2 += arr[i][j];
    }
    if (sumRow > maxSumRow) maxSumRow = sumRow;
    sumRow = 0;
  }

  maxSumCol = Math.max(...sumColArr);
  answer = Math.max(maxSumRow, maxSumCol, maxSumDia1, maxSumDia2);

  return answer;
}

// // 수업 풀이
// function solution(arr) {
//   let answer = 0;

//   const firstLen = arr.length;
//   const secondLen = arr[0].length;

//   let sumRow = 0;
//   let maxSumRow = 0;
//   let sumCol = 0;
//   let maxSumCol = 0;
//   let maxSumDia1 = 0;
//   let maxSumDia2 = 0;

//   for (let i = 0; i < firstLen; i++) {
//     for (let j = 0; j < secondLen; j++) {
//       sumRow += arr[i][j];
//       sumCol += arr[j][i];
//       if (i === j) maxSumDia1 += arr[i][j];
//       if (firstLen - (i + 1) === j) maxSumDia2 += arr[i][j];
//     }
//     if (sumRow > maxSumRow) maxSumRow = sumRow;
//     if (sumCol > maxSumCol) maxSumCol = sumCol;
//     sumRow = 0;
//     sumCol = 0;
//   }

//   answer = Math.max(maxSumRow, maxSumCol, maxSumDia1, maxSumDia2);

//   return answer;
// }

// const ex = [
//   [10, 13, 10, 12, 15],
//   [12, 39, 30, 23, 11],
//   [11, 25, 50, 53, 15],
//   [19, 27, 29, 37, 27],
//   [19, 13, 30, 13, 19],
// ];

// console.log(solution(ex));
