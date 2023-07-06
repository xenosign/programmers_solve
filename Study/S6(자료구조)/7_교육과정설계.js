// 내 풀이
function solution(plan, essential) {
  let answer = 'YES';

  const essentialQueue = [...essential];

  for (let i = 0; i < plan.length; i++) {
    if (plan[i] === essentialQueue[0]) essentialQueue.shift();
  }

  if (essentialQueue.length !== 0) answer = 'NO';

  return answer;
}

const essential = 'CBA';
const plan = 'CBDAGE';

console.log(solution(plan, essential));
