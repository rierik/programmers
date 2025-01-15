//https://school.programmers.co.kr/learn/courses/30/lessons/12914
function solution(n) {
  const MOD = 1234567;
  let step = [0, 1, 2]; // f(0)=0, f(1)=1, f(2)=2

  for (let i = 3; i <= n; i++) {
    step[i] = (step[i - 1] + step[i - 2]) % MOD;
  }
  console.log('    step', step);

  return step[n];
}

console.log(solution(4)); // 5
console.log(solution(3)); // 3
