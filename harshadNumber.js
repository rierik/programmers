//https://school.programmers.co.kr/learn/courses/30/lessons/12947
function solutsion(x) {
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

//다른 풀이
function solution(x) {
  let num = x;
  let sum = 0;

  //자리수별로 수를 더하기
  do {
    sum += x % 10;
    x = Math.floor(x / 10);
  } while (x > 0);
  ㄴ;
  return !(num % sum);
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(11));
console.log(solution(13));
