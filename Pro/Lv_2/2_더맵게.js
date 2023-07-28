// https://school.programmers.co.kr/learn/courses/30/lessons/42626

// function solution(scoville, K) {
//   let answer = 0;

//   const sortedScoville = scoville.sort((a, b) => a - b);

//   let lowerScovilleCnt = scoville.filter((el) => el < K).length;

//   if (lowerScovilleCnt <= 0) return 0;

//   while (lowerScovilleCnt > 0) {
//     const firstLow = sortedScoville.shift();
//     const secondLow = sortedScoville.shift();
//     if (firstLow === undefined || secondLow === undefined) {
//       answer = -1;
//       break;
//     }
//     const newScoville = firstLow + secondLow * 2;
//     sortedScoville.unshift(newScoville);
//     answer++;

//     lowerScovilleCnt = sortedScoville.filter((el) => el < K).length;
//   }

//   return answer;
// }

// const tc1 = [1, 2, 3, 9, 10, 12];
// const tc2 = 7;

// console.log(solution(tc1, tc2));

// https://velog.io/@yanghl98/%EC%9E%90%EB%A3%8C%EA%B5%AC%EC%A1%B0-Heap%ED%9E%99-%EA%B0%9C%EB%85%90-%EC%A2%85%EB%A5%98-%ED%99%9C%EC%9A%A9-%EC%98%88%EC%8B%9C-%EA%B5%AC%ED%98%84

// 함수로 변경 필요
class MinHeap {
  constructor() {
    this.heap = [null];
  }

  getMin() {
    return this.heap[1];
  }

  size() {
    return this.heap.length - 1;
  }

  insert(node) {
    this.heap.push(node);

    if (this.heap.length > 1) {
      let current = this.heap.length - 1;

      while (
        current > 1 &&
        this.heap[Math.floor(current / 2)] > this.heap[current]
      ) {
        [this.heap[Math.floor(current / 2)], this.heap[current]] = [
          this.heap[current],
          this.heap[Math.floor(current / 2)],
        ];
        current = Math.floor(current / 2);
      }
    }
  }

  remove() {
    const smallest = this.heap[1];

    if (this.heap.length > 2) {
      this.heap[1] = this.heap[this.heap.length - 1];
      this.heap.splice(this.heap.length - 1);

      if (this.heap.length === 3) {
        if (this.heap[1] > this.heap[2]) {
          [this.heap[1], this.heap[2]] = [this.heap[2], this.heap[1]];
        }
        return smallest;
      }

      let current = 1;
      let leftChildIndex = current * 2;
      let rightChildIndex = current * 2 + 1;

      while (
        this.heap[leftChildIndex] &&
        this.heap[rightChildIndex] &&
        (this.heap[current] > this.heap[leftChildIndex] ||
          this.heap[current] > this.heap[rightChildIndex])
      ) {
        if (this.heap[leftChildIndex] < this.heap[rightChildIndex]) {
          [this.heap[current], this.heap[leftChildIndex]] = [
            this.heap[leftChildIndex],
            this.heap[current],
          ];
          current = leftChildIndex;
        } else {
          [this.heap[current], this.heap[rightChildIndex]] = [
            this.heap[rightChildIndex],
            this.heap[current],
          ];
          current = rightChildIndex;
        }

        leftChildIndex = current * 2;
        rightChildIndex = current * 2 + 1;
      }
    } else if (this.heap.length === 2) {
      this.heap.splice(1);
    } else {
      return null;
    }

    return smallest;
  }
}

function solution(scoville, K) {
  let count = 0;
  const heap = scoville.reduce((heap, food) => {
    heap.insert(food);
    return heap;
  }, new MinHeap());

  while (heap.getMin() < K) {
    if (heap.size() < 2) {
      return -1;
    }

    heap.insert(heap.remove() + heap.remove() * 2);
    count += 1;
  }

  return count;
}

const tc1 = [1, 2, 3, 9, 10, 12];
const tc2 = 7;

console.log(solution(tc1, tc2));
