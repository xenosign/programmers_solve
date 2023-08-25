// // 내 풀이, 큐에다가 노드를 넣고 이걸 target 을 찾을 때 까지 돌리기
// // 단, 이전 레벨의 노드가 들어가는 문제점은 있음 + 필요 없는 연산이 포함
// function solution(start, target) {
//   let answer = 0;
//   const queue = [];
//   queue.push(start);

//   while (queue.length) {
//     if (queue.indexOf(target) !== -1) break;
//     answer++;
//     const len = queue.length;
//     for (let i = 0; i < len; i++) {
//       const node = queue.shift();
//       queue.push(node - 1);
//       queue.push(node + 1);
//       queue.push(node + 5);
//     }
//   }

//   return answer;
// }

// 수업 풀이
function solution(start, target) {
  let answer = 0;
  // 해당 값이 사용 되었는지를 체크하는 체크용 배열
  const check = Array.from({ length: 10001 }, () => 0);
  // 실제 start, target 이 포함되는 거리 배열, 해당 index 위치에 몇번째에 해당 값이 들어 갔는지를 기록하고 해당 값을 리턴
  const dis = Array.from({ length: 10001 }, () => 0);
  const queue = [];

  check[start] = 1;
  queue.push(start);
  // 시작점을 0 레벨로 기록
  dis[start] = 0;

  while (queue.length) {
    const node = queue.shift();
    // -1, +1, +5 로 갈 수 있으므로 아래와 같은 for 문 사용
    for (const nextNode of [node - 1, node + 1, node + 5]) {
      // 타겟에 도달하면 이전 기록된 값에 +1 을 해서 리턴
      if (nextNode === target) {
        answer = dis[node] + 1;
        return answer;
      }
      // 노드가 범위 값을 벗어나지 않고, 사용 된적이 없으면 다음 노드들을 푸쉬, 여기서 내 풀이와의 차이점 발생
      if (nextNode > 0 && nextNode < 10001 && check[nextNode] === 0) {
        // check 배열에 추가
        check[nextNode] = 1;
        // 노드들 추가
        queue.push(nextNode);
        // 거리 배열에 이전 노드의 레벨 값 +1 을 푸쉬
        dis[nextNode] = dis[node] + 1;
      }
    }
  }

  return answer;
}

console.log(solution(8, 3));
