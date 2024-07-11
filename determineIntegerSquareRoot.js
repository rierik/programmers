//https://school.programmers.co.kr/learn/courses/30/lessons/12934
function solution(n) {
  var answer = -1;
  if (!Number.isInteger(Math.sqrt(n))) return answer;
  console.log('djlskd');
  answer = (Math.sqrt(n) + 1) ** 2;
  return answer;
}

console.log(solution(3));
