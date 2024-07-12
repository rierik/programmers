//https://school.programmers.co.kr/learn/courses/30/lessons/12947
function solution(x) {
  var answer = true;
  const nMap = x
    .toString()
    .split('')
    .map((d) => d * 1);

  const sum = nMap.reduce((a, c) => {
    return a + c;
  }, 0);

  const hashardNum = x % sum;
  if (hashardNum !== 0) answer = false;

  return answer;
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
