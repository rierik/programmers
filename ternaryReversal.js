//https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  var answer = 0;
  var ternary = '';

  while (n > 0) {
    ternary += (n % 3).toString();
    console.log(ternary);
    n = Math.floor(n / 3);
    console.log('dd', n);
  }

  answer = parseInt(ternary, 3);

  return answer;
}

console.log(solution(45));
