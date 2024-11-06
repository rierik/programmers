// https://school.programmers.co.kr/learn/courses/30/lessons/70129
function solution(s) {
  let transformationCount = 0;
  let zeroCount = 0;

  while (s !== '1') {
    // 1단계: 0을 제거
    zeroCount += s.match(/0/g).length;
    s = s.replace(/0/g, '');

    // 2단계: 문자열의 길이를 이진수로 변환
    s = s.length.toString(2);

    // 변환 횟수 증가
    transformationCount++;
  }

  return [transformationCount, zeroCount];
}

console.log(solution('110010101001')); //110,10,1 [3,8]
