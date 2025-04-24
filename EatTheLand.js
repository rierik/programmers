//https://school.programmers.co.kr/learn/courses/30/lessons/12913
function solution(land) {
  for (let i = 1; i < land.length; i++) {
    const prev = [...land[i - 1]]; // i-1번째 줄을 복사해놓고
    for (let j = 0; j < land[i].length; j++) {
      // 현재 행의 각 열에 대해 이전 행의 최대값을 더합니다.
      land[i][j] += Math.max(...prev.filter((_, index) => index !== j));
    }
  }
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log('Hello Javascript');

  return Math.max(...land[land.length - 1]); // 마지막 줄에서 최대값
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ]),
); //16

//다른 사람 풀이
function solution(land) {
  let answer = 0;
  const dp = [land[0]];

  for (let i = 1; i < land.length; i++) {
    const column = [];

    column.push(Math.max(dp[i - 1][1], dp[i - 1][2], dp[i - 1][3]) + land[i][0]);
    column.push(Math.max(dp[i - 1][0], dp[i - 1][2], dp[i - 1][3]) + land[i][1]);
    column.push(Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][3]) + land[i][2]);
    column.push(Math.max(dp[i - 1][0], dp[i - 1][1], dp[i - 1][2]) + land[i][3]);
    dp.push(column);
  }

  return Math.max(dp[land.length - 1][0], dp[land.length - 1][1], dp[land.length - 1][2], dp[land.length - 1][3]);
}
