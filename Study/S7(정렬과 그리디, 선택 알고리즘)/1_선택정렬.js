// // 내 풀이
// function solution(arr) {
//   let answer = [];

//   answer = arr.sort((a, b) => a - b);

//   return answer;
// }

// 수업 풀이
function solution(arr) {
  const answer = arr;

  for (let i = 0; i < answer.length - 1; i++) {
    let idx = i;
    for (let j = i + 1; j < answer.length; j++) {
      if (answer[j] < answer[idx]) idx = j;
    }
    [answer[i], answer[idx]] = [answer[idx], answer[i]];
  }

  return answer;
}

const tc = [13, 5, 11, 7, 23, 15];

console.log(solution(tc));
