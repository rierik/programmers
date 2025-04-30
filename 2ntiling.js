//https://school.programmers.co.kr/learn/courses/30/lessons/12900
function solution(n) {
  const MOD = 1000000007;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let prev2 = 1; // dp[1]
  let prev1 = 2; // dp[2]
  let current = 0;

  for (let i = 3; i <= n; i++) {
    current = (prev1 + prev2) % MOD;
    prev2 = prev1;
    prev1 = current;
  }

  return current;
}

console.log(solution(4)); //5

//다른 사람 풀이 <= 지금 테스트에서는 효율성 테스트에서 시간 실패뜸
function solution(n) {
  const arr = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 1000000007;
  }

  return arr[n];
}

//이거는 효율성 테스트에서 한가지 문제만 시간 초과 걸림
function solution(n) {
  const MOD = 1000000007;
  const dp = [0, 1, 2]; // dp[1] = 1, dp[2] = 2로 초기화

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
  }

  return dp[n];
}
