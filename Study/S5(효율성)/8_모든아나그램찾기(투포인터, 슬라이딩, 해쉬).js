// // 내 풀이
// // 시간 복잡도가 ogLen x comLen 이라 구림
// function solution(ogStr, comStr) {
//   let answer = 0;
//   const ogLen = ogStr.length;
//   const comLen = comStr.length;

//   for (let i = 0; i < ogLen - comLen + 1; i++) {
//     const hashTable = new Map();
//     for (let j = i; j < i + comLen; j++) {
//       if (hashTable.has(ogStr[j]))
//         hashTable.set(ogStr[j], hashTable.get(ogStr[j]) + 1);
//       else hashTable.set(ogStr[j], 1);
//     }

//     for (let k = 0; k < comLen; k++) {
//       if (!hashTable.has(comStr[k]) || hashTable.get(comStr[k]) === 0) break;
//       hashTable.set(comStr[k], -1);
//       if (k === comLen - 1) answer++;
//     }
//   }

//   return answer;
// }

// 수업 풀이
// 시간 복잡도가 ogLen + comLen 이라 좋음
function compareMap(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (const [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(ogStr, comStr) {
  let answer = 0;

  const ogMap = new Map();
  const comMap = new Map();

  for (const x of comStr) {
    if (comMap.has(x)) comMap.set(x, comMap.get(x) + 1);
    else comMap.set(x, 1);
  }

  for (let i = 0; i < comStr.length - 1; i++) {
    if (ogMap.has(ogStr[i])) ogMap.set(ogStr[i], ogMap.get(ogStr[i]) + 1);
    else ogMap.set(ogStr[i], 1);
  }

  let lt = 0;
  for (let rt = comStr.length - 1; rt < ogStr.length; rt++) {
    if (ogMap.has(ogStr[rt])) ogMap.set(ogStr[rt], ogMap.get(ogStr[rt]) + 1);
    else ogMap.set(ogStr[rt], 1);
    if (compareMap(ogMap, comMap)) answer++;
    ogMap.set(ogStr[lt], ogMap.get(ogStr[lt]) - 1);
    if (ogMap.get(ogStr[lt]) === 0) ogMap.delete(ogStr[lt]);
    lt++;
  }

  return answer;
}

const str1 = 'bacaAacba';
const str2 = 'abc';

console.log(solution(str1, str2));
