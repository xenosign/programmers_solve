// 순회 설명

//            1
//         /  |
//        2   3
//       /|  /|
//      4 5 6 7

// 전회순위 출력 : 1 2 4 5 3 6 7 | 부 왼 오
// 중위순위 출력 : 4 2 5 1 6 3 7 | 왼 부 오
// 후위순위 출력 : 4 5 2 6 7 3 1 | 왼 오 부

function solution(v) {
  let answer = '';
  function DFS(v) {
    if (v > 7) return 0;

    // 재귀 호출 부분
    // console.log 의 위치에 따라 전위 중위 후위가 나뉨 (여기에 answer 처리 가능)
    // 제일 위에 있으면 전위, 중간이면 중위, 아래면 후위
    answer += v;
    DFS(v * 2);
    DFS(v * 2 + 1);
  }

  DFS(v);
  return answer;
}

console.log(solution(1));
