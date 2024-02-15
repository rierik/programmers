function solution(n) {
  var answer = 0;
  let result = [];
  let index = 1;

  while (index <= n) {
    if (n % index === 0) result.push(index);
    index++;
  }

  result.map((d) => (answer += d));
  return answer;
}

/*  */
function solution(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum;
}
