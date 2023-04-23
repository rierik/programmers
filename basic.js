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
