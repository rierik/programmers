//https://school.programmers.co.kr/learn/courses/30/lessons/12934
function solution(n) {
  var answer = -1;
  if (!Number.isInteger(Math.sqrt(n))) return answer;
  console.log('djlskd');
  answer = (Math.sqrt(n) + 1) ** 2;
  return answer;
}

console.log(solution(3));

//다른 풀이

function solution(n) {
  return Math.sqrt(n) === parseInt(Math.sqrt(n)) ? (Math.sqrt(n) + 1) ** 2 : -1;
}
