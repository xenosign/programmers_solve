function solution(arr) {
  let answer = [];

  // // 내 풀이
  // for (let i = 0; i < arr.length; i++) {
  //   if (i === arr.findIndex((el) => el === arr[i])) answer.push(arr[i]);
  // }

  answer = arr.filter((el, idx) => arr.indexOf(el) === idx);
  return answer;
}

const ex = ['good', 'time', 'good', 'time', 'student'];

console.log(solution(ex));
