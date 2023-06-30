// https://school.programmers.co.kr/learn/courses/30/lessons/138476

function solution(msg) {
  const answer = [];
  let str = msg;

  const dic = Array.from({ length: 27 }, (v, i) => String.fromCharCode(i + 64));
  const totalDic = [];
  totalDic.push(dic);

  let len = 0;
  let sliceWord = '';
  let addWord = '';

  while (str.length > 0) {
    len = totalDic.length;

    for (let i = len; i >= 1; i--) {
      sliceWord = str.substr(0, i);

      if (totalDic[i - 1].indexOf(sliceWord) === -1) {
        continue;
      } else {
        let addIdx = 0;
        if (i > 1) {
          for (let j = 0; j < i - 1; j++) {
            addIdx += totalDic[j].length;
          }
        }
        answer.push(totalDic[i - 1].indexOf(sliceWord) + addIdx);
        addWord = str.substr(0, i + 1);

        len = i;
        break;
      }
    }

    if (str.length === 1) break;

    if (totalDic.length < addWord.length) {
      const tempArr = [];
      tempArr.push(addWord);
      totalDic.push(tempArr);
    } else {
      console.log(totalDic);
      console.log('len', len);
      console.log(addWord);
      totalDic[len].push(addWord);
    }

    str = str.substr(len, str.length);
  }

  return answer;
}

// const tc = 'KAKAO';
// const tc = 'TOBEORNOTTOBEORTOBEORNOT';
const tc = 'ABABABABABABABAB';

console.log(solution(tc));
