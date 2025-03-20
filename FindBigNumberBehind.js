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

function solution(numbers) {
  const n = numbers.length;
  const answer = new Array(n).fill(-1); // 결과를 저장할 배열 초기화
  const stack =; // 스택 초기화

  for (let i = 0; i < n; i++) {
    // 스택이 비어있지 않고, 스택의 top에 해당하는 numbers의 값이 현재 numbers[i]보다 작다면
    while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
      // 스택에서 index를 꺼내고, 해당 index의 answer 값을 현재 numbers[i]로 설정합니다.
      // 이는 스택 top에 있던 숫자의 다음 큰 수가 numbers[i]임을 의미합니다.
      answer[stack.pop()] = numbers[i];
    }
    // 현재 index를 스택에 push합니다.
    stack.push(i);
  }

  return answer;
}