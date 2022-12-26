// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  let i = 0;
  let answer = 0;
  while (ingredient.length - i >= 4) {
    if (ingredient[i] === 1) {
      if (ingredient[i + 1] === 1) {
        i++;
      } else if (
        ingredient[i + 1] === 2 &&
        ingredient[i + 2] === 3 &&
        ingredient[i + 3] !== 1
      ) {
        i += 2;
      } else if (ingredient[i + 1] === 2 && ingredient[i + 2] !== 3) {
        i += 1;
      } else if (
        ingredient[i + 1] === 2 &&
        ingredient[i + 2] === 3 &&
        ingredient[i + 3] === 1
      ) {
        answer++;
        ingredient.splice(i, 4);
        i -= 2;
      } else {
        i++;
      }
    } else {
      i++;
    }
  }

  return answer;
}

// let answer = 0;

// function solution(ingredient, index) {
//   index === undefined ? (index = 0) : (index = index);
//   for (let i = index; i < ingredient.length - 3; i++) {
//     if (ingredient[i] === 1) {
//       if (ingredient[i + 1] === 1) {
//         continue;
//       } else if (
//         ingredient[i + 1] === 2 &&
//         ingredient[i + 2] === 3 &&
//         ingredient[i + 3] !== 1
//       ) {
//         i += 2;
//       } else if (ingredient[i + 1] === 2 && ingredient[i + 2] !== 3) {
//         i += 1;
//       } else if (
//         ingredient[i + 1] === 2 &&
//         ingredient[i + 2] === 3 &&
//         ingredient[i + 3] === 1
//       ) {
//         answer++;
//         ingredient.splice(i, 4);
//         solution(ingredient, i - 2);
//       }
//     }
//   }

//   return answer;
// }

const TC1 = [2, 1, 1, 2, 3, 1, 2, 3, 1];
const TC2 = [1, 3, 2, 1, 2, 1, 3, 1, 2];
const TC3 = [1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1];
const TC4 = [1, 1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1];
const TC5 = [
  1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 2, 3, 1, 2, 3, 1, 1, 1, 1, 1, 1, 2, 3, 3, 1, 2,
  3, 1, 3, 3, 3, 2, 1, 2, 3, 1,
];

console.log(solution(TC2));
