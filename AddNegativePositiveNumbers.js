//https://school.programmers.co.kr/learn/courses/30/lessons/76501

function solution(absolutes, signs) {
  var answer = 0;

  for (i = 0; i < absolutes.length; i++) {
    if (signs[i]) {
      answer += absolutes[i];
    } else {
      answer += absolutes[i] * -1;
    }
  }
  return answer;
}

// 다른 풀이
function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + val * (signs[i] ? 1 : -1), 0);
}

function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((v, i) => {
    if (signs[i]) {
      answer += v;
    } else {
      answer -= v;
    }
  });
  return answer;
}

console.log(solution([4, 7, 12], [true, false, true])); // 9
console.log(solution([1, 2, 3], [false, false, true])); // 0
