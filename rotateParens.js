// https://school.programmers.co.kr/learn/courses/30/lessons/76502
function solution(s) {
  // 괄호가 올바른 문자열인지 확인하는 함수
  function isValid(str) {
    const stack = [];
    const matchingBrackets = {
      ')': '(',
      '}': '{',
      ']': '[',
    };

    for (let char of str) {
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else if (char === ')' || char === '}' || char === ']') {
        if (stack.pop() !== matchingBrackets[char]) {
          return false;
        }
      }
    }

    return stack.length === 0;
  }

  let count = 0;

  // 문자열을 회전시키며 검사
  for (let i = 0; i < s.length; i++) {
    const rotatedString = s.slice(i) + s.slice(0, i); // i번째에서 회전된 문자열
    if (isValid(rotatedString)) {
      count++;
    }
  }

  return count;
}
console.log(solution('[](){}', 3));
