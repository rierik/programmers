//https://school.programmers.co.kr/learn/courses/30/lessons/42626

function solution(scoville, K) {
  var answer = 0;
  scoville.sort((a, b) => a - b); // 오름차순 정렬
  console.log({ scoville });
  while (scoville[0] < K) {
    if (scoville.length < 2) return -1; // 더 이상 섞을 수 없을 때
    const first = scoville.shift(); // 가장 낮은 스코빌 지수
    const second = scoville.shift(); // 두 번째로 낮은 스코빌 지수
    const newScoville = first + second * 2; // 새로운 스코빌 지수
    scoville.push(newScoville); // 새로운 스코빌 지수를 배열에 추가
    scoville.sort((a, b) => a - b); // 다시 정렬
    answer++; // 섞은 횟수 증가
  }
  return answer;
}

console.log(solution([2, 1, 3, 9, 10, 12], 7)); //2

// 다른 사람 풀이
class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  pop() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length === 0) return min;
    this.heap[0] = last;

    let i = 0;
    while (true) {
      let left = i * 2 + 1;
      let right = i * 2 + 2;
      let smallest = i;

      if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;

      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }

    return min;
  }

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

function solution(scoville, K) {
  const heap = new MinHeap();
  scoville.forEach((s) => heap.insert(s));

  let count = 0;

  while (heap.size() >= 2 && heap.peek() < K) {
    const first = heap.pop();
    const second = heap.pop();
    heap.insert(first + second * 2);
    count++;
  }

  return heap.peek() >= K ? count : -1;
}
