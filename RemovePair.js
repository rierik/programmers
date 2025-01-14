// https://school.programmers.co.kr/learn/courses/30/lessons/12973
function solution(s) {
  let stack = [];

  for (const character of s) {
    console.log('stack.length', stack[stack.length - 1], stack.length);
    console.log('stack', stack);
    if (stack.length > 0 && stack[stack.length - 1] == character) {
      stack.pop();
    } else stack.push(character);
  }

  return stack.length === 0 ? 1 : 0;
}

console.log(solution('baabaa'));
