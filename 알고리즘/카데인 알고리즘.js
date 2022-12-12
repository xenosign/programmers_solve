// @ts-check
const maxProfit = (prices) => {
  let profit = 0;
  let min = prices[0];
  for (let i = 1; i < prices.length; i++) {
    // The day we should buy at
    min = min > prices[i - 1] ? prices[i - 1] : min;
    // Check if selling at the current day gives us the most profit
    profit = prices[i] - min > profit ? prices[i] - min : profit;

    console.log(i, min, profit);
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));

// @ts-check
// 승환님 송아지 문제!

function solution(n, arr) {
  // 주어진 배열의 최대 값을 넣어줄 변수, 초기 값으로는 제일 처음의 값을 입력
  let max = arr[0];
  // 최대 이익 값을 저장할 변수를 선언
  // 초기 값으로는 첫날에 소를 팔고 둘째 날에 바로 판 케이스를 가정
  let profit = max - arr[1];

  // 배열을 순회 하면서 카데인 알고리즘 실행
  for (let i = 1; i < n; i++) {
    // 팔 수 있는 소 가격의 최대 값을 저장 단, 소를 팔고 하루는 남겨서 사야 하므로
    // 팔 수 있는 소 가격의 최대 치는 배열 길이 - 1 값 까지만 접근 가능 따라서 arr[i - 1] 로 접근
    max = max > arr[i - 1] ? max : arr[i - 1];

    // 기존에 저장되어 있는 소를 판 최대 가격에서 해당 날짜(i 번째 날짜)의 에상 가격을 빼고
    // 해당 가격이 기존의 최대 이득 보다 클 경우 최대 이득으로 저장
    // 이 과정을 끝까지 반복
    profit = max - arr[i] > profit ? max - arr[i] : profit;
  }

  // 남은 최대 이득 값을 리턴
  return profit;
}

// @ts-ignore
// const testCase = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];
const testCase = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const testCase = [4, 1, 7, 6, 5, 2];

console.log('sol', solution(6, testCase));
