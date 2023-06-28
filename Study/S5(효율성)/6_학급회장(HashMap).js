// // 내 풀이
// function solution(votes) {
//   let answer = '';
//   let max = 0;

//   const candidateSet = new Set();

//   for (let i = 0; i < votes.length; i++) {
//     candidateSet.add(votes[i]);
//   }

//   const candidateArr = Array.from(candidateSet).sort();

//   for (let i = 0; i < candidateArr.length; i++) {
//     const count = votes.split('').filter((el) => el === candidateArr[i]).length;

//     if (count > max) {
//       max = count;
//       answer = candidateArr[i];
//     }
//   }

//   return answer;
// }

// 수업 풀이 (MAP 이용)
function solution(votes) {
  let answer = '';
  let max = 0;

  const hashTable = new Map();

  for (const x of votes) {
    if (hashTable.has(x)) hashTable.set(x, hashTable.get(x) + 1);
    else hashTable.set(x, 1);
  }

  for (const [key, val] of hashTable) {
    if (val > max) {
      max = val;
      answer = key;
    }
  }

  return answer;
}

const tc = 'BACBACCACCBDEDE';

console.log(solution(tc));
