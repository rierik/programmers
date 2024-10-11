//https://school.programmers.co.kr/learn/courses/30/lessons/12911
// 어려워서 아예 못푼 문제 => 이해 완료

function solution(n) {
  let oneNum = n.toString(2).split('1').length;
  while (true) {
    n++;
    if (n.toString(2).split('1').length === oneNum) return n;
  }
}

// 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.
console.log(solution(78)); //83
console.log(solution(15)); //24
console.log(solution(13)); //24
