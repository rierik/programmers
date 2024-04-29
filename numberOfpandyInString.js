/* 
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

제한사항
문자열 s의 길이 : 50 이하의 자연수
문자열 s는 알파벳으로만 이루어져 있습니다.


입출력 예
s	answer
"pPoooyY"	true
"Pyy"	false
입출력 예 설명
입출력 예 #1
'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

입출력 예 #2
'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

※ 공지 - 2021년 8월 23일 테스트케이스가 추가되었습니다.
*/

function solution(s) {
  var answer = true;

  s = s.toLowerCase();

  let pleng = 0;
  let yleng = 0;
  for (const string of s) {
    if ('p' == string) pleng++;
    else if ('y' == string) yleng++;
  }

  answer = pleng == yleng ? true : false;
  console.log(answer);
  return answer;
}

solution('kkk');

//
function numPY(s) {
  return s.match(/p/gi).length == s.match(/y/gi).length;
}
//numPY의 의견
/* 
p와 y둘다 없을 때 에러..

p와 y가 둘 다 없을 때는 match 함수는 null을 반환합니다. 그래서 null은 length함수를 가지고 있지 않기에, length 함수가 없다는 undefined 에러가 나기 때문에. 변수를 선언하고, 해당 match의 결과가 null일 때는 그 변수에 0을 넣어준 뒤 그 변수를 비교하는 방식으로 해결해야 예외처리를 완벽하게 할 수 있습니다.
*/

//
function numPY(s) {
  //함수를 완성하세요
  console.log('s.toUpperCase().spli', s.toUpperCase().split('Y'));

  return s.toUpperCase().split('P').length === s.toUpperCase().split('Y').length;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
// console.log(numPY('pPoooyY'));
// console.log(numPY('Pyy'));

//numPY의 의견
// 와 신기하다 split에 separator줘서 나누면 리턴되는 배열의 길이는 일치되는 개수 + 1일테니까 이렇게도 비교가 가능하군요
