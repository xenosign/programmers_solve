function solution(nums, count) {
  const answer = [];
  const n = nums.length;
  // 순열을 뽑을 때, 해당 숫자가 사용 되었는지 여부를 체크하기 위한 check 배열 선언
  const checkArr = Array.from({ length: n }, () => 0);
  // 결과적으로 count 개의 순열을 만들어야 하므로, 해당 순열의 길이 만큼 배열 선언
  const tmp = Array.from({ length: count }, () => 0);

  function DFS(L) {
    // count 번 뽑으면 순열이 완성 되므로, 해당 순열을 push
    if (L === count) answer.push(tmp.slice());
    else {
      // check 배열에서 사용이 안된(= 배열의 값이 0) 숫자를 tmp 에 넣어주기,
      // L 은 뽑은 순번이므로, 첫번째, 두번째 값에 맞게 tmp 값을 변경
      for (let i = 0; i < n; i++) {
        if (checkArr[i] === 0) {
          // 해당 숫자가 사용 되었다고 1로 변경
          checkArr[i] = 1;
          tmp[L] = nums[i];
          DFS(L + 1);
          // 뒤로 돌아오게 되면 해당 숫자는 사용 안한 것으로 처리되어야 하므로, 0 으로 변경해 주기
          checkArr[i] = 0;
        }
      }
    }
  }

  DFS(0);

  return answer;
}

const nums = [3, 6, 9];
const count = 2;

console.log(solution(nums, count));
