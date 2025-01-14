//https://school.programmers.co.kr/learn/courses/30/lessons/42885
function solution(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);

  let i = 0;
  let j = people.length - 1;

  while (i <= j) {
    if (people[i] + people[j] <= limit) {
      // 가장 가벼운 사람과 가장 무거운 사람이 같이 탈 수 있는 경우
      i++;
    }
    // 가장 무거운 사람은 항상 보트에 태움
    j--;
    answer++; // 보트 사용
  }

  return answer;
}

console.log(solution([70, 50, 80], 100));
