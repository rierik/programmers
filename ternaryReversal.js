//https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  var answer = 0;
  var ternary = '';

  while (n > 0) {
    ternary += (n % 3).toString();
    n = Math.floor(n / 3);
  }

  answer = parseInt(ternary, 3);

  return answer;
}

console.log(solution(45));

//다른풀이
const solution = (n) => {
  return parseInt([...n.toString(3)].reverse().join(''), 3);
};
/* 
n.toString(3): 숫자 n을 3진법 문자열로 변환합니다. 예를 들어, 45가 주어졌을 때 "120"이 됩니다.
[...n.toString(3)]: 3진법 문자열을 배열로 만듭니다. 따라서 "120"은 ['1', '2', '0']이 됩니다.
.reverse(): 배열의 순서를 역순으로 뒤집습니다. ['1', '2', '0']은 ['0', '2', '1']이 됩니다.
.join(''): 배열의 요소들을 문자열로 합칩니다. ['0', '2', '1']은 "021"이 됩니다.
parseInt(..., 3): 3진법으로 표현된 문자열을 10진법 숫자로 변환합니다. 따라서 "021"을 10진법으로 변환하면 7이 됩니다.
*/

function solution(n) {
  const answer = [];
  while (n !== 0) {
    answer.unshift(n % 3);
    n = Math.floor(n / 3);
  }
  return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}

function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
}
