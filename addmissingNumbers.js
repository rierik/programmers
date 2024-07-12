//https://school.programmers.co.kr/learn/courses/30/lessons/86051

function solution(numbers) {
  var answer = 0;

  for (i = 1; i <= 9; i++) {
    if (!numbers.includes(i)) answer += i;
  }
  return answer;
}

console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));
