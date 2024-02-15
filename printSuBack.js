/* 
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
*/

function solution(num) {
  let result = '';

  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) {
      result += '수';
    } else {
      result += '박';
    }
  }

  return result;
}

console.log(solution(5));

/*  */
function waterMelon(n) {
  var result = '';
  //함수를 완성하세요
  for (var i = 0; i < n; i++) {
    result += i % 2 == 0 ? '수' : '박';
  }
  return result;
}
