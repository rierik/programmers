// https://school.programmers.co.kr/learn/courses/30/lessons/12941?language=javascript
function solution(A, B) {
  var answer = 0;

  const a = A.sort((a, b) => a - b);
  const b = B.sort((a, b) => b - a);

  for (let i = 0; i < A.length; i++) {
    answer += a[i] * b[i];
  }

  return answer;
}

console.log(solution([1, 4, 2], [5, 4, 4])); // 29
// console.log(solution([1, 2], [3, 4])); // 10
