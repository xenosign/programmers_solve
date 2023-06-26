// https://school.programmers.co.kr/learn/courses/30/lessons/120907

function solution(quiz) {
  const answer = [];

  for (let i = 0; i < quiz.length; i++) {
    const quizArr = quiz[i].split(' ');

    const firstNum = Number(quizArr[0]);
    const arithmetic = quizArr[1];
    const secondNum = Number(quizArr[2]);
    const result = Number(quizArr[4]);

    if (arithmetic === '+') {
      answer.push(firstNum + secondNum === result ? 'O' : 'X');
    } else if (arithmetic === '-') {
      answer.push(firstNum - secondNum === result ? 'O' : 'X');
    }
  }

  return answer;
}

// const tc = ['3 - 4 = -3', '5 + 6 = 11'];
const tc = ['19 - 6 = 13', '5 + 66 = 71', '5 - 15 = 63', '3 - 1 = 2'];

console.log(solution(tc));
