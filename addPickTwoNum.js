//https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  var answer = [];
  let temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (i !== j) {
        temp.push(numbers[i] + numbers[j]);
      }
    }
  }

  const set = new Set(temp);
  answer = [...set];

  answer.sort((a, b) => a - b);

  return answer;
}

console.log(solution([2, 1, 3, 4, 1]));

//다른풀이
function solution(numbers) {
  var answer = [];
  //들어온 배열의 요소를 확인한다.
  //배열의 두개 요소를 뽑아 덧셈한 모든 경우의 수를 구한다.
  //중복된 값은 제거한다.
  //배열값을 리턴한다.
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (answer.indexOf(numbers[i] + numbers[j]) === -1) {
        answer.push(numbers[i] + numbers[j]);
      }
    }
  }

  return answer.sort((a, b) => a - b);
}

function solution(numbers) {
  var answer = [];
  numbers = numbers.sort();
  console.log(numbers);
  for (var i = 0; i < numbers.length; i++) {
    for (var k = i + 1; k < numbers.length; k++) {
      if (!answer.includes(numbers[i] + numbers[k])) {
        answer.push(numbers[i] + numbers[k]);
      }
    }
  }
  answer = answer.sort(function (a, b) {
    return a - b;
  });
  return answer;
}
