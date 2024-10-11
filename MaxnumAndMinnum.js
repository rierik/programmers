//https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  var answer = '';
  let numArr = s.split(' ');
  numArr = numArr.map((n) => (n = n * 1));
  answer += Math.min(...numArr);
  answer += ` ${Math.max(...numArr)}`;

  return answer;
}

//좀 더 깔끔한 풀이
function solution(s) {
  const arr = s.split(' ');

  return Math.min(...arr) + ' ' + Math.max(...arr);
}

//다른 풀이

function solution(s) {
  var arr = s.split(' ');
  arr.sort((a, b) => a - b);

  var answer = arr[0] + ' ' + arr[arr.length - 1];

  return answer;
}

console.log(solution('1 2 3 4')); //	"1 4"
console.log(solution('-1 -2 -3 -4')); //	"-4 -1"
console.log(solution('-1 -1')); //"-1 -1"
