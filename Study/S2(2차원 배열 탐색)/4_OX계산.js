function solution(arr) {
  let answer = 0;
  let inRow = 0;

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === 1) {
      inRow += 1;
      answer += inRow;
    } else {
      inRow = 0;
    }
  }

  return answer;
}

const ex = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(ex));
