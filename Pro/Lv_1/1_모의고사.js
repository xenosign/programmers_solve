function solution(answers) {
  const arr1 = [1, 2, 3, 4, 5];
  const arr2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const arr3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const result = [0, 0, 0];

  const { length } = answers;

  for (let i = 0; i < length; i++) {
    if (answers[i] === arr1[i % 5]) {
      result[0] += 1;
    }

    if (answers[i] === arr2[i % 8]) {
      result[1] += 1;
    }

    if (answers[i] === arr3[i % 10]) {
      result[2] += 1;
    }
  }
  const answer = [];
  const max = Math.max(result[0], result[1], result[2]);

  if (max === result[0]) answer.push(1);
  if (max === result[1]) answer.push(2);
  if (max === result[2]) answer.push(3);

  return answer;
}

console.log(solution([1, 2, 3, 4, 5]));
