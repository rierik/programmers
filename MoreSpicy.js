//https://school.programmers.co.kr/learn/courses/30/lessons/42626

function solution(scoville, K) {
  var answer = 0;
  scoville.sort((a, b) => a - b); // 오름차순 정렬
  console.log({ scoville });
  while (scoville[0] < K) {
    if (scoville.length < 2) return -1; // 더 이상 섞을 수 없을 때
    const first = scoville.shift(); // 가장 낮은 스코빌 지수
    const second = scoville.shift(); // 두 번째로 낮은 스코빌 지수
    const newScoville = first + second * 2; // 새로운 스코빌 지수
    scoville.push(newScoville); // 새로운 스코빌 지수를 배열에 추가
    scoville.sort((a, b) => a - b); // 다시 정렬
    answer++; // 섞은 횟수 증가
  }
  return answer;
}

console.log(solution([2, 1, 3, 9, 10, 12], 7)); //2
