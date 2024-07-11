//https://school.programmers.co.kr/learn/courses/30/lessons/12937

function solution(num) {
  var answer = '';
  answer = num % 2 === 0 ? 'Even' : 'Odd';
  return answer;
}

//다른 풀이
function solution(num) {
  return num % 2 ? 'Odd' : 'Even';
}
