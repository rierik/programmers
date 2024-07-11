function solution(n) {
  var answer = [];
  const stringN = n.toString();
  answer = Array.from(stringN).reverse();
  answer = answer.map((n) => +n);
  return answer;
}

console.log(solution(12345));

function solution(n) {
  // 문자풀이
  return (n + '')
    .split('')
    .reverse()
    .map((v) => parseInt(v));
}

function solution(n) {
  // 숫자풀이
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return arr;
}
