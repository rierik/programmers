//https://school.programmers.co.kr/learn/courses/30/lessons/12933

function solution(n) {
  var answer = 0;
  answer = (n + '')
    .split('')
    .sort((a, b) => b - a)
    .join('');
  let result = Number(answer);
  return result;
}

console.log(solution(118372));

//다른풀이
function solution(n) {
  //숫자가 분명히 더 빠름
  var nums = [];
  do {
    nums.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);

  return nums.sort((a, b) => b - a).join('') * 1;
  //문자는 느림
  return (
    (n + '')
      .split('')
      .sort((a, b) => b - a)
      .join('') * 1
  );
}
