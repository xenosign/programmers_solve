// // 내 풀이
// function solution(N, K) {
//   let answer = '';
//   const princesArr = [];

//   for (let i = 1; i <= N; i++) {
//     princesArr.push(String(i));
//   }

//   let idx = 0;
//   while (princesArr.length > 1) {
//     idx += K;
//     if (idx > princesArr.length) idx %= princesArr.length;

//     princesArr.splice(idx - 1, 1);
//     idx--;
//   }

//   answer = princesArr.pop();

//   return answer;
// }

// 수업 풀이
function solution(N, K) {
  let answer = 0;

  const queue = Array.from({ length: N }, (v, i) => i + 1);

  while (queue.length) {
    for (let i = 1; i < K; i++) queue.push(queue.shift());
    queue.shift();
    if (queue.length === 1) answer = queue.shift();
  }

  return answer;
}

const princes = 8;
const num = 3;

console.log(solution(princes, num));
