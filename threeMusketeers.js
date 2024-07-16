//https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
  var answer = 0;
  for (i = 0; i < number.length - 2; i++) {
    for (j = i + 1; j < number.length - 1; j++) {
      for (k = j + 1; k < number.length; k++) {
        console.log('number.length - 1 :::]]]]]', i, j, k);
        console.log('k', k);
        if (number[i] + number[j] + number[k] == 0) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}

solution([-2, 3, 0, 2, -5]);
