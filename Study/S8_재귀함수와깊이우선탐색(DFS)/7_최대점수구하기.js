function solution(limit, arr) {
  let answer = 0;

  function DFS(L, sum, time) {
    // 제한 조건 걸기, 20분 넘으면 종료
    if (time > limit) return 0;
    // 각각 이진 트리 탐색의 레벨이 배열의 끝에 도달하면 sum 의 최대값 구해 넣기
    if (L === arr.length) {
      answer = Math.max(answer, sum);
    } else {
      // 문제를 풀고 안풀고의 분기, 풀면 다음 레벨 갈 때 각각의 값 추가
      DFS(L + 1, sum + arr[L][0], time + arr[L][1]);
      // 문제를 풀고 안풀고의 분기, 안풀면 레벨만 올리기
      DFS(L + 1, sum, time);
    }
  }

  DFS(0, 0, 0);

  return answer;
}

// function solution(m, ps, pt) {
//   let answer = 0;
//   const n = ps.length;

//   function DFS(L, sum, time) {
//     console.log(time, m, L);
//     if (time > m) return 0;
//     if (L === n) {
//       answer = Math.max(answer, sum);
//     } else {
//       DFS(L + 1, sum + ps[L], time + pt[L]);
//       DFS(L + 1, sum, time);
//     }
//   }

//   DFS(0, 0, 0);

//   return answer;
// }

const tc = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];

console.log(solution(20, tc));

// const ps = [10, 25, 15, 6, 7];
// const pt = [5, 12, 8, 3, 4];

// console.log(solution(20, ps, pt));
