//https://school.programmers.co.kr/learn/courses/30/lessons/12945?language=javascript
// function solution(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return solution(n - 1) + solution(n - 2);
// }

function solution(n) {
  const MOD = 1234567;
  let a = 0,
    b = 1;

  //  n=5
  for (let i = 2; i <= n; i++) {
    const temp = (a + b) % MOD;

    a = b;
    b = temp;
  }

  return b;
}

console.log(solution(2));
