// https://school.programmers.co.kr/learn/courses/30/lessons/68936?language=javascript

function solution(arr) {
  const answer = [];
  const quadZero = [];
  const quadOne = [];

  function recursiveFunc(x, y, size) {
    if (size <= 2) return 0;

    const coordinateArr = [];
    coordinateArr.push([y, x]);
    coordinateArr.push([y, x + size / 2]);
    coordinateArr.push([y + size / 2, x]);
    coordinateArr.push([y + size / 2, x + size / 2]);

    for (let i = 0; i < coordinateArr.length; i++) {
      let flag = false;
      const num = arr[coordinateArr[i][0]][coordinateArr[i][1]];

      for (
        let j = coordinateArr[i][0];
        j < coordinateArr[i][0] + size / 2;
        j++
      ) {
        for (
          let k = coordinateArr[i][1];
          k < coordinateArr[i][1] + size / 2;
          k++
        ) {
          if (num !== arr[j][k]) flag = true;
        }
      }

      if (flag) {
        recursiveFunc(coordinateArr[i][0], coordinateArr[i][1], size / 2);
      } else if (!flag && num === 0) {
        quadZero.push(size / 2);
      } else if (!flag && num === 1) {
        quadOne.push(size / 2);
      }
    }
  }

  recursiveFunc(0, 0, arr.length);

  let zeroCount = 0;
  let oneCount = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (arr[i][j] === 0) zeroCount++;
      else oneCount++;
    }
  }

  const quadZeroCount = quadZero.reduce((acc, cur) => acc + cur ** 2, 0);
  const quadOneCount = quadOne.reduce((acc, cur) => acc + cur ** 2, 0);

  answer.push(zeroCount - quadZeroCount + quadZero.length);
  answer.push(oneCount - quadOneCount + quadOne.length);

  return answer;
}

// const arr = [
//   [1, 1, 0, 0],
//   [1, 0, 0, 0],
//   [1, 0, 0, 1],
//   [1, 1, 1, 1],
// ];

const arr = [
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
];

// const arr = [
//   [1, 1, 1, 1, 1, 1, 1, 1],
//   [0, 1, 1, 1, 1, 1, 1, 1],
//   [0, 0, 0, 0, 1, 1, 1, 1],
//   [0, 1, 0, 0, 1, 1, 1, 1],
//   [0, 0, 0, 0, 0, 0, 1, 1],
//   [0, 0, 0, 0, 0, 0, 0, 1],
//   [0, 0, 0, 0, 1, 0, 0, 1],
//   [0, 0, 0, 0, 1, 1, 1, 1],
// ];

console.log(solution(arr));
