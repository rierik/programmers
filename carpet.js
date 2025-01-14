//https://school.programmers.co.kr/learn/courses/30/lessons/42842
function solution(brown, yellow) {
  const total = brown + yellow; // 전체 격자 수

  //brown 10 yellow 2로 가정
  //                    Math.sqrt(total) 은 루트12로 3까지만 탐색
  for (let height = 3; height <= Math.sqrt(total); height++) {
    if (total % height === 0) {
      const width = total / height; // 가로 길이 계산
      if ((width - 2) * (height - 2) === yellow) {
        return [width, height]; // 조건을 만족하면 반환
      }
    }
  }
}
console.log(solution(24, 24));

// 다른 사람 풀이
function solution(brown, red) {
  var answer = [];
  for (var i = 3; i <= (brown + red) / i; i++) {
    var x = Math.floor((brown + red) / i);
    if ((x - 2) * (i - 2) === red) {
      break;
    }
  }

  return [x, i];
}
