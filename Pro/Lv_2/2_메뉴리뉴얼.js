// https://school.programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
  const answer = [];

  const orderCourseObj = {};
  const countObj = {};

  for (let i = 0; i < course.length; i++) {
    countObj[course[i]] = 0;
  }

  for (let i = 0; i < course.length; i++) {
    for (let j = 0; j < orders.length; j++) {
      for (let a = 0; a < orders[j].length - 1; a++) {
        let tmp = orders[j][a];
        for (let b = a + 1; b < orders[j].length; b++) {
          tmp += orders[j][b];

          // ABD 가 나와야 하는데 안나옴, 이것 해결 필요

          for (let c = 1; c < course[i] - 1 && b + c < orders[j].length; c++) {
            tmp += orders[j][b + c];
          }

          tmp = tmp.split('').sort().join('');

          if (tmp.length === course[i]) {
            if (orderCourseObj[tmp] === undefined) {
              orderCourseObj[tmp] = 1;
              countObj[tmp.length] += 1;
            } else orderCourseObj[tmp] += 1;
          }

          tmp = orders[j][a];
        }
      }
    }
  }

  const orderCourseArr = Object.entries(orderCourseObj);
  const countArr = Object.entries(countObj);

  for (let i = 0; i < course.length; i++) {
    const sortArrByNumOfCourse = orderCourseArr
      .splice(0, countArr[i][1])
      .sort((a, b) => b[1] - a[1]);

    if (sortArrByNumOfCourse[0] !== undefined) {
      const mostCnt = sortArrByNumOfCourse[0][1];

      const finalCourse = sortArrByNumOfCourse.filter(
        (el) => el[1] === mostCnt && el[1] >= 2,
      );

      for (let j = 0; j < finalCourse.length; j++) {
        answer.push(finalCourse[j][0]);
      }
    }
  }

  answer.sort();

  return answer;
}

// const orders = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
// const course = [2, 3, 4];

// const orders = ['XYZ', 'XWY', 'WXA'];
// const course = [2, 3, 4];

const orders = ['ABCD', 'ABCD', 'ABCD'];
const course = [2, 3, 4];

console.log(solution(orders, course));
