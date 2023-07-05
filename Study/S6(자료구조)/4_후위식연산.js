// 내 풀이
function solution(str) {
  let answer = 0;

  const stack = [];

  for (const x of str) {
    if (/[0-9]/.test(x)) {
      stack.push(Number(x));
    } else {
      const rt = stack.pop();
      const lt = stack.pop();
      if (x === '+') {
        stack.push(lt + rt);
      } else if (x === '-') {
        stack.push(lt - rt);
      } else if (x === '*') {
        stack.push(lt * rt);
      } else if (x === '/') {
        stack.push(lt / rt);
      } else {
        console.log('Wrong input!');
        break;
      }
    }
  }

  answer = stack.pop();

  return answer;
}

const tc = '352+*9-6/';

console.log(solution(tc));
