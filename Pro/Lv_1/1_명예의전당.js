// @ts-nocheck
// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  const answer = [];
  const hallOfFameArr = [];

  for (let i = 0; i < score.length; i++) {
    const minNum = Math.min(...hallOfFameArr);
    if (i < k || score[i] > minNum) hallOfFameArr.push(score[i]);

    if (hallOfFameArr.length > k) {
      const minIndex = hallOfFameArr.findIndex((el) => el === minNum);
      hallOfFameArr.splice(minIndex, 1);
    }

    answer.push(Math.min(...hallOfFameArr));
  }
  return answer;
}

const testCase = [10, 100, 20, 150, 1, 100, 200];

console.log('sol', solution(3, testCase));

//   score.map((el) => {
//     if (el > Math.min(...kArr) || kArr.length === 0) {
//       kArr.push(el);
//     }

//     if (kArr.length > k) {
//       const minNum = Math.min(...kArr);
//       const minNumIndex = kArr.findIndex((item) => item === minNum);
//       kArr.splice(minNumIndex, 1);
//     }

//     console.log(kArr);
//     answer.push(Math.min(...kArr));
//     return 0;
//   });
