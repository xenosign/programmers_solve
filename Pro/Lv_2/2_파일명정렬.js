// https://school.programmers.co.kr/learn/courses/30/lessons/17686

function solution(files) {
  const answer = [];

  const orderArr = [];

  const strRegex = /[^0-9]/g;
  const numRegex = /[0-9]/g;
  const numRegexWithoutZero = /[0]/g;

  files.forEach((el) => {
    const [front, back] = el.split('.');
    const name = front.replace(numRegex, '');
    const head = name.replace(numRegex, '').toUpperCase();
    const number = Number(
      front.replace(strRegex, '').replace(numRegexWithoutZero, ''),
    );
    orderArr.push([head, number, back, name]);
  });

  orderArr.sort((a, b) => a[0].localeCompare(b[0]));
  orderArr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    }
    return 0;
  });

  console.log(orderArr);

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
