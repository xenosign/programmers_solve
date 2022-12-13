// @ts-nocheck
// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(k, tangerine) {
  // Map 이라는 객체에 대해서 알기
  // Map(5) { 1 => 1, 3 => 2, 2 => 2, 5 => 2, 4 => 1 }
  const kind = new Map();
  let answer = 0;
  let count = k;

  // 모든 귤을 순회하며 해당 귤의 크기에 Map 에 넣기
  tangerine.forEach((el) => {
    kind.set(el, kind.has(el) ? kind.get(el) + 1 : 1);
  });

  // 크기에 따른 귤의 개수가 있는 1 인덱스 값으로 정렬
  const sortArr = [...kind].sort((a, b) => b[1] - a[1]);

  // BOX에 담기
  sortArr.forEach((arr) => {
    // 담은 귤의 수 만큼 뺄 것이므로 count 가 0보다 클 때만 담기
    if (count > 0) {
      // 담을 개수 - 귤의 개수
      count -= arr[1];

      // 담게 되면 Box에 새로운 크기의 귤이 들어 오므로 1증가
      answer++;
    }
  });

  return answer;
}

const testCase = [1, 1, 1, 1, 2, 2, 2, 3];

console.log('sol', solution(1, testCase));
