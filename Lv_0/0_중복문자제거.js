// @ts-check
// https://school.programmers.co.kr/learn/courses/30/lessons/120888
function my(my_string) {
  let strArr = [...my_string];

  for (let i = 0; i < strArr.length; i++) {
    const letter = strArr[i];

    strArr = strArr.filter((el) => {
      return el !== strArr[i];
    });
    strArr.splice(i, 0, letter);
  }

  return strArr.join('');
}

my('We are the world');

// 정석 풀이
// 중복 제거에는 Set 활용하기
function solution(my_string) {
  return [...new Set(my_string)].join('');
}
