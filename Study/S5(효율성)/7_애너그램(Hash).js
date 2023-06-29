// // 내 풀이
// function solution(firstStr, secondStr) {
//   let answer = 'NO';

//   const hashTable1 = new Map();
//   const hashTable2 = new Map();

//   for (const x of firstStr) {
//     if (hashTable1.has(x)) {
//       hashTable1.set(x, hashTable1.get(x) + 1);
//     } else {
//       hashTable1.set(x, 1);
//     }
//   }

//   for (const x of secondStr) {
//     if (hashTable2.has(x)) {
//       hashTable2.set(x, hashTable2.get(x) + 1);
//     } else {
//       hashTable2.set(x, 1);
//     }
//   }

//   const arrFromMap1 = [...hashTable1].sort();
//   const arrFromMap2 = [...hashTable2].sort();

//   const strFromArr1 = JSON.stringify(arrFromMap1);
//   const strFromArr2 = JSON.stringify(arrFromMap2);

//   if (strFromArr1 === strFromArr2) answer = 'YES';

//   return answer;
// }

// 수업 풀이
function solution(firstStr, secondStr) {
  const answer = 'YES';
  const sH = new Map();

  for (const x of firstStr) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }

  for (const x of secondStr) {
    if (!sH.has(x) || sH.get(x) === 0) {
      return 'NO';
    }
    sH.set(x, sH.get(x) - 1);
  }

  return answer;
}

const str1 = 'abaCC';
const str2 = 'Caaab';

console.log(solution(str1, str2));
