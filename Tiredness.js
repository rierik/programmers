//https://school.programmers.co.kr/learn/courses/30/lessons/87946
function solution(k, dungeons) {
  let maxCount = 0; // 최대 탐험 가능한 던전 개수 저장

  const dungeonCount = dungeons.length;
  const visited = new Array(dungeonCount).fill(false); // 방문 여부 체크

  function explore(currentFatigue, exploredCount) {
    maxCount = Math.max(maxCount, exploredCount); // 최대값 갱신

    for (let i = 0; i < dungeonCount; i++) {
      let [minFatigue, consumeFatigue] = dungeons[i];

      if (visited[i] || currentFatigue < minFatigue) continue; // 탐험 불가능한 경우 패스

      visited[i] = true; // 탐험 시작 (방문 체크)
      explore(currentFatigue - consumeFatigue, exploredCount + 1); // 다음 던전 탐험
      visited[i] = false; // 원래 상태로 되돌리기 (백트래킹) 재귀 호출은 스택 구조로 실행된다. 각 호출이 끝나면 visited[i] = false;를 실행하면서 탐색을 원상복구한다.
    }
  }

  explore(k, 0); // 탐험 시작
  return maxCount; // 최댓값 반환
}

console.log(
  solution(80, [
    [50, 40],
    [30, 10],
    [80, 20],
  ]),
); //3
