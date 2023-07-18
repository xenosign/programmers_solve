// // 내 풀이
// // 기본 제공 메소드로 품
// function solution(arr, num) {
//   let answer = 0;

//   arr.sort((prev, cur) => prev - cur);
//   answer = arr.indexOf(num) + 1;

//   return answer;
// }

// 수업 풀이
// 이분 검색, 중간 값이 찾는 값 보다 큰지 작은지를 보고 작으면 중간 값 아래의 값에서 다시 검색
// N 을 logN 으로 변경
function solution(arr, num) {
  let answer = 0;

  arr.sort((prev, cur) => prev - cur);

  let lt = 0;
  let rt = arr.length - 1;

  while (lt <= rt) {
    const mid = Math.floor((lt + rt) / 2);
    if (arr[mid] === num) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > num) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

const tc = [23, 87, 65, 12, 57, 32, 99, 81];
const num = 32;

console.log(solution(tc, num));
