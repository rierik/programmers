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

//좀 더 깔끔한 풀이
function solution(s) {
  let cnt = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? (cnt += 1) : (cnt += -1);
    if (cnt < 0) {
      break;
    }
  }
  return cnt === 0 ? true : false;
}

console.log(solution('())((()))(()'));
console.log(solution('((((())()(()))())'));
console.log(solution(')()('));
console.log(solution('(()('));
