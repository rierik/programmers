//https://school.programmers.co.kr/learn/courses/30/lessons/154539
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
