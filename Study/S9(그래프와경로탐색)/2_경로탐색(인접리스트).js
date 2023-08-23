function solution(n, arr) {
  let answer = 0;
  const graph = Array.from(Array(n + 1), () => []);
  const check = Array.from({ length: n + 1 }, () => 0);
  const path = [];

  // 해당 노드에서 갈 수 있는 노드만 배열에 담는다
  for (const [a, b] of arr) {
    graph[a].push(b);
  }

  function DFS(v) {
    if (v === n) {
      answer++;
      console.log(path);
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        // graph[v][i] 가 갈 수 있는 노드 번호가 된다
        if (check[graph[v][i]] === 0) {
          check[graph[v][i]] = 1;
          path.push(graph[v][i]);
          DFS(graph[v][i]);
          path.pop();
          check[graph[v][i]] = 0;
        }
      }
    }
  }

  check[1] = 1;
  DFS(1);

  return answer;
}

const arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];

console.log(solution(5, arr));
