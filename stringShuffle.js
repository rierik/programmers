/* 
길이가 같은 두 문자열 str1과 str2가 주어집니다.

두 문자열의 각 문자가 앞에서부터 서로 번갈아가면서 한 번씩 등장하는 문자열을 만들어 return 하는 solution 함수를 완성해 주세요.

조건 
1 ≤ str1의 길이 = str2의 길이 ≤ 10
str1과 str2는 알파벳 소문자로 이루어진 문자열입니다.
// 조건을 더 꼼꼼히 봤다면 min을 쓰지 않는 로직을 짜도 됐음
*/
function solution(str1, str2) {
  let result = '';

  const length = Math.min(str1.length, str2.length);
  for (let i = 0; i < length; i++) {
    result += str1[i] + str2[i];
  }

  result += str1.slice(length) + str2.slice(length);

  return result;
}

/* 다른 사람 풀이 */

function solution(str1, str2) {
  return [...str1].map((x, idx) => x + str2[idx]).join('');
}
