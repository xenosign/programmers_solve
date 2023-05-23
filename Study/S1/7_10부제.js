function solution(day, carNumArr) {
  let answer = 0;

  const paneltyArr = carNumArr.filter((el) => el % 10 === day);
  answer = paneltyArr.length;

  return answer;
}

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
