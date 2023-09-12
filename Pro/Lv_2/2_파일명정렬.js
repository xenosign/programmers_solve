// https://school.programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  const answer = [];

  const orderArr = [];

  files.forEach((el) => {
    const [front, back] = el.split('.');

    // 48 - 57
    let startIdx = -1;
    for (let i = 0; i < front.length; i++) {
      if (
        startIdx === -1 &&
        front.charCodeAt(i) >= 48 &&
        front.charCodeAt(i) <= 57
      ) {
        startIdx = i;
      }
    }

    const head = front.substr(0, startIdx).toUpperCase();
    const number = Number(
      front.substr(startIdx, front.length).replace(/[^0-9]/g, ''),
    );

    orderArr.push([head, number, back, el]);
  });

  orderArr.sort((a, b) => a[0].localeCompare(b[0]));
  orderArr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return 0;
  });

  orderArr.forEach((el) => {
    answer.push(el[3]);
  });

  return answer;
}

const files = [
  'img12.png',
  'img10.png',
  'img02.png',
  'img1.png',
  'IMG01.GIF',
  'img2.JPG',
];

// const files = [
//   'F-5 Freedom Fighter',
//   'B-50 Superfortress',
//   'A-10 Thunderbolt II',
//   'F-14 Tomcat',
// ];

console.log(solution(files));
