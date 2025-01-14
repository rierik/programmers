//https://school.programmers.co.kr/learn/courses/30/lessons/42842
function solution(brown, yellow) {
  const total = brown + yellow; // 전체 격자 수

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
