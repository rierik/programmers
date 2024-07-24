//https://school.programmers.co.kr/learn/courses/30/lessons/132267?language=javascript
function solution(a, b, n) {
  // 문제 해석하여 들어오는 인자를 대입해보면 a = 가져다줘야 하는 병 수 2 b = 돌려받을 수 있는 병 수 1 n = 20 내가 가지고 있는 콜라병 수
  var answer = 0;

  while (n >= a) {
    answer += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + Math.floor(n % a);
  }

  return answer;
}

console.log(solution(2, 1, 20));
