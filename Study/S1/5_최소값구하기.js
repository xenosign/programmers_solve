function solution(arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  answer = Math.min(...arr);
  const answer2 = Math.max.apply(null, arr);
  // answer = arr[0];

  // for (let i = 1; i < arr.length; i++) {
  //   if (answer > arr[i]) answer = arr[i];
  // }

  console.log(answer2);

  return answer;
}

console.log(solution([5, 3, 7, 11, 12, 1]));
