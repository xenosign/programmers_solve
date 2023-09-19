// https://school.programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
  const answer = [];

  const courseObj = {};
  const countArr = Array.from(
    { length: course[course.length - 1] + 1 },
    () => 0,
  );

  const getCombinations = (arr, selectNumber) => {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]);
    // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((el) => [fixed, ...el]);
      results.push(...attached);
    });

    return results;
  };

  for (let i = 0; i < course.length; i++) {
    for (let j = 0; j < orders.length; j++) {
      const arr = getCombinations(orders[j].split(''), course[i]);

      for (let k = 0; k < arr.length; k++) {
        const combiStr = arr[k].sort().join('');

        if (courseObj[combiStr] === undefined) {
          courseObj[combiStr] = 1;
          countArr[combiStr.length]++;
        } else {
          courseObj[combiStr]++;
        }
      }
    }
  }

  const sortCourseArr = Object.entries(courseObj).sort(
    (a, b) => a[0].length - b[0].length,
  );

  for (let i = 0; i < course.length; i++) {
    const sortArrByNumOfCourse = sortCourseArr
      .splice(0, countArr[course[i]])
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

const orders = ['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'];
const course = [2, 3, 4];

// const orders = ['XYZ', 'XWY', 'WXA'];
// const course = [2, 3, 4];

// const orders = ['ABCD', 'ABCD', 'ABCD'];
// const course = [2, 3, 4];

console.log(solution(orders, course));
