/* 문자열을 정수로 변환하기 */
/* 
문제설명
숫자로만 이루어진 문자열 n_str이 주어질 때, n_str을 정수로 변환하여 return하도록 solution 함수를 완성해주세요.

입출력의 예
"10"을 정수로 바꾸면 10입니다.

*/

function solution(n_str) {
  var answer = 0;
  answer = parseInt(n_str);
  return answer;
}

/* 문자열로 변환 */
/* 
문제 설명
정수 n이 주어질 때, n을 문자열로 변환하여 return하도록 solution 함수를 완성해주세요.

입출력의 예
123을 문자열로 변환한 "123"을 return합니다.
*/

function solution(n) {
  var answer = '';
  answer = String(n);
  return answer;
}

/* 
n 번째 원소까지

문제설명
정수 리스트 num_list와 정수 n이 주어질 때, num_list의 첫 번째 원소부터 n 번째 원소까지의 모든 원소를 담은 리스트를 return하도록 solution 함수를 완성해주세요.

입출력의 예
[2, 1, 6]의 첫 번째 원소부터 첫 번째 원소까지의 모든 원소는 [2]입니다.
*/

function solution(num_list, n) {
  var answer = [];
  const test = num_list;
  answer = num_list.splice(0, n);

  return answer;
}

/* 
카운트 업

문제 설명
정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 return하도록 solution 함수를 완성해주세요.

입출력의 예
3부터 10까지의 숫자들을 담은 리스트 [3, 4, 5, 6, 7, 8, 9, 10]를 return합니다.
*/

function solution(start, end) {
  var answer = [];

  for (let i = start; i <= end; i++) {
    answer.push(i);
  }

  return answer;
}

/* flag에 따라 다른 값 반환하기 */
/* 
문제 설명
두 정수 a, b와 boolean 변수 flag가 매개변수로 주어질 때, flag가 true면 a + b를 false면 a - b를 return 하는 solution 함수를 작성해 주세요.
*/

function solution(a, b, flag) {
  return flag ? a + b : a - b;
}

/* 공백으로 구분하기 1
문제 설명
단어가 공백 한 개로 구분되어 있는 문자열 my_string이 매개변수로 주어질 때, my_string에 나온 단어를 앞에서부터 순서대로 담은 문자열 배열을 return 하는 solution 함수를 작성해 주세요.
*/

function solution(my_string) {
  var answer = [];
  answer = my_string.split(' ');
  return answer;
}

/* 문자열의 앞의 n글자
문제 설명
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 앞의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요.
 */
function solution(my_string, n) {
  var answer = '';
  answer = my_string.slice(0, n);
  return answer;
}

/* 부분 문자열
문제 설명
어떤 문자열 A가 다른 문자열 B안에 속하면 A를 B의 부분 문자열이라고 합니다. 예를 들어 문자열 "abc"는 문자열 "aabcc"의 부분 문자열입니다.

문자열 str1과 str2가 주어질 때, str1이 str2의 부분 문자열이라면 1을 부분 문자열이 아니라면 0을 return하도록 solution 함수를 완성해주세요.
*/

function solution(str1, str2) {
  if (str2.includes(str1)) {
    return 1;
  } else {
    return 0;
  }
}

function solution(str1, str2) {
  var answer = 0;
  const str = str1;
  const result = str2.indexOf(str);
  answer = result >= 0 ? 1 : 0;
  return answer;
}

/* 대문자로 바꾸기
문제 설명
알파벳으로 이루어진 문자열 myString이 주어집니다. 모든 알파벳을 대문자로 변환하여 return 하는 solution 함수를 완성해 주세요.
*/

function solution(myString) {
  var answer = '';
  answer = myString.toUpperCase();
  return answer;
}

/* 공배수
문제 설명
정수 number와 n, m이 주어집니다. number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 return하도록 solution 함수를 완성해주세요. 
 */

function solution(number, n, m) {
  var answer = 0;
  if (number % n === 0 && number % m === 0) {
    return (answer = 1);
  } else {
    return (answer = 0);
  }
}

/*문자열 곱하기
문제 설명
문자열 my_string과 정수 k가 주어질 때, my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요. 
 */

function solution(my_string, k) {
  var answer = '';
  answer = my_string.repeat(k);
  return answer;
}

/* 정수 부분
문제 설명
실수 flo가 매개 변수로 주어질 때, flo의 정수 부분을 return하도록 solution 함수를 완성해주세요. 
*/

function solution(flo) {
  var answer = 0;
  answer = Math.floor(flo);
  return answer;
}

/* n의 배수
문제 설명
정수 num과 n이 매개 변수로 주어질 때, num이 n의 배수이면 1을 return n의 배수가 아니라면 0을 return하도록 solution 함수를 완성해주세요. 
*/

function solution(num, n) {
  var answer = 0;
  if (num % n === 0) {
    answer = 1;
  } else {
    answer = 0;
  }
  return answer;
}

/* 정수찾기
문제 설명
정수 리스트 num_list와 찾으려는 정수 n이 주어질 때, num_list안에 n이 있으면 1을 없으면 0을 return하도록 solution 함수를 완성해주세요.
*/

function solution(num_list, n) {
  var answer = 0;
  answer = num_list.includes(n) ? 1 : 0;
  return answer;
}

/* 문자열의 뒤의 n글자
문제 설명
문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string의 뒤의 n글자로 이루어진 문자열을 return 하는 solution 함수를 작성해 주세요. 
 */

function solution(my_string, n) {
  var answer = '';
  console.log('my_string.length-n', my_string.length - n);
  answer = my_string.slice(my_string.length - n, my_string.length);
  return answer;
}
