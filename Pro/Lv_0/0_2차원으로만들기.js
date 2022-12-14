// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/120842
function solution(num_list, n) {
  const answer = [];

  for (let i = 0; i < num_list.length; i++) {
    if (i % n === 0) answer.push([]);
    const firstIndex = Math.floor(i / n);
    // @ts-ignore
    answer[firstIndex].push(num_list[i]);
  }

  return answer;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(solution(arr, 3));
