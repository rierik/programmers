/* 
문자열 my_string, overwrite_string과 정수 s가 주어집니다. 문자열 my_string의 인덱스 s부터 overwrite_string의 길이만큼을 문자열 overwrite_string으로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.


my_string	        overwrite_string	s	   result
"He11oWor1d"	    "lloWorl"	        2	   "HelloWorld"
"Program29b8UYP"	"merS123"	        7	   "ProgrammerS123"
*/

function solution(my_string, overwrite_string, s) {
  var answer = '';

  const before = my_string.slice(0, s); // s 이전 부분을 잘라냄
  const after = my_string.slice(s + overwrite_string.length); // s + overwrite_string.length 이후 부분을 잘라냄
  answer = before + overwrite_string + after; // 대체된 문자열 생성

  return answer;
}
