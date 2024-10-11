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

function solution(n) {
  let arr = n.toString(2).split(''); // 2진법으로 변환해 배열 만들기
  let cnt = arr.filter((one) => one === '1').length; // 1의 개수 세기
  let cnt2;
  while (cnt !== cnt2) {
    //cnt와 cnt2의 크기가 같을 때 종료
    ++n; // 다음 큰 숫자
    cnt2 = n
      .toString(2)
      .split('')
      .filter((one) => one === '1').length; // 1의 개수 세기
  }
  return n;
}
