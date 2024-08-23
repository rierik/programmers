//https://school.programmers.co.kr/learn/courses/30/lessons/12950
function solution(arr1, arr2) {
  var answer = [];
  for (const i in arr1) {
    let row = [];
    for (const j in arr1[i]) {
      row.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(row);
  }
  return answer;
}
console.log(
  solution(
    [
      [1, 2, 3],
      [2, 3, 3],
    ],
    [
      [3, 4, 1],
      [5, 6, 1],
    ],
  ),
);

// 다른 풀이
function solution(arr1, arr2) {
  var answer = [[]];
  for (var i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (var j = 0; j < arr1[i].length; j++) {
      answer[i].push(arr1[i][j] + arr2[i][j]);
    }
  }
  return answer;
}
