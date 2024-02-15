function solution(a, b) {
  var answer = 0;
  const smallerNumber = Math.min(a, b);
  const largerNumber = Math.max(a, b);

  for (i = smallerNumber; i <= largerNumber; i++) {
    answer += i;
  }
  return answer;
}

console.log(solution(3, 5));
