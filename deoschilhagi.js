/* 덧칠하기 */
/* 
n:8 m:4 section:[2,3,6]
n:5 m:4 section:[1,3]
n:4 m:1 section:[1,2,3,4]
*/
function solution(n, m, section) {
  var answer = 0;
  //n은 딱히 생각할 이유가 없고 section을 순차적으로 순회해서 m만큼 +하면서 돌고 칠해진 마지막 인덱스를 갱신해주면 될듯

  //1번 예시를 예로들면
  //1,2,3,4 || 5,6,(7,8) 칠해서 총 두번
  //2번을 예시로 들면
  //1,2,3,4 총1번
  //3번 예시로 들면
  //1 || 2 || 3 || 4

  // 칠한 마지막 인덱스
  let part = 0;

  // section을 forEach() 메서드로 하나씩 확인한다.
  section.forEach((s) => {
    // 현재 구역이 현재까지 칠한 구역보다 크다면
    if (s > part) {
      // 페인트를 칠했으니 1증가 시킨다.
      answer++;
      // 구역을 칠해주고 현재까지 칠한 구역을 업데이트 시켜준다.
      part = s + m - 1;
    }
  });
  return answer;
}
