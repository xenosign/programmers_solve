// https://school.programmers.co.kr/learn/courses/30/lessons/92341
function solution(fees, records) {
  const answer = [];

  const inArr = [];
  const outArr = [];

  records.map((el) => {
    const sliceArr = el.split(' ');
    const timeArr = sliceArr[0].split(':');
    const hour = Number(timeArr[0]);
    const minute = Number(timeArr[1]);
    const timeInMinute = hour * 60 + minute;
    if (sliceArr[2] === 'IN') {
      inArr.push([Number(sliceArr[1]), timeInMinute]);
    } else {
      outArr.push([Number(sliceArr[1]), timeInMinute]);
    }

    return 0;
  });

  inArr.sort((a, b) => a[0] - b[0]);
  outArr.sort((a, b) => a[0] - b[0]);

  const baseTime = fees[0];
  const baseFee = fees[1];
  const unitTime = fees[2];
  const unitFee = fees[3];

  let parkTime = 0;
  // 전체 시간에 대해서 요금을 계산하는 것으로 수정 필요
  for (let i = 0; i < inArr.length; i++) {
    let totalFee = 0;
    const carNum = inArr[i][0];
    let prevCarNum = -1;
    if (i > 0) prevCarNum = inArr[i - 1][0];

    const carNumIdxInOutArr = outArr.findIndex((el) => el[0] === carNum);

    if (carNumIdxInOutArr !== -1) {
      parkTime += outArr[carNumIdxInOutArr][1] - inArr[i][1];
      outArr.shift();
    } else {
      const lastTime = 23 * 60 + 59;
      parkTime += lastTime - inArr[i][1];
    }

    if (carNum !== prevCarNum) {
      answer.push(totalFee);
    } else {
      answer[answer.length - 1] += totalFee;
    }
  }

  return answer;
}

// const fees = [180, 5000, 10, 600];
// const records = [
//   '05:34 5961 IN',
//   '06:00 0000 IN',
//   '06:34 0000 OUT',
//   '07:59 5961 OUT',
//   '07:59 0148 IN',
//   '18:59 0000 IN',
//   '19:09 0148 OUT',
//   '22:59 5961 IN',
//   '23:00 5961 OUT',
// ];

const fees = [120, 0, 60, 591];
const records = [
  '16:00 3961 IN',
  '16:00 0202 IN',
  '18:00 3961 OUT',
  '18:00 0202 OUT',
  '23:58 3961 IN',
];
console.log(solution(fees, records));
