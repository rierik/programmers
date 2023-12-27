function solution(my_string, overwrite_string, s) {
  var answer = '';

  const before = my_string.slice(0, s); // s 이전 부분을 잘라냄
  const after = my_string.slice(s + overwrite_string.length); // s + overwrite_string.length 이후 부분을 잘라냄
  answer = before + overwrite_string + after; // 대체된 문자열 생성

  return answer;
}
