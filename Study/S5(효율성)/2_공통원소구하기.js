// // 내 풀이
// function solution(arr1, arr2) {
//   let answer = [];

//   const commonArr = arr1.filter((el) => arr2.includes(el));

//   answer = commonArr.sort();

//   return answer;
// }

// 수업 풀이
function solution(arr1, arr2) {
  const answer = [];

  const sortedArr1 = arr1.sort();
  const sortedArr2 = arr2.sort();

  let p1 = 0;
  let p2 = 0;

  while (p1 < sortedArr1.length && p2 < sortedArr2.length) {
    if (sortedArr1[p1] === sortedArr2[p2]) {
      answer.push(sortedArr1[p1++]);
      p2++;
    } else if (sortedArr1[p1] < sortedArr2[p2]) {
      p1++;
    } else if (sortedArr1[p1] > sortedArr2[p2]) {
      p2++;
    }
  }

  return answer;
}

const arr1 = [1, 3, 9, 5, 2];
const arr2 = [3, 2, 5, 7, 8];

console.log(solution(arr1, arr2));
