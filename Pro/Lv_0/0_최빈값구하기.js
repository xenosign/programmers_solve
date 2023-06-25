// https://school.programmers.co.kr/learn/courses/30/lessons/120812

// 내 풀이
function solution(array) {
  let answer = -1;

  const set = new Set();

  for (let i = 0; i < array.length; i++) {
    set.add(array[i]);
  }

  const uniqueArr = Array.from(set);
  let maxCnt = 0;

  for (let i = 0; i < uniqueArr.length; i++) {
    const cnt = array.filter((el) => el === uniqueArr[i]).length;
    if (cnt > maxCnt) {
      answer = uniqueArr[i];
      maxCnt = cnt;
    } else if (cnt === maxCnt) {
      answer = -1;
    }
  }

  return answer;
}

const tc = [1, 2, 3, 3, 3, 4];
// const tc = [1, 1, 2, 2];

console.log(solution(tc));
