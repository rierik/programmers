//https://school.programmers.co.kr/learn/courses/30/lessons/12985

function solution(n, a, b) {
  let round = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    round++;
  }

  return round;
}

console.log(solution(8, 4, 7)); // 3
