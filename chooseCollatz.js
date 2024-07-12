//https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  var answer = 0;
  //최대 500회가 반복되는 반복문 생성
  for (i = 0; i <= 500; i++) {
    // num이 1이 아닐때 실행되는 삼항연산자
    if (num != 1) {
      num = num % 2 == 0 ? num / 2 : num * 3 + 1;

      console.log(answer);
    } else {
      // 1이 되었을 때 횟수 출력
      return (answer = i);
    }
  }
  return (answer = -1);
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
