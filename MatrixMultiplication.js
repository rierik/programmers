//https://school.programmers.co.kr/learn/courses/30/lessons/12949
function solution(arr1, arr2) {
  const n = arr1.length;
  const m = arr2[0].length;
  const k = arr2.length;

  const result = Array.from({ length: n }, () => Array(m).fill(0));

  // 행렬 곱셈 수행
  for (let i = 0; i < n; i++) {
    // arr1의 행 순회
    for (let j = 0; j < m; j++) {
      // arr2의 열 순회
      for (let x = 0; x < k; x++) {
        // arr1의 열 == arr2의 행
        result[i][j] += arr1[i][x] * arr2[x][j];
      }
    }
  }

  return result;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ],
  ),
); // [[15, 15], [15, 15], [15, 15]]

//다른 사람 풀이
function solution(arr1, arr2) {
  return arr1.map((row) => arr2[0].map((x, y) => row.reduce((a, b, c) => a + b * arr2[c][y], 0)));
}
