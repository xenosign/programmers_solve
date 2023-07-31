// https://school.programmers.co.kr/learn/courses/30/lessons/42626
function getMin(heap) {
  return heap[1];
}

function size(heap) {
  return heap.length - 1;
}

function insert(heap, node) {
  heap.push(node);

  if (heap.length > 1) {
    let current = heap.length - 1;

    while (current > 1 && heap[Math.floor(current / 2)] > heap[current]) {
      [heap[Math.floor(current / 2)], heap[current]] = [
        heap[current],
        heap[Math.floor(current / 2)],
      ];
      current = Math.floor(current / 2);
    }
  }
}

function remove(heap) {
  const smallest = heap[1];

  if (heap.length > 2) {
    heap[1] = heap[heap.length - 1];
    heap.splice(heap.length - 1);

    if (heap.length === 3) {
      if (heap[1] > heap[2]) {
        [heap[1], heap[2]] = [heap[2], heap[1]];
      }
      return smallest;
    }

    let current = 1;
    let leftChildIndex = current * 2;
    let rightChildIndex = current * 2 + 1;

    while (
      heap[leftChildIndex] &&
      heap[rightChildIndex] &&
      (heap[current] > heap[leftChildIndex] ||
        heap[current] > heap[rightChildIndex])
    ) {
      if (heap[leftChildIndex] < heap[rightChildIndex]) {
        [heap[current], heap[leftChildIndex]] = [
          heap[leftChildIndex],
          heap[current],
        ];
        current = leftChildIndex;
      } else {
        [heap[current], heap[rightChildIndex]] = [
          heap[rightChildIndex],
          heap[current],
        ];
        current = rightChildIndex;
      }

      leftChildIndex = current * 2;
      rightChildIndex = current * 2 + 1;
    }
  } else if (heap.length === 2) {
    heap.splice(1);
  } else {
    return null;
  }

  return smallest;
}

function solution(scoville, K) {
  let count = 0;
  const heap = [null];

  scoville.map((el) => {
    insert(heap, el);
    return 0;
  });

  while (getMin(heap) < K) {
    if (size(heap) < 2) {
      return -1;
    }

    insert(heap, remove(heap) + remove(heap) * 2);
    count += 1;
  }

  return count;
}

const tc1 = [1, 2, 3, 9, 10, 12];
const tc2 = 7;

console.log(solution(tc1, tc2));
