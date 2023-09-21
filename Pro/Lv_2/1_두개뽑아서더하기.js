// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const answer = [];

  const sortedNumbers = numbers.sort((a, b) => a - b);

  for (let i = 0; i < sortedNumbers.length - 1; i++) {
    for (let j = i + 1; j < sortedNumbers.length; j++) {
      const addNum = sortedNumbers[i] + sortedNumbers[j];

      if (answer.indexOf(addNum) === -1) answer.push(addNum);
    }
  }

  answer.sort((a, b) => a - b);

  return answer;
}

const numbers = [2, 1, 3, 4, 1];

console.log(solution(numbers));
