// 문제 풀이 설명
// 3 1 2 4 와 같은 배열로 각각 자리의 합을 더해서 올라가게 되면
//  4 3 6
//   7 9
//   16
// 와 같이 더 해지는데, 이를 잘라서 보면
// 3은 1번, 1은 3번, 2는 3번, 4는 1번 더해지는 것과 같다
// 이는 3부터 3C0 3C1 3C2 3C3 번 더해지는 것이라는 결과를 가진다
// 즉, 조합수를 찾는 알고리즘에 각각의 배열 순서를 더하면 끝!

function solution(N, F) {
  let answer = [];
  // 조합수의 값을 저장하기 위한 배열 선언
  const combiBox = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  // 순열을 만들 때 사용하기 위한 체크 배열, 이걸 사용하여 해당 숫자가 사용 되었는지 여부를 체크한다
  // i 값이 1 부터 시작 되기 때문에 N + 1 크기로 선언, 0 인덱스는 사용 X
  const check = Array.from({ length: N + 1 }, () => 0);
  // 임시로 만든 순열을 저장하기 위한 변수
  const tmpPermutaion = Array.from({ length: N }, () => 0);
  // 최종 적으로 숫가에 더해질 컴비네이션 값을 저장하는 배열 선언, 3C0 3C1 3C2 3C3 의 값을 배열에 저장하기 위한 배열
  const combiCnt = Array.from({ length: N }, () => 0);
  // 최초 순열 찾으면 종료 시키기 위한 flag
  let flag = false;

  function combi(n, r) {
    if (combiBox[n][r] > 0) return combiBox[n][r];
    if (n === r || r === 0) return 1;
    combiBox[n][r] = combi(n - 1, r) + combi(n - 1, r - 1);
    return combiBox[n][r];
  }

  for (let i = 0; i < N; i++) {
    // 3C0 3C1 3C2 3C3 이 순차적으로 combiCnt 에 저장이 됨
    combiCnt[i] = combi(N - 1, i);
  }

  function DFS(L, sum) {
    if (flag) return 0;
    if (L === N && sum === F) {
      answer = tmpPermutaion.slice();
      flag = true;
    } else {
      for (let i = 1; i <= N; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          tmpPermutaion[L] = i;
          DFS(L + 1, sum + combiCnt[L] * tmpPermutaion[L]);
          check[i] = 0;
        }
      }
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16));
