// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/120891
function solution(order) {
  const ordeStr = order.toString();
  const orderArr = [...ordeStr];
  return orderArr.filter((el) => el % 3 === 0 && el != 0).length;
}

console.log('sol', solution('2942333300'));
