//https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  var answer = 0;
  answer = (n + '')
    .split('')
    .sort((a, b) => b - a)
    .join('');
  let result = Number(answer);
  return result;
}

console.log(solution(118372));
