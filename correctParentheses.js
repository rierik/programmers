//https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  var answer = true;
  const numberArr = s.split('');

  let leftParentheseNum = 0;
  let rightParentheseNum = 0;

  console.log(numberArr);
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] === '(') {
      leftParentheseNum++;
    } else if (numberArr[i] === ')') {
      rightParentheseNum++;
    }

    if (leftParentheseNum - rightParentheseNum < 0) {
      return false;
    }
  }

  return leftParentheseNum === rightParentheseNum;
}

console.log(solution('())((()))(()'));
console.log(solution('((((())()(()))())'));
console.log(solution(')()('));
console.log(solution('(()('));
