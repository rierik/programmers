//https://school.programmers.co.kr/learn/courses/30/lessons/12924?language=javascript
function solution(n) {
  let count = 0;

  for (let start = 1; start <= n; start++) {
    let sum = 0;

    for (let current = start; current <= n; current++) {
      sum += current;

      if (sum == n) {
        count++;
        break;
      } else if (sum > n) {
        break;
      }
    }
  }

  return count;
}

//주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수는 주어진 수의 홀수 약수의 개수와 같다고 한다.
function solution(num) {
  var answer = 0;

  for (var i = 1; i <= num; i++) {
    if (num % i == 0 && i % 2 == 1) answer++;
  }
  return answer;
}
