//https://school.programmers.co.kr/learn/courses/30/lessons/154539
//시간 초과 에러
function solution(numbers) {
  var answer = [];

  for (let i = 0; i < numbers.length; i++) {
    let temp = numbers[i];
    let found = false;

    for (let j = i + 1; j < numbers.length; j++) {
      if (temp < numbers[j]) {
        answer.push(numbers[j]);
        found = true;
        break;
      }
    }

    if (!found) answer.push(-1);
  }
  return answer;
}
console.log(solution([2, 3, 3, 5])); //[3, 5, 5, -1]

//다른 사람 풀이
function solution(numbers) {
  var answer = Array(numbers.length);
  var check = [0];
  for (var i = 1; i < numbers.length; i++) {
    while (check.length && numbers[check[check.length - 1]] < numbers[i]) {
      answer[check.pop()] = numbers[i];
    }
    check.push(i);
  }
  while (check.length) {
    answer[check.pop()] = -1;
  }
  return answer;
}
