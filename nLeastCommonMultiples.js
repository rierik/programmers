//https://school.programmers.co.kr/learn/courses/30/lessons/12953
// 최대공약수(GCD)를 구하는 함수
function gcd(a, b) {
  while (b !== 0) {
    let temp = a % b; // 나머지를 구함
    a = b; // b를 a에 저장
    b = temp; // 나머지를 b에 저장
  }
  return a; // GCD를 반환
}

// 최소공배수(LCM)를 구하는 함수
function lcm(a, b) {
  return (a * b) / gcd(a, b); // 두 수의 곱을 GCD로 나누어 LCM을 계산
}

function solution(arr) {
  return arr.reduce((acc, num) => lcm(acc, num), arr[0]);
}

console.log(solution([2, 6, 8, 14]));
