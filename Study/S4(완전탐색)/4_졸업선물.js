// 내 풀이
function solution(budget, list) {
  let answer = 0;

  const priceArr = [];
  for (let i = 0; i < list.length; i++) {
    priceArr.push(list[i][0]);
  }

  const maxPriceIdx = priceArr.findIndex((el) => el === Math.max(...priceArr));
  list.splice(maxPriceIdx, 1, [list[maxPriceIdx][0] / 2, list[maxPriceIdx][1]]);

  const tempList = [];
  for (let i = 0; i < list.length; i++) {
    let totalPrice = 0;
    for (let j = 0; j < list[i].length; j++) {
      totalPrice += list[i][j];
    }
    tempList.push(totalPrice);
  }

  const sortedList = tempList.sort((a, b) => a - b);

  let sumPrice = 0;
  for (let i = 0; i < sortedList.length; i++) {
    sumPrice += sortedList[i];
    if (sumPrice > budget) break;
    answer++;
  }

  return answer;
}

const budget = 28;
const wishList = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(budget, wishList));
