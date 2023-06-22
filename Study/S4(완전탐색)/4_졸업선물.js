// // 내 풀이
// function solution(budget, list) {
//   let answer = 0;

//   const priceArr = [];
//   for (let i = 0; i < list.length; i++) {
//     priceArr.push(list[i][0]);
//   }

//   const maxPriceIdx = priceArr.findIndex((el) => el === Math.max(...priceArr));
//   list.splice(maxPriceIdx, 1, [list[maxPriceIdx][0] / 2, list[maxPriceIdx][1]]);

//   const tempList = [];
//   for (let i = 0; i < list.length; i++) {
//     let totalPrice = 0;
//     for (let j = 0; j < list[i].length; j++) {
//       totalPrice += list[i][j];
//     }
//     tempList.push(totalPrice);
//   }

//   const sortedList = tempList.sort((a, b) => a - b);

//   let sumPrice = 0;
//   for (let i = 0; i < sortedList.length; i++) {
//     sumPrice += sortedList[i];
//     if (sumPrice > budget) break;
//     answer++;
//   }

//   return answer;
// }

// 수업 풀이
function solution(budget, list) {
  let answer = 0;

  // 이차원 배열 정렬
  list.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  // 케이스를 다 찾고, 그 중에 최고의 상황을 업데이트 하기
  // 각각 모든 케이스를 할인해서 더한 카운트를 매번 실행 시 마다 이전 값과 비교해서 높은 값만 남기기
  for (let i = 0; i < list.length; i++) {
    let money = budget - (list[i][0] / 2 + list[i][1]);
    let cnt = 1;
    for (let j = 0; j < list.length; j++) {
      if (list[j][0] + list[j][1] > money) break;
      if (j !== i && list[j][0] + list[j][1] <= money) {
        cnt++;
        money -= list[j][0] + list[j][1];
      }
    }
    answer = Math.max(answer, cnt);
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
