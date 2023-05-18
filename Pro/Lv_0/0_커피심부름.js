// https://school.programmers.co.kr/learn/courses/30/lessons/181837

function solution(order) {
  let answer = 0;
  let americanoArr = [];

  americanoArr = order.filter((el) => el.indexOf('latte') === -1);

  answer = order.length * 5000 - americanoArr.length * 500;

  return answer;
}

const ex1 = ['cafelatte', 'americanoice', 'hotcafelatte', 'anything'];
console.log(solution(ex1));
