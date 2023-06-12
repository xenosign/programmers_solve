// // 내 풀이
// function solution(str) {
//   let answer = 'NO';

//   const lowerCaseStr = str.toLowerCase();

//   const onlyAlphabetArr = lowerCaseStr.match(/[a-zA-Z]/g);
//   const onlyAlphabetStr = onlyAlphabetArr.join('');
//   const reverseAlphabetStr = onlyAlphabetArr.reverse().join('');

//   if (onlyAlphabetStr === reverseAlphabetStr) answer = 'YES';

//   return answer;
// }

// 수업 풀이
function solution(str) {
  let answer = 'YES';

  const alphabetStr = str.toLowerCase().replace(/[^a-z]/g, '');

  if (alphabetStr.split('').reverse().join('') !== alphabetStr) answer = 'NO';

  return answer;
}

const ex = 'found7 time: study; Yduts; emit, 7Dnuof';

console.log(solution(ex));
