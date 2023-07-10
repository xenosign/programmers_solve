// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = [];
  const processArr = progresses;
  let tmpCount = 0;
  let totalCount = 0;

  for (let day = 1; day < Number.MAX_SAFE_INTEGER; day++) {
    for (let i = 0; i < processArr.length; i++) {
      processArr[i] += speeds[i];
    }

    for (let j = 0; j < processArr.length; j++) {
      if (processArr[j] >= 100) {
        console.log(processArr);
        processArr[j] = Number.MIN_SAFE_INTEGER;
        tmpCount++;
        totalCount++;
      }
    }
    if (tmpCount > 0) answer.push(tmpCount);
    if (totalCount === processArr.length) break;
  }

  return answer;
}

const tc1 = [93, 30, 55];
const tc2 = [1, 30, 5];

console.log(solution(tc1, tc2));
