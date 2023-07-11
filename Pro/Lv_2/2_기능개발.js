// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = [];
  const processArr = progresses;
  let idx = 0;

  while (idx < processArr.length) {
    for (let i = 0; i < processArr.length; i++) {
      processArr[i] += speeds[i];
    }

    let doneProress = 0;

    for (let i = idx; i < processArr.length; i++) {
      if (processArr[i] >= 100) {
        doneProress++;
        idx++;
      } else {
        break;
      }
    }

    if (doneProress !== 0) answer.push(doneProress);
  }

  return answer;
}

// const tc1 = [93, 30, 55];
// const tc2 = [1, 30, 5];
const tc1 = [95, 90, 99, 99, 80, 99];
const tc2 = [1, 1, 1, 1, 1, 1];

console.log(solution(tc1, tc2));
