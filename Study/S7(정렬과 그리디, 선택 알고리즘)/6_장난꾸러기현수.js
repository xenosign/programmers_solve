// // 내 풀이
// function solution(arr) {
//   const answer = [];

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i - 1] >= arr[i] && answer.length === 0) answer.push(i);
//     else if (arr[i - 1] > arr[i] && answer.length > 0) answer.push(i + 1);
//   }

//   return answer;
// }

// 수업 풀이
// 정렬한 거랑 비교하여 다른 idx 값 푸쉬
function solution(arr) {
  const answer = [];

  const sortedArr = arr.slice();
  sortedArr.sort((a, b) => a - b);

  sortedArr.map((el, idx) => {
    if (el !== arr[idx]) answer.push(idx + 1);
    return 1;
  });

  return answer;
}

const tc = [120, 125, 152, 130, 135, 135, 143, 127, 160];
// const tc = [120, 130, 150, 150, 130, 150];

console.log(solution(tc));
