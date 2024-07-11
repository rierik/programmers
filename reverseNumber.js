function solution(n) {
  var answer = [];
  const stringN = n.toString();
  answer = Array.from(stringN).reverse();
  answer = answer.map((n) => +n);
  return answer;
}

console.log(solution(12345));
