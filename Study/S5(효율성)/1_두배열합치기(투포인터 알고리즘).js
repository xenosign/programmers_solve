// // 내 풀이
// function solution(arr1, arr2) {
//   let answer = [];

//   const combineArr = [...arr1, ...arr2];

//   answer = combineArr.sort((a, b) => a - b);

//   return answer;
// }

// 수업 풀이
function solution(arr1, arr2) {
  const answer = [];

  let p1 = 0;
  let p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  while (p1 < arr1.length) answer.push(arr1[p1++]);
  while (p2 < arr2.length) answer.push(arr2[p2++]);

  return answer;
}

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];

console.log(solution(arr1, arr2));

// GPT Says

// 위의 두 함수 solution1과 solution2는 두 개의 배열 arr1과 arr2를 합치고 정렬한 결과를 반환하는 함수입니다
// 두 함수의 효율성을 비교해보겠습니다.
// solution1 함수의 경우, 배열 합치기를 위해 스프레드 연산자를 사용하여 arr1과 arr2를 합친 combineArr을 생성한 후,
// combineArr을 오름차순으로 정렬하여 answer에 저장합니다.
// 이 함수는 내장된 sort 메서드를 사용하기 때문에 시간 복잡도는 O(n log n)입니다.
// 배열 합치기를 위해 추가적인 메모리 공간이 필요하며, sort 메서드의 동작에 따라 정렬 알고리즘의 효율성이 달라질 수 있습니다.

// solution2 함수의 경우, 두 개의 포인터 p1과 p2를 사용하여 arr1과 arr2를 동시에 탐색하면서 작은 값을 answer에 추가
// 탐색이 끝난 후에 남은 배열 요소들을 answer에 추가합니다. 이 함수는 두 배열을 한 번씩 순회하므로 시간 복잡도는 O(n+m)입니다.
// 추가적인 메모리 공간이 필요하지 않으며, 두 배열이 이미 정렬되어 있다는 가정하에 효율적으로 동작합니다.

// 따라서, solution2 함수의 효율성이 더 좋습니다.
// 특히 배열이 이미 정렬되어 있는 경우 solution2 함수는 solution1 함수보다 성능적으로 우수한 결과를 보일 수 있습니다.
