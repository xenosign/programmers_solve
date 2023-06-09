function solution(str) {
  let answer = '';

  // 내 풀이
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = i + 1; j < arr.length; j++) {
  //     if (arr[i] === arr[j]) {
  //       arr.splice(j, 1);
  //       j -= 1;
  //     }
  //   }
  // }
  // answer = arr.join('');

  // 강의 풀이
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === i) answer += str[i];
  }

  return answer;
}

const ex = 'ksekkset';

console.log(solution(ex));
