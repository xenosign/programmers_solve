// 내 풀이
function solution(n) {
  const answer = [];
  const checkArr = Array.from({ length: n + 1 }, () => 0);

  // 체크 배열에 1 을 걸고 재귀 호출
  // 배열이 1 이면 해당 값의 index 를 푸쉬 -> 부분 집합 구하기
  function DFS(v) {
    if (v === n + 1) {
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (checkArr[i] === 1) tmp += i;
      }
      if (tmp.length > 0) answer.push(tmp);
    } else {
      checkArr[v] = 1;
      DFS(v + 1);
      checkArr[v] = 0;
      DFS(v + 1);
    }
  }

  DFS(1);

  return answer;
}

const tc = 3;

console.log(solution(tc));
