//https://school.programmers.co.kr/learn/courses/30/lessons/131701

function solution(elements) {
  const circular = elements.concat(elements);
  const set = new Set();
  for (let i = 0; i < elements.length; i++) {
    let sum = 0;
    for (let j = 0; j < elements.length; j++) {
      sum += circular[i + j];
      set.add(sum);
    }
  }
  return set.size;
}

console.log(solution([1, 1, 7, 4, 9])); //18
