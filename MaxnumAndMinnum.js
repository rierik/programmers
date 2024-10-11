//https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  var answer = '';
  let numArr = s.split(' ');
  numArr = numArr.map((n) => (n = n * 1));
  answer += Math.min(...numArr);
  answer += ` ${Math.max(...numArr)}`;

  return answer;
}

console.log(solution('1 2 3 4')); //	"1 4"
console.log(solution('-1 -2 -3 -4')); //	"-4 -1"
console.log(solution('-1 -1')); //"-1 -1"
