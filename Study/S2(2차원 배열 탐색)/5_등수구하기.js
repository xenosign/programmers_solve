// // 내 풀이
// function solution(arr) {
//   const answer = [];
//   const originArr = [...arr];

//   arr.sort((a, b) => b - a);

//   for (let i = 0; i < originArr.length; i += 1) {
//     answer.push(arr.indexOf(originArr[i]) + 1);
//   }

//   return answer;
// }

// 수업 풀이
function solution(arr) {
  const n = arr.length;
  // 배열을 n 의 길이, 각각의 값은 1로 만드는 방법, Array 객체 사용
  const answer = Array.from({ length: n }, () => 1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }

  return answer;
}

const ex = [87, 89, 92, 100, 76, 100];

console.log(solution(ex));
